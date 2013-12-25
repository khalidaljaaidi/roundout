BASEDIR=$(dirname $0)
echo $BASEDIR

cd $BASEDIR

nodejs $BASEDIR/node_modules/jasmine-node/lib/jasmine-node/cli.js specs
