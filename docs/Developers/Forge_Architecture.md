# Forge Architecture

Forge has the same architecture as any other transpiler; take [Babel](https://babeljs.io/), for instance. 
In the diagram below, we explore this architecture in more detail.

<img src="../../_assets/architecture.svg" alt="Forge Architecture">
*This is the Forge Architecture diagram.*

## Architecture Breakdown

Here we will take a moment to go through each step of the process from a high overview standpoint.
Technical and implementation details can be found in the source itself.

### Input Code

The transpiler takes a file or set of files as an argument. The files are then opened using the input
stream function, and read in line by line.

### Parser / AST

The input stream feeds the code into the parser. The parser is in charge of taking that code and generating
and Abstract Syntax Tree (AST for short). This ATS is a representation of the Tokens in the file; a token
being an individual section of the code, I.E. a variable or statement. It then feeds this AST into the
Transformer.

### Transformer

The Transformer takes an AST as an input, and outputs one as well. However, the transformer optimizes the AST
before sending it on; this allows us to make changes to the AST that refactor code that would not fit well
in WebAssembly. Then, the AST is forwarded on to the Generator.

### Generator

The Generator is fairly straightforward; it takes an AST as input, and outputs WebAssembly. This process is
done through the use of a project called [Binaryen](https://github.com/WebAssembly/binaryen). Binaryen
takes our AST and produces the associated WebAssembly from there. Then, we take the output and feet it to
the Output Stream.

### Output

As the final step, we write the code into an output file, the name of which can be specified by CLI arguments.
This output can be used directly in the browser, and should be the final step Forge needs to handle.
