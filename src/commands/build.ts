import {Command, flags} from '@oclif/command'
import {i32, Module} from 'binaryen'

export default class Build extends Command {
  static description = 'Builds your .frg file(s).'

  static examples = [
    `$ forge build test.frg -o test.wasm
    Built test.wasm!
    `,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'o', description: 'output file'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f', description: 'force replace output files'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Build)

    const myModule = new Module()

    myModule.addFunction('add', myModule.addFunctionType('iii', i32, [i32, i32]), [i32],
      myModule.block('test', [
        myModule.setLocal(2,
          myModule.i32.add(
            myModule.getLocal(0, i32),
            myModule.getLocal(1, i32)
          )
        ),
        myModule.return(
          myModule.getLocal(2, i32)
        )
      ])
    )

    myModule.addFunctionExport('add', 'add')

    // Optimize the module using default passes and levels
    myModule.optimize()
    // Validate the module
    if (!myModule.validate())
      throw new Error('validation error')

    // Generate text format and binary
    let textData = myModule.emitText()
    let wasmData = myModule.emitBinary()

    this.log('Build complete: ' + textData)
    this.log('Build complete (wasm): ' + wasmData)

    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
