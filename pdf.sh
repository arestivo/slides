PRINCE='/home/arestivo/Apps/prince/bin/prince'
PHANTOM='/home/arestivo/Apps/phantomjs/bin/phantomjs'
cd pdf
rm *.html
rm -Rf output
mkdir output
for f in ../markdown/*
do
 name=$(echo "$f" | sed "s/.*\///" | sed "s/\..*//")
 echo $name
 $PHANTOM save_page.js "http://www.fe.up.pt/~arestivo/presentation/$name/" > "$name.html"
done

for f in *.html
do
 name=$(echo "$f" | sed "s/.*\///" | sed "s/\..*//")
 echo $name
 $PRINCE --media print --page-size A4 "$name.html" -o "output/$name.pdf"
 rm "$name.html"
done
((rsync --progress -r output/ arestivo@pinguim.fe.up.pt:~/public_html/pdf && notify-send 'FEUP Sync' 'Success') || notify-send -u critical 'FEUP Sync' 'Failed')
