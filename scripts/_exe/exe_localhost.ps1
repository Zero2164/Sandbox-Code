function main {
    # Hide PowerShell Console
    Add-Type -Name Window -Namespace Console -MemberDefinition '
    [DllImport("Kernel32.dll")]
    public static extern IntPtr GetConsoleWindow();
    [DllImport("user32.dll")]
    public static extern bool ShowWindow(IntPtr hWnd, Int32 nCmdShow);
    '
    $consolePtr = [Console.Window]::GetConsoleWindow()
    [Console.Window]::ShowWindow($consolePtr, 0)
    
    # Access the dev client
    cd 'C:\Users\Kylej\Documents\GitHub\RatedC\Angular\AngularASPdotNet5Course\DatingApp\client'

    # Host the dev client
    ng serve
}

main
