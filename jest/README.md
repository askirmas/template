# Jest Helpers

## [`toMatchSchema`](https://www.npmjs.com/package/jest-json-schema) names hints

To use names of added schemas you need to 'overload' jest's `expect`. Examples of usage:
```typescript
import launch from "@kirmas/jest/ajv.jest"
import schemas from "./schemas.json"

const schemas = {
  "first": {"$schema": "http://json-schema.org/draft-07/schema#", "type": "object"},
  "second": {"$schema": "http://json-schema.org/draft-07/schema#", "type": "array"}
}

var expect = launch(schemas)

it('ordinary', () => expect(
	data
).toMatchSchema({
  $ref:"third" // Type notation from `@types/jest-json-schema`
}))

it('ordinary', () => expect(
	data
).toMatchSchema<1>({ // TypeScript takes overloaded method notation with permitted `"first"|"second" === keyof typeof schemas`
  //@ts-expect-error
  $ref:"third"
}))
```

Optionally you can supply own set of values in generic like `launch<"Hello"|"World">(...)` 
