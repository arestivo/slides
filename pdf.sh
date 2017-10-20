PRINCE='/home/arestivo/Apps/prince/bin/prince'
cd pdf
rm *.html
rm *.pdf
for f in ../markdown/*
do
 name=$(echo "$f" | sed "s/.*\///" | sed "s/\..*//")
 phantomjs save_page.js "http://www.fe.up.pt/~arestivo/presentation/$name/" > "$name.html"
done

for f in *.html
do
 name=$(echo "$f" | sed "s/.*\///" | sed "s/\..*//")
 $PRINCE --media print --page-size A4 "$name.html" "output/$name.pdf"
 rm "$name.html"
done
((rsync --progress -r output/ arestivo@pinguim.fe.up.pt:~/public_html/pdf && notify-send 'FEUP Sync' 'Success') || notify-send -u critical 'FEUP Sync' 'Failed')
