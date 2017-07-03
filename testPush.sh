NEW_UUID=$(openssl rand -base64 12)
echo $NEW_UUID

echo $NEW_UUID > test
git add .
git commit -m "test"
git push deploy master
