# date
shows the current date and time.

# cal
shows a calendar of the current month. Use e.g., 'cal 10 1995' to get that for October 95, or 'cal 1995' to get the whole year.

# man commandname
shows you the manual page for the command

# echo $VARIABLE
shows the value of an environment variable

# !!
repeat the previous command (but CTRL-p, is safer, because you have hit return in addition)

# !pattern
repeat the last command that starts with pattern

# setenv [ cmd not found]
lets you set environment variables. For example, if you typed a wrong value for the TERM variable when logging in, you don't have to log out and start over, but you can just do setenv TERM vt100 (or whatever). 

# env
To see what all your environment variables are set to, type env. The one that you're most likely to have to set is the DISPLAY variable, when using an X-display.

# unset VAR
lets you un-set environment variables. Useful, for example, if you've usually set autologout but want to stay logged on for a while without typing for some reason, or if you set the DISPLAY variable automatically but want to avoid opening windows for some reason.

# source filename
you need to source your dotfiles after making changes for them to take effect (or log off and in again)

# load [cmd not found]
will show you the load average graphically

# ispell filename
will check the spelling in your file. If you're running it on a LaTeX file use the -T option to tell it to ignore the LaTeX commands. You can create and use your own dictionary to avoid having it tell you that your own name, those of fellow linguists, and linguistics terminology are a typos in every paper you write.

# weblint
checks the syntax of html files

# latex2html
translates LaTeX files into HTML

# wn word option
lets you access the WordNet database and display, for example, synonyms, hypernyms, or hyponyms, depending on the option you select


