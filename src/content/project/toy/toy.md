# Toy

Toy is a fake microcontroller virtual machiene with a tiny instruction set. I have been learning about microcontrollers, assembly languages, and compilers. I wanted to have a better understanding of some of the concepts i had been takleing and decited to build a VM. I believe modeling a real world problem in code is a great way understand how the problem actual works. I find that when my understanding of a system is flawwed my coding will have huge road blocks and many bugs. As I gain a deeper understanding of the system, the road bloks are cleared and the bugs are destroyed. Hah, Though Im sure that I've never written any substantial bug free code. Toy is broken into three main components the virutual machine logic, the assembler logic, and the UI. The UI, as allways, takes up most the code base. 

Before writing the Virtual Machine logic I did extensive research. I read several writeups from C VM implamentors. I even read the better part of MicroChip's PIC-32 data-sheet, and SiliconLab's LepordGecko data sheet. Though my understanding wasnt totaly solid at that point, I felt comfertable laying out some basic design decisions. 

Before breaking down the VM, assembler, and UI implamentations, I want to explain briefly how explain a processor(or VM) and assembler works.

The bigest decision I though I had to make was weather to build A Stack or a Register Machine. Register machines are simpler to implament, but reqire more work for programers to manage state and program logic. Stack machines manage a litteral Stack in using memory and some registers, and simply the programmers life. Both machines are equaly complete, meaning they can solve no more or no less problems. I originaly decited to build a register machine, but later upgraded it to a stack machine with the help of my friend @geluso.

The final machine has 7 registers "PABCDZS". P is the program counter, and keeps track of the memmory addres of the currenly executing instruction.
