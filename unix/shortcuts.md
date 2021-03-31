TAB --- complete filename or command up to the point of uniqueness
CTRL-u --- cancel whole line
CTRL-p --- show the last command typed, then the one before that, etc.
(you can also use the cursor up key for this)
CTRL-n --- go forwards in the history of commands
(you can also use the cursor down key for this)
CTRL-c --- cancel the processes after it has started
CTRL-z --- suspend a running process (e.g. in order to do something else in between)
you can then put the process in the background with bg
CTRL-l --- redraws the screen


| (piping) --- Lets you execute any number of commands in a sequence.
The second command will be executed once the first is done, and so forth, using the previous command's output as input. You can achieve the same effect by putting the output in a file and giving the filename as an argument to the second command, but that would be much more complicated, and you'd have to remember to remove all the junkfiles afterwards. Some examples that show the usefulness of this:

ls | more --- will show you one screenful at a time, which is useful with any command that will produce a lot of output, e.g. also ps -aux

man ls | grep time --- checks whether the man page for ls has something to say about listing files by time - very useful when you have a suspicion some command may be capable of doing what you want, but you aren't sure.

ls -lR | grep dvi --- will show you all your dvi files - useful to solve disk space problems, since they're large and usually can be deleted.