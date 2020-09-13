/// <reference types="jest" />
declare var expect: jest.Expect
// declare const it: jest.It
// declare const describe: jest.Describe

import { matchersWithOptions } from 'jest-json-schema';

export default launch

function launch<K extends string>(schemas: Record<K, any>) {
  expect.extend(matchersWithOptions({schemas}))
  // We need anyhow to use generic X - let's do it with `Exclude`
  type M<T> = {toMatchSchema<X>(name: {"$ref": Exclude<K, X>}) :T}
  type E = <T>(args: T) => jest.JestMatchersShape<
    jest.Matchers<void, T> & M<void>,
    jest.Matchers<Promise<void>, T> & M<Promise<void>>
  >

  return (expect as (E & jest.Expect))
}


