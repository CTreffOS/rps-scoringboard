## The Rock-Paper-Scissor Scoringboard ##
This repo holds all data necessary to display the result of the last game of Rock-Paper-Scissors.

## Set up ##
I setted it up in a Raspberry Pi. And these are the steps need to be done after a fresh installation of Raspbian:
	
	sudo passwd root
	su
	raspi-config
	apt-get update
	apt-get upgrade
	adduser ctreffos --ingroup pi --ingroup adm --ingroup dialout --ingroup cdrom --ingroup sudo --ingroup audio --ingroup video --ingroup plugdev --ingroup games --ingroup users --ingroup netdev --ingroup input --ingroup spi --ingroup gpio --quiet
	echo "ctreffos ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers
	apt-get install vim
	apt-get install apache2
	su ctreffos
	cd
	mkdir github
	mkdir github/ctreffos
	cd github/ctreffos
	git config --global user.email "you@example.com"
	git config --global user.name "Your Name"
	git clone https://github.com/CTreffOS/rps-scoringboard.git
	sudo cp /home/ctreffos/github/ctreffos/rps-scoringboard/* /var/www
	
After this setup the leaderboard should be available.
