
#--------------------------------------------------------------------------------------------------------------------------------
	#The following code is created and owned by: Kyle Lamont
	#Created on: 17/12/2020
#--------------------------------------------------------------------------------------------------------------------------------
#Objects

$KyChngPath = @{
	"hde" = Split-Path -leaf -path (Get-Location)
	"shw" = (Get-Location).path
}


#--------------------------------------------------------------------------------------------------------------------------------
#functions
function KyKODIN {
	function KyOptions {
		"Ok here is a list of available commands:"
		"1. Sort Files from a source to a destination directory"
		"2. Exit KODIN."
		$kyAnswer = Read-Host -Prompt "Enter your choice"
		$kyAnswer
		if ($kyAnswer -eq 1) {
			KyTooldirTool
		} 
		elseif ($kyAnswer -eq 2) {
			"Shutting Down..."
			sleep 1
			cls
		}
	}
	"Hello Master, (u.u)/ my name is KODIN (Kyle's Object Delivery Information Nest)."
	$kyStart = Read-Host "Would you like to use my services (Y/N)?"
	$kyStart 
	
	if ($kyStart -eq 'Y') {
		cls
		KyOptions
	}
	elseif ($kyStart -eq 'N') {
		cls
		"Ok Shutting Down...."
		sleep 1
		cls
	}
	else {
		cls
		"**** Invalid Option. Try again. HINT: Enter 'Y' or 'N' ****"
		""
		""
		KyKODIN
	}
}

function quoteOfTheDay {
	$num = get-random 10


	if ($num -eq 1) {
		""
		("   I refuse to join any club that would have me 
		as a member. 
		
		- Groucho Marx")
		"************************************************"
	}
	elseif ($num -eq 2) {
		""
		("   I always wanted to be somebody, but now I 
    realize I should have been more specific. 
	
		- Lily Tomlin")
		"************************************************"
	}
	elseif ($num -eq 3) {
		""
		("   A day without sunshine is like, you know, 
		   night. 
		
		- Steve Martin")
		"************************************************"
	}
	elseif ($num -eq 4) {
		""
		("   I love mankind it's people I can't stand. 
		
		- Charles M. Schulz")
		"************************************************"
	}
	elseif ($num -eq 5) {
		""
		("   I love mankind it's people I can't stand.
		
		- Charles M. Schulz")
		"************************************************"
	} 
	elseif ($num -eq 6) {
		""
		("   Age is something that doesn't matter, unless 
		you are a cheese. 
		
		- Luis Bunuel")
		"************************************************"
	}
	elseif ($num -eq 7) {
		""
		("   Behind every great man is a woman rolling 
		her eyes. 
		
		- Jim Carrey")
		"************************************************"
	}
	elseif ($num -eq 8) {
		""
		("   I am not a member of any organized political 
		party. I am a Democrat. 
		
		- Will Rogers")
		"************************************************"
	}
	elseif ($num -eq 9) {
		""
		("   Do not take life too seriously. You will 
	   never get out of it alive. 
		
		- Elbert Hubbard")
		"************************************************"
	}
	elseif ($num -eq 10) {
		""
		("   I refuse to join any club that would have me 
		as a member. 
		
		- Groucho Marx")
		"************************************************"
	}
	elseif ($num -eq 0) {
		""
		"   He who moves not forward. Goes only backward.
		
		-Kyle"
		"************************************************"
	}
}


function prompt {
# Shorten or extend the length of the current location
	$KyPHde = Split-Path -leaf -path (Get-Location)
	"$KyPHde> "
}


function MasterKyle {
	Clear-Host
	Write-Host ""
	Write-Host ""
	$master
	$p.shw
	Write-Host ""
	Write-Host ""
}

function KyTooldirTool {

	#Parameters
	#The script should take 2 arguments $source and $destination (for the source and destination folders).
	param([string]$source, [string]$destination)

	#Functions
	#2)	Functions
	#Create a function named CheckFolder that checks for the existence of a specific directory/folder that is passed 
	#to it as a parameter. Also, include a switch parameter named create. If the directory/folder does not exist and 
	#the create switch is specified, a new folder should be created using the name of the folder/directory that was 
	#passed to the function.
	function checkFldr ($source, [switch]$create) 
	{

			function falseDir 
			{
				""
				""
				"Unfortunately I could not find the following directory:"
				"'$source'"
				""
				"If you wish to create that folder in the current or absolute path specified."
				"Please, re-excecute the script and accept the prompt"
				""
				""
			}


			$ifFldr = Test-Path $source
			if ($create.IsPresent -and $ifFldr -eq $false)
			{
				"Ok Master, I could not locate the following directory:"
				"'$source'"
				""
				"Would you like me to create it for you?"
				""
				""
				$confirmation = mkdir $source -Confirm
				
				if($confirmation) 
				{
					""
					""
					"Ok Master, creating the directory now...."
					DisplFldrStats $source 'true'
				} 
				elseif ($confirmation -eq $false)
				{
					falseDir
				}
				
				""
				""
			} 
			elseif ($ifFldr)
			{
				DisplFldrStats $source
			} 
			elseif ($ifFldr -eq $false -and $create -eq $false)
			{
				falseDir 
			}
		}



	#Create a function named DisplayFolderStatistics to display folder statistics for a directory/path that is passed 
	#to it. Output should include the name of the folder, number of files in the folder, and total size of all files in 
	#that directory.
	function DisplFldrStats ($dir, $tru)
	{
				
				""
				""
				if($tru -eq 'true') 
				{
					"Ok, below are details about the new directory/folder created at the following path:"
				} 
				elseif ($tru -eq 'dest')
				{
					""
				}
				else 
				{
					"Below are details about the following directory/folder:"            
				}
				"'$dir'"
				""
				$findName = (Get-Item $dir).Name
				$results = Get-ChildItem $dir -Recurse | Measure-Object -Property length -sum
				$calc = [math]::Round(($results).sum/1GB,5) | Out-String
				$findsubFldrLgth = (Get-ChildItem $dir | Measure-Object -Property Attributes -Sum).Count
				$findDateCreatd = (Get-Item $dir).CreationTime
				"-----------------------------------------------------------------------"            
				" FolderName: $findName "
				""
				" Number of Items Within: $findsubFldrLgth "
				""
				" Date Created: $findDateCreatd "
				""
				" FolderSize[GB]: $calc "
				"------------------------------------------------------------------------"            
				""
				""
	}

	#3)	Main processing
	function cpyItem ($source, $destination) 
	{
		cls
		""
		""
		#c-i) Display a message when copying a file. The message should list where the file is being
		#moved from and where it is being moved to.
		"Copying Items Now to the following directory..."
		""
		foreach ($file in (Get-ChildItem -File $source)) 
		{
			$newpath = "$($destination)\$($file.extension.trimstart('.'))" 
			md $newpath -force 
			#c) Copy each file to the appropriate destination.
			#get all the files that need to be copied
			Copy-Item $file -Recurse $newpath
		}
		#d) display each target folder name with the file count and byte count for each folder.
		
		
		$dirs = dir $destination | ? {$_.PSIsContainer}
		foreach($tempDir in $dirs)
		{
		DisplFldrStats $tempDir.FullName
		}
		
		""
		""
		"...All Done. Here is the details about destination directory."
		DisplFldrStats $destination 'dest'
		""
		""
		Read-Host -Prompt "All tasks complete. I bid you a farewell, Master. (u.u)/ 'PRESS ENTER TO EXIT'"
		""
		""
		""
	} 

	function dirTool ($source, $destination)
	{
		cls
		""
		""
		"Welcome to the 'Directory Tool', where you can:"
		""
		" > Check specified source & destination directory/folder info."
		" > Create new destination directories/folders if the path doesn't exist."
		" > Copy items from a source to a destination directory/folder."
		""
		"Lets Start by specifying a Source Directory:"
		""
		$source = Read-Host -Prompt "Enter Source Directory" 
		""
		""
		"Excellent, now tell me the Destination Directory:"
		""
		$destination = Read-Host -Prompt "Enter Destination Directory" 
		cls
		cd -Path $source
		"Thanks Master, reading both directories/folders now...."
		""
		""
		#a) Test for existence of the source folder (using the CheckFolder function).
		checkFldr $source
		""
		""
		#b) Test for the existence of the destination folder; create it if it is not found (using the CheckFolder function 
		#with the –create switch).Write-Host "Testing Destination Directory - $destination"
		checkFldr $destination -create
		""
		""
		"Ok Master, would you like to copy all items from the following source directory:"
		"'$source'"
		""
		"To the following destination directory?:"
		"'$destination'"
		""
		Write-Warning "Enter 'Y' to proceed with copying." -WarningAction Inquire
		cpyItem $source $destination

		
	}
	dirTool
	#Parameters
	#The script should take 2 arguments $source and $destination (for the source and destination folders).
	param([string]$source, [string]$destination)

	#Functions
	#2)	Functions
	#Create a function named CheckFolder that checks for the existence of a specific directory/folder that is passed 
	#to it as a parameter. Also, include a switch parameter named create. If the directory/folder does not exist and 
	#the create switch is specified, a new folder should be created using the name of the folder/directory that was 
	#passed to the function.
	function checkFldr ($source, [switch]$create) 
	{

			function falseDir 
			{
				""
				""
				"Unfortunately I could not find the following directory:"
				"'$source'"
				""
				"If you wish to create that folder in the current or absolute path specified."
				"Please, re-excecute the script and accept the prompt"
				""
				""
			}


			$ifFldr = Test-Path $source
			if ($create.IsPresent -and $ifFldr -eq $false)
			{
				"Ok Master, I could not locate the following directory:"
				"'$source'"
				""
				"Would you like me to create it for you?"
				""
				""
				$confirmation = mkdir $source -Confirm
				
				if($confirmation) 
				{
					""
					""
					"Ok Master, creating the directory now...."
					DisplFldrStats $source 'true'
				} 
				elseif ($confirmation -eq $false)
				{
					falseDir
				}
				
				""
				""
			} 
			elseif ($ifFldr)
			{
				DisplFldrStats $source
			} 
			elseif ($ifFldr -eq $false -and $create -eq $false)
			{
				falseDir 
			}
		}



	#Create a function named DisplayFolderStatistics to display folder statistics for a directory/path that is passed 
	#to it. Output should include the name of the folder, number of files in the folder, and total size of all files in 
	#that directory.
	function DisplFldrStats ($dir, $tru)
	{
				
				""
				""
				if($tru -eq 'true') 
				{
					"Ok, below are details about the new directory/folder created at the following path:"
				} 
				elseif ($tru -eq 'dest')
				{
					""
				}
				else 
				{
					"Below are details about the following directory/folder:"            
				}
				"'$dir'"
				""
				$findName = (Get-Item $dir).Name
				$results = Get-ChildItem $dir -Recurse | Measure-Object -Property length -sum
				$calc = [math]::Round(($results).sum/1GB,5) | Out-String
				$findsubFldrLgth = (Get-ChildItem $dir | Measure-Object -Property Attributes -Sum).Count
				$findDateCreatd = (Get-Item $dir).CreationTime
				"-----------------------------------------------------------------------"            
				" FolderName: $findName "
				""
				" Number of Items Within: $findsubFldrLgth "
				""
				" Date Created: $findDateCreatd "
				""
				" FolderSize[GB]: $calc "
				"------------------------------------------------------------------------"            
				""
				""
	}



	#3)	Main processing
	function cpyItem ($source, $destination) 
	{
		cls
		""
		""
		#c-i) Display a message when copying a file. The message should list where the file is being
		#moved from and where it is being moved to.
		"Copying Items Now to the following directory..."
		""
		foreach ($file in (Get-ChildItem -File $source)) 
		{
			$newpath = "$($destination)\$($file.extension.trimstart('.'))" 
			md $newpath -force 
			#c) Copy each file to the appropriate destination.
			#get all the files that need to be copied
			Copy-Item $file -Recurse $newpath
		}
		#d) display each target folder name with the file count and byte count for each folder.
		
		
		$dirs = dir $destination | ? {$_.PSIsContainer}
		foreach($tempDir in $dirs)
		{
		DisplFldrStats $tempDir.FullName
		}
		
		""
		""
		"...All Done. Here is the details about destination directory."
		DisplFldrStats $destination 'dest'
		""
		""
		Read-Host -Prompt "All tasks complete. I bid you a farewell, Master. (u.u)/ 'PRESS ENTER TO EXIT'"
		""
		""
		""
	} 

	function dirTool ($source, $destination)
	{
		cls
		""
		""
		"Hello Master, welcome to what I dub the 'Directory Tool', where you can:"
		""
		" > Check specified source & destination directory/folder info."
		" > Create new destination directories/folders if the path doesn't exist."
		" > Copy items from a source to a destination directory/folder."
		""
		"Lets Start by specifying a Source Directory:"
		""
		$source = Read-Host -Prompt "Enter Source Directory" 
		""
		""
		"Excellent, now tell me the Destination Directory:"
		""
		$destination = Read-Host -Prompt "Enter Destination Directory" 
		cls
		cd -Path $source
		"Thanks Master, reading both directories/folders now...."
		""
		""
		#a) Test for existence of the source folder (using the CheckFolder function).
		checkFldr $source
		""
		""
		#b) Test for the existence of the destination folder; create it if it is not found (using the CheckFolder function 
		#with the –create switch).Write-Host "Testing Destination Directory - $destination"
		checkFldr $destination -create
		""
		""
		"Ok Master, would you like to copy all items from the following source directory:"
		"'$source'"
		""
		"To the following destination directory?:"
		"'$destination'"
		""
		Write-Warning "Enter 'Y' to proceed with copying." -WarningAction Inquire
		cpyItem $source $destination

		
	}
	dirTool
 
}

#--------------------------------------------------------------------------------------------------------------------------------
#Aliases 
Set-Alias -Value 'D:\Programz\NotePad++\notepad++.exe' -Name 'app-Npp'
Set-Alias -Value 'C:\Users\Kylej\AppData\Local\Programs\Microsoft VS Code\Code.exe' -Name 'app-Vs'
Set-Alias -Value 'C:\Program Files\KITS-Client\CoPilot.exe' -Name 'app-KITCLIENT'
#--------------------------------------------------------------------------------------------------------------------------------
#Variables
$y = Get-Host
$x = Get-Date

$find = if ($x.hour -gt 17) {
       $z = ("Good Evening").PadLeft(23)
     } elseif ($x.hour -le 17 -AND $x.hour -ge 12) {
       $z = ("Good Afternoon").PadLeft(24)
     } elseif ($x.hour -lt 12 -OR $x.hour -ge 4) {
       $z = ("Good Morning").PadLeft(23)
     } elseif ($x.hour -le 0 -OR $x.hour -le 3) {
       $z = ("Early Morning, Eh?").PadLeft(26)
     }
$m = $z + ", Master Kyle"
$a = ("\(u.u)/").PadLeft(26)
$s = ("************************************************")
$t = (Get-date).ToString().PadLeft(34)
$e = ("PS Version:").PadLeft(22) + ($y.version.ToString()).PadLeft(15)
$r = quoteOfTheDay
$master = @($m, $a, $s, $t, $e, $r) 
#--------------------------------------------------------------------------------------------------------------------------------
#Play that Intro
MasterKyle
#--------------------------------------------------------------------------------------------------------------------------------
#Objects:
	$kyCMD = @{
		
	}
