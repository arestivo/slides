git commit -a
git push
((ssh pinguim "cd public_html/presentation ; git pull" && && notify-send 'FEUP Sync' 'Success') || notify-send -u critical 'FEUP Sync' 'Failed')
