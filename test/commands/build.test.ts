import {expect, test} from '@oclif/test'

describe('build', () => {
  test
    .stdout()
    .command(['build'])
    .it('returns text version of code', ctx => {
      expect(ctx.stdout).to.contain('Build complete:')
    })
})
