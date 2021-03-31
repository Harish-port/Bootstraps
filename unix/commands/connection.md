# rlogin hostname 
lets you connect to a remote host

# telnet hostname
also lets you connect to a remote host. Use rlogin whenever possible.

# ftp hostname
lets you download files from a remote host which is set up as an ftp-server. This is a common method for exchanging academic papers and drafts. If you need to make a paper of yours available in this way, you can (temporarily) put a copy in /user/ftp/pub/TMP. 

For more permanent solutions, ask Emma. The most important commands within ftp are get for getting files from the remote machine, and put for putting them there (mget and mput let you specify more than one file at once). Sounds straightforward, but be sure not to confuse the two, especially when your physical location doesn't correspond to the direction of the ftp connection you're making. ftp just overwrites files with the same filename. If you're transferring anything other than ASCII text, use binary mode.