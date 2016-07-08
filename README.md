# bristleconePineSchool 

a static single page site made with AngularJS for the Bristlecone Pine School

### View Live
www.bristleconepineschool.org

## Development

We develop on the gh-pages branch.  Make sure you have the gh-pages branch checked out with:

```
git checkout gh-pages
```

To update your github repository from Paige's github version:

```
git pull upstream gh-pages
git push origin gh-pages
```

To make changes, do the above, then make the changes you're interested in. 

To run the site with this changes locally, run:

```
python -m SimpleHTTPServer
```

You can keep this running in the background. Changes you make will be reflected at `localhost:8000`.

To commit and push these changes.

```
git add .
git commit -m 'this is the commit message that explains what you have done'
git push origin gh-pages
```

Next, go to your github version of the repository and make a pull request.

