// luma.gl
// SPDX-License-Identifier: MIT
// Copyright (c) vis.gl contributors

import test from 'tape-promise/tape';
import {Texture} from '../../core/src/index';
import {picking, ShaderModule} from '../../shadertools/src/index';
// import {_ShaderInputs as ShaderInputs} from '@luma.gl/engine';
import {ShaderInputs} from '../src/shader-inputs';

test('ShaderInputs#picking', t => {
  const shaderInputsUntyped = new ShaderInputs({picking});
  // Add
  shaderInputsUntyped.setProps({picking: {highlightedObjectColor: [255, 255, 255]}});
  t.ok(shaderInputsUntyped, 'untyped');

  // @ts-expect-error
  shaderInputsUntyped.setProps({picking: {invalidKey: 1}});

  const shaderInputs = new ShaderInputs<{picking: typeof picking.props}>({picking});
  shaderInputs.setProps({picking: {highlightedObjectColor: [255, 255, 255]}});
  t.ok(shaderInputs, 'typed access');

  t.end();
});

test('ShaderInputs#picking', t => {
  const shaderInputsUntyped = new ShaderInputs({picking});
  shaderInputsUntyped.setProps({picking: {highlightedObjectColor: [255, 255, 255]}});
  t.ok(shaderInputsUntyped, 'untyped');

  const shaderInputs = new ShaderInputs<{picking: typeof picking.props}>({picking});
  shaderInputs.setProps({picking: {highlightedObjectColor: [255, 255, 255]}});

  // @ts-expect-error - if this stops generating an error, we have should trigger a typescript error here
  shaderInputs.setProps({picking: {invalidKey: true}});

  t.ok(shaderInputs, 'typed access');

  // t.comment(JSON.stringify(shaderInputs.getUniformBufferValues(), null, 2));

  t.end();
});

test('ShaderInputs#picking prop merge', t => {
  const shaderInputs = new ShaderInputs<{picking: typeof picking.props}>({picking});
  const expected = {...picking.defaultUniforms} as typeof picking.uniforms;
  t.deepEqual(shaderInputs.moduleUniforms.picking, expected, 'defaults set');

  shaderInputs.setProps({picking: {highlightColor: [255, 0, 255]}});
  expected.highlightColor = [1, 0, 1, 1]; // Color normalized and alpha added
  t.deepEqual(shaderInputs.moduleUniforms.picking, expected, 'Only highlight color updated');

  // Setting the highlighted object also enables highlight
  shaderInputs.setProps({picking: {highlightedObjectColor: [255, 255, 255]}});
  expected.highlightedObjectColor = [255, 255, 255];
  expected.isHighlightActive = true;
  t.deepEqual(
    shaderInputs.moduleUniforms.picking,
    expected,
    'Only highlight object and highlight active updated'
  );

  t.end();
});

test('ShaderInputs#bindings', t => {
  [true, false].map(callback => {
    t.comment(`custom module created ${callback ? 'with' : 'without'} getUniforms()`);
    type CustomProps = {color: number[]; colorTexture: Texture};
    const custom: ShaderModule<CustomProps> = {
      name: 'custom',
      uniformTypes: {color: 'vec3<f32>'},
      uniformPropTypes: {color: {value: [0, 0, 0]}}
    };
    if (callback) {
      custom.getUniforms = ({color, colorTexture}) => ({color, colorTexture});
    }

    const shaderInputs = new ShaderInputs<{
      custom: CustomProps;
    }>({custom});

    const MOCK_TEXTURE = 'MOCK_TEXTURE' as unknown as Texture;
    shaderInputs.setProps({
      custom: {color: [255, 0, 0], colorTexture: MOCK_TEXTURE}
    });
    t.deepEqual(shaderInputs.moduleUniforms.custom.color, [255, 0, 0], 'custom color updated');
    t.equal(shaderInputs.moduleBindings.custom.colorTexture, MOCK_TEXTURE, 'colorTexture updated');

    const uniformValues = shaderInputs.getUniformValues();
    const bindings = shaderInputs.getBindings();
    t.deepEqual(uniformValues, {custom: {color: [255, 0, 0]}}, 'uniformValues correct');
    t.deepEqual(bindings, {colorTexture: 'MOCK_TEXTURE'}, 'bindings correct');

    t.end();
  });
});

// / Start sample module

type ModuleAUniforms = {opacity?: number};
type ModuleBUniforms = {color?: number[]};

const moduleA = {
  name: 'A',
  vs: `
  uniform moduleAUniforms {
    float opacity;
  } a;
  `,
  uniformTypes: {
    opacity: 'f32'
  },
  uniforms: {opacity: 1}
} as const satisfies ShaderModule<{}, ModuleAUniforms>;

const moduleB = {
  name: 'B',
  dependencies: [moduleA] as ShaderModule[],
  vs: `
  uniform moduleBUniforms {
    vec4 color;
  } b;

  vec4 getColor() {
    return vec4(b.color.rgb, b.color.a * a.opacity);
  }
  `,
  uniformTypes: {
    color: 'vec4<f32>'
  },
  getUniforms: (opts: ModuleBUniforms) => {
    const uniforms: ModuleBUniforms = {};
    if (opts.color) {
      uniforms.color = opts.color.map(x => x / 255);
      uniforms.color[3] = uniforms.color[3] ?? 1;
    }
    return uniforms;
  }
} as const satisfies ShaderModule<ModuleBUniforms, ModuleBUniforms>;

// / End sample module

test('ShaderInputs#nested module', t => {
  const shaderInputs = new ShaderInputs({B: moduleB});
  shaderInputs.setProps({B: {color: [255, 255, 0]}});

  const uniforms = shaderInputs.getUniformValues();

  t.deepEqual(uniforms.A, {opacity: 1}, 'Module A uniforms');
  t.deepEqual(uniforms.B, {color: [1, 1, 0, 1]}, 'Module B uniforms');

  t.end();
});
