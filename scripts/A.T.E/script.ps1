function init-TE {
    # Functions
    function Get-File
    {
        cls
        "Copying Atlas Files so we can make changes safely...."
        sleep 2
        cls
        Get-Change
        # Copies the file from the prod location to the change location
        robocopy C:\Users\Kylej\Documents\C0DE\Powershell\test_prod_folder C:\Users\Kylej\Documents\C0DE\Powershell\test_change_folder

    }

    function Get-Change
    {
        # Figure Out which option to chooose
        function Get-Answr {
            cls
            "Ok I will preface this with asking that you please be gentle with me. I am not A-I quality yet.."
            ""
            "Answer Options:"
            "1 = Adding a non-existent secure-folder"
            "2 = Modifying an existing secure-folder"
            "3 = Removing an existing secure-folder"
            "4 = I didn't mean to go this far, HELP I WANNA LEAVE!?"
            $fp = Read-Host "Your Answer (1/2/3/4): "
            $fp

            if ($fp -eq "1") {
               Add-Folder
                
            }
            elseif ($fp -eq "2") {

            }
            elseif ($fp -eq "3") {

            } 
            elseif ($fp -eq "4") {
                cls
                "I understand, Master, we all make mistakes."
                ""
                "Shutting Down..."
                sleep 1
                clear
            }
        }
        # Get secure folder record information
        function Get-SecFolderInfo {
            $server_name = Read-Host "Share-Name? (i.e 'PCAFSC00' or 'XXX1hy11') "
            $share_name = Read-Host "Server-Name? (i.e 'Server$') "
            $file_path = Read-Host "File-Path? (i.e '\Uniform\General') "
            $approvers = Read-Host "Who are the approvers? (i.e 'John Smith VPXXXXX, Jan Pam VPXXXXX') "

            $full_file_path$share_name + 
        }
        # Adds the folder information to the copied version of the prod folder
        function Add-Folder {
            cls
            "Ok we require a few things to ADD a Secure Folder Record, please answer the following:"
            ""
            Get-SecFolderInfo

        }
        Get-Answr 

    }

    function Set-Change

    {



    }

    function Set-File
    {
        # Copys and replaces the folders.txt from the change location to the prod location 
        if ($init) {
            robocopy C:\Users\Kylej\Documents\C0DE\Powershell\test_prod_folder\folders.txt C:\Users\Kylej\Documents\C0DE\Powershell\test_change_folder /it
        }

    }
    # init the text edit function
    function init-TE-func {
        cls
        "Initialising...."
        sleep 1
        Get-File
        cls
        Get-Change
    }

    cls
    "Welcome to the ATLAS Text-Document Editor - (A.T.E) for short."
    ""
    "Answer Options:"
    "Y = Start (A.T.E) to make ATLAS updates."
    "N = Return to K.O.D.I.N main-menu"
    "Q = Quit all running scripts"
	$init = Read-Host "Would you like to use my services (Y/N/Q)?"
	$init
    if ($init -eq 'Y') {
        init-TE-func
	}
	elseif ($init -eq 'N') {
		cls
		"Ok Returning to K.O.D.I.N...."
		sleep 1
		KyKODIN
	}
    elseif ($init -eq 'Q') {
		cls
		"Ok Shutting Down...."
		sleep 1
        clear
	}
	else {
		cls
		"**** Invalid Option. Try again. HINT: Enter 'Y' or 'N' ****"
		""
		""
		init-TE
	}
}
init-TE
