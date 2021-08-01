function startingWork 
{
    # Hide PowerShell Console
    Add-Type -Name Window -Namespace Console -MemberDefinition '
    [DllImport("Kernel32.dll")]
    public static extern IntPtr GetConsoleWindow();
    [DllImport("user32.dll")]
    public static extern bool ShowWindow(IntPtr hWnd, Int32 nCmdShow);
    '
    $consolePtr = [Console.Window]::GetConsoleWindow()
    [Console.Window]::ShowWindow($consolePtr, 0)

    # Open work executables
    & 'C:\Program Files\KITS-Client\CoPilot.exe' 
    & 'C:\Program Files\Mozilla Firefox\firefox.exe' 

    # Delay the work window until all applications have loaded
    Start-Sleep -s 5

    # Prompt to provide feedback via Windows Form
    Function Action_After_End {
	[System.Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms")
    [System.Windows.Forms.MessageBox]::Show("All apps have started. Have a great day at work, Master!" , "Info")
    }
    Action_After_End
}

startingWork
