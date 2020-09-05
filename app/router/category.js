var express   = require('express');
var router    = express.Router();

router.get('/',function(req,res){
    res.json({message: 'Success!!'});
});

// export default router;
module.exports = router;