type Fn = (...args: any[]) => any

const {isArray: $isArray} = Array


// Modality
// + REQUIRED {#R}
// * SHOULD {#S}
// ? MAY {#M}
// Communication
// _ Proposition {#P}
// ! Important question {#Q}
// Internal
// = Needs|TBD {#N}
// . Consider {#C}
// ~ Bad {#B}

export default its

function its<F extends Fn>(
  fn: F,
  suites: Array<[
    string,
    Parameters<F> | (
      Parameters<F>[0] extends any[]
      ? never
      : Parameters<F>[0]
    ),
    ReturnType<F>
  ]>
) {
  suites.forEach(([name, input, output]) => it(name, () => {
    const exp = expect(
      $isArray(input)
      ? fn(...input)
      : fn(input)
    )
      
    return (
      name.match(/^.?N\s/)
      ? exp.not
      : exp
    )[
      output !== null && typeof output === "object"
      ? "toStrictEqual"
      : "toBe"
    ](
      output
    )
  }))
}