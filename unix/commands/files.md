# ls
lists your files

# ls -l
lists your files in 'long format', which contains lots of useful information, e.g. the exact size of the file, who owns the file and who has the right to look at it, and when it was last modified.

# ls -a 
lists all files, including the ones whose filenames begin in a dot, which you do not always want to see.
There are many more options, for example to list files by size, by date, recursively etc.

# more filename 
shows the first part of a file, just as much as will fit on one screen. Just hit the space bar to see more or q to quit. You can use /pattern to search for a pattern.

# emacs filename (cmd not found) 
is an editor that lets you create and edit a file. See the emacs page.

# mv filename1 filename2 
moves a file (i.e. gives it a different name, or moves it into a different directory (see below)

# cp filename1 filename2 
copies a file

# rm filename 
removes a file. It is wise to use the option below.

# rm -i  
will ask you for confirmation before actually deleting anything. 

# diff filename1 filename2
compares files, and shows where they differ.

# wc filename
tells you how many lines, words, and characters there are in a file

# chmod options filename 
lets you change the read, write, and execute permissions on your files. The default is that only you can look at them and change them, but you may sometimes want to change these permissions. 

For example, 
# chmod o+r 
filename will make the file readable for everyone.
# chmod o-r 
filename will make it unreadable for others again.

Note that for someone to be able to actually look at the file the directories it is in need to be at least executable. See help protection for more details.



# File Compression

# gzip filename 
compresses files, so that they take up much less space. Usually text files compress to about half their original size, but it depends very much on the size of the file and the nature of the contents. 

There are other tools for this purpose, too (e.g. compress), but gzip usually gives the highest compression rate. Gzip produces files with the ending '.gz' appended to the original filename.

# gunzip filename 
uncompresses files compressed by gzip.

# gzcat filename 
lets you look at a gzipped file without actually having to gunzip it (same as gunzip -c). 
You can even print it directly, using gzcat filename | lpr



# Printer commands

# lpr filename 
print. Use the -P option to specify the printer name if you want to use a printer other than your default printer. For example, if you want to print double-sided, use 'lpr -Pvalkyr-d', or if you're at CSLI, you may want to use 'lpr -Pcord115-d'. See 'help printers' for more information about printers and their locations.

# lpq 
check out the printer queue, e.g. to get the number needed for removal, or to see how many other files will be printed before yours will come out

# lprm jobnumber 
remove something from the printer queue. You can find the job number by using lpq. Theoretically you also have to specify a printer name, but this isn't necessary as long as you use your default printer in the department.

# genscript 
converts plain text files into postscript for printing, and gives you some options for formatting. Consider making an alias like alias ecop 'genscript -2 -r \!* | lpr -h -Pvalkyr' to print two pages on one piece of paper.

# dvips filename 
print .dvi files (i.e. files produced by LaTeX). You can use dviselect to print only selected pages. See the LaTeX page for more information about how to save paper when printing drafts.