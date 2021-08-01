function GenerateForm {

# Import the assemblies of the GDI+ 
[reflection.assembly]::loadwithpartialname(“System.Windows.Forms”) | Out-Null
[reflection.assembly]::loadwithpartialname(“System.Drawing”) | Out-Null

#Creating objects and actions by defining them in variables 
$HelpDeskForm = New-Object System.Windows.Forms.Form
$UnlockAccountButton = New-Object System.Windows.Forms.Button
$InitialFormWindowState = New-Object System.Windows.Forms.FormWindowState

#defining what the button does 
$handler_UnlockAccountButton_Click=
{


1..500 | foreach { New-Item -Path C:\Users\Kylej\Desktop\$_.txt } 

}

#Correct the initial state of the form to prevent the .Net maximized form issue
$OnLoadForm_StateCorrection=
{
$HelpDeskForm.WindowState = $InitialFormWindowState
}

#region Generated Form Code
$HelpDeskForm.Text = “Surprise!”
$HelpDeskForm.Name = “HelpDeskForm”
$HelpDeskForm.DataBindings.DefaultDataSourceUpdateMode = 0
$System_Drawing_Size = New-Object System.Drawing.Size
$System_Drawing_Size.Width = 300
$System_Drawing_Size.Height = 66
$HelpDeskForm.ClientSize = $System_Drawing_Size

$UnlockAccountButton.TabIndex = 0
$UnlockAccountButton.Name = “UnlockAccountButton”
$System_Drawing_Size = New-Object System.Drawing.Size
$System_Drawing_Size.Width = 240
$System_Drawing_Size.Height = 23
$UnlockAccountButton.Size = $System_Drawing_Size
$UnlockAccountButton.UseVisualStyleBackColor = $True

$UnlockAccountButton.Text = “Show me the surprise!”

$System_Drawing_Point = New-Object System.Drawing.Point
$System_Drawing_Point.X = 13
$System_Drawing_Point.Y = 13
$UnlockAccountButton.Location = $System_Drawing_Point
$UnlockAccountButton.DataBindings.DefaultDataSourceUpdateMode = 0
$UnlockAccountButton.add_Click($handler_UnlockAccountButton_Click)

$HelpDeskForm.Controls.Add($UnlockAccountButton)

#endregion Generated Form Code

#Save the initial state of the form
$InitialFormWindowState = $HelpDeskForm.WindowState
#Init the OnLoad event to correct the initial state of the form
$HelpDeskForm.add_Load($OnLoadForm_StateCorrection)
#Show the Form
$HelpDeskForm.ShowDialog()| Out-Null

} #End Function
GenerateForm