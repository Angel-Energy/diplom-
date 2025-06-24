Get-ChildItem -Path public/diagrams -Recurse -Filter *.mmd | ForEach-Object {
    $content = Get-Content -Path $_.FullName -Raw
    [System.IO.File]::WriteAllText($_.FullName, $content, [System.Text.Encoding]::UTF8)
} 