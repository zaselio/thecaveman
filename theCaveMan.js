(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"theCaveMan_atlas_1", frames: [[0,0,1923,1097]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.insideCave = function() {
	this.initialize(ss["theCaveMan_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("PLAY", "60px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 69;
	this.text.lineWidth = 551;
	this.text.parent = this;
	this.text.setTransform(347.95,97.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Eg2EgVgMBsJAAAMAAAArBMhsJAAAg");
	this.shape.setTransform(346.05,137.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3B3B3").s().p("Eg2EAVhMAAAgrBMBsIAAAMAAAArBg");
	this.shape_1.setTransform(346.05,137.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9980").s().p("Eg2EAVhMAAAgrBMBsIAAAMAAAArBg");
	this.shape_2.setTransform(346.05,137.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,694.1,277.3);


(lib.Scene_1_sparks = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sparks
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AjwmUIAAh7AkqkyIiThqAlrjgIiDAAAGGCfIBpAAADhGMIAACEADzDEIBoBe");
	this.shape.setTransform(775.625,797.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkilTIAAirAnNi3IiTAAAmckRIhriUAG1ECICsAAAFkFsICLBZADxFsIAACT");
	this.shape_1.setTransform(777.275,794.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkAmHIAAiUAl7jkIjNAAAlalOIichzAGlEmICkAAAFkFYICjCCAESGJIAACT");
	this.shape_2.setTransform(778.875,796.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("Al7k+IhzjMAkJmIIAAijAm1jUIi0hyAHGEnICkAAAFsGBICTCCAESFwIAAC8");
	this.shape_3.setTransform(778.9,797.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AklmMIAAiLAmQlrIiri0AnBjwIjMhaAHaDxIC0AAAFYEaICbBiAD1FTIBjDN");
	this.shape_4.setTransform(783.375,800.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(1,1,1).p("AkAmHIAAiUAlalOIichzAl7jkIjNAAAGlEmICkAAAFkFYICjCCAESGJIAACT");
	this.shape_5.setTransform(778.875,796.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("AqEkBIiqAAAj/mXIhAkfAn+mxIi2jbAF1DgIG6CCAC1GSIAAElAC1EiIDgDF");
	this.shape_6.setTransform(790.025,791.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},25).to({state:[]},2).to({state:[{t:this.shape_1}]},4).to({state:[]},4).to({state:[{t:this.shape_2}]},1).to({state:[]},4).to({state:[{t:this.shape_3}]},1).to({state:[]},5).to({state:[{t:this.shape_4}]},1).to({state:[]},1).to({state:[{t:this.shape_5}]},2).to({state:[]},4).to({state:[{t:this.shape_5}]},3).to({state:[]},4).to({state:[{t:this.shape_5}]},1).to({state:[]},4).to({state:[{t:this.shape_5}]},3).to({state:[]},4).to({state:[{t:this.shape_6}]},314).to({state:[]},25).wait(91));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.playAgain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("PLAY AGAIN!", "60px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 69;
	this.text.lineWidth = 551;
	this.text.parent = this;
	this.text.setTransform(347.95,97.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Eg2EgVgMBsJAAAMAAAArBMhsJAAAg");
	this.shape.setTransform(346.05,137.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3B3B3").s().p("Eg2EAVhMAAAgrBMBsIAAAMAAAArBg");
	this.shape_1.setTransform(346.05,137.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9980").s().p("Eg2EAVhMAAAgrBMBsIAAAMAAAArBg");
	this.shape_2.setTransform(346.05,137.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,694.1,277.3);


(lib.tree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("EAxfgPnQgegLgigGQAiANAeAEQBGAHAng3QgVithCiKQgSgqhXgUQhygaiTBFICPhKQgCjQh3haAcigjIB9BYIGQhPQAQBOBdBPQDSBKB3hKQCtg2AzjHQALhPgxhmQA/A0BTgCQCDgMA+h2QBEhuAGigQgDh6g+hKQgshuhwgoEgfAghNIB3gcQiCgagXhFQgXhHgDhJQAAhJAkgiQAqgpBFAjQB+i9BJj/QA7AJAcA5IAAhrQAEhkBtg3QAygpBKgBQBsgaBNCLIAaiBQAzhwBqhJIDpiFQBUgxAxAxIBRAyQgqhjAqhkQAbh4BnhPQBZhiCQgjQBrgmBhABQENgfARC0IAdAoQAsAKAdgKQCWhkBQAHQCLgCBaAqQBQAmAgBdIAcBkQAKhBBHgbIDvg3QCSgaBHAaQBjAzAWBAIA0BFQDaBMBLB3QBVAeARBVIC9GZIBzDEIAyCIIEhGRIBmGyAErksIBCAAQgNAKgNAKQiiEWDdCtQAxAxBIAEICtgrIFxkNIICjPQAjgIAfABQAoACAiARQA3AcgSA7QgFBRBPBQAI+mUQhsAfhlBJAErksQDkgzgxihIBgBsQGSDwHMlRIBdh/QIqAwALmSQJGA8ABoHQDLg1gjj/AggktQCfAfCsgeAazkbImEC9IGphmAWcn1QAcCiCxAlAyRDqIpVhnIBaBHQArBWgrBVQgPAmg2AVQhYAEhCgoIkSjaQgkgMgdAMIAABWQhjAwhqgwQiliBhdirIguBsQguAcgvgcQhKhSgThbQgTg7hRgDQg3gDg0BFQh9ARgygxQhKhGAChVQgGiIA4hwQAmhmA9hOQhngGgOhnQg8hmA8g+QAbhaBnhLQA9hHBxgNIBzAAIhIhVQgwhQAwhDQA0hiBYgFQAyhIBpAXQhQg/gOgpQghhhA1g8QBJheBEgQQBOgUBWA4Qg5hHAJhNQAJhTA5gtQAxgmBWACQDcARB9B7QgbCQByB1IAsAiAs2nJIiPi+Ii+iGIh5ieAs2nJQBJBkBhgTQCYAABdg7QCwB3DHAPAxQAXQEIADBDiEQBBiWiqh1IA4hUAl1GRIBRhmIBjkOIChlKAxQAXIDyAyICRB4IFYDQIB2BwIAuB1AyRDqQCng4hmibEgLNAtOIGAtAQAioSihn8QiDiIhMjWQitkAlJi4EgLNAtOQkzigk/haIDtFYQjAhVj8gDIEoEYQlSiEjVBIIBWCJQl0hViEC0IEODYQkJhbi/B6IYwG+QHCjVHKkYIBfAfQCFgxAchhIBzlwIAAFxQA+iwBshJIAADZQCXiIA/CIIhOjcQD3kCFDhGIi6ERIF0g1Ih5ChIGghKIiGDlQGCAPDRC0IkpAiQEnCsFtg/EgT0A1qQBaB4CLA8IBaAAIAAi3QBEBRB/A7QAXiSg2ioQBkCHCIBZQAqiBhciNQBwAdBhBAQBPA1gMBTIn2JdEgLNAtOIkNF+IkaCeIj4jGQB3DWASDWQj7hviJi7Ii6DKEgKmAtiQgTgKgUgKANtXDQhaBTh3gBQhjgBh3g6ANtXDQAAC6CGBOQBgiyiUi+QglA+gtAqgAKcYVIgypHQB1n+HwlAQEvh0Ekg/EABTA3gIByg+EANGA1OQD+DaF3BvIH8hwAKueFIiCCoEAL4AxyIhKztQB6i/DLAFEgBkAptQgBG/jeFE");
	this.shape.setTransform(338.821,404.4723);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A6EC55").s().p("AqlBuIhOjbQD3kCFDhHIi6ESIFzg1Ih4ChIGfhKIiGDkQGCAPDRC0IkpAiIn8BwQl2hvj+jag");
	this.shape_1.setTransform(490.45,734.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A67B51").s().p("AhVhPQAtgqAlg+QCTC9hgCyQiFhOAAi5g");
	this.shape_2.setTransform(435.1347,559.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE757").s().p("AkoDUIi6DKIkOjXQCEi1F0BVIhWiIQDVhHFRCDIknkXQD7ACDABVIjtlYQE/BbEzCfIkNF9IkaCeIj3jGQB2DWASDWQj6huiJi8g");
	this.shape_3.setTransform(191.725,719.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#613B16").s().p("ApaYhIAOgUQDQk+ACmxQgCGxjQE+IgOAUQANhThQg1QhhhAhvgdQBbCNgqCBQiIhZhjiHQA1CogWCSQh/g7hEhRIAAC3IhaAAQiMg8hah4IEaieIEOl+IGAtAQAioRihn8QiDiIhNjWQitkAlJi4QCog4hnibIDyAyICSB4IFYDQIB1BwIAvB1Igvh1Ih1hwIBQhmIBjkOICilLQCgAfCqgeIBDAAIgbAUQihEWDcCuQAxAxBIAEICugrIFwkOIIDjPQAjgIAfABQAoACAhARImDC9IGohmQgFBRBQBQQklBAkvB0QnvFAh2H+IAyJHQhigBh3g6QB3A6BiABQB4ABBahTQAAC6CGBOQjLgFh7C+IiCCoICCioIBLTtIBNDcQg/iIiWCIIAAjZQhsBJg/CwIAAlxIhyFwQgcBhiFAxIhfgfIByg+IhyA+QnLEYnBDVgAu8QTIgngUIAnAUg");
	this.shape_4.setTransform(366.675,591.5632);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7CBA55").s().p("EghcA4PQC/h6EJBbIC6jKQCJC7D7BvQgSjWh3jWID4DGQBaB4CLA8IBaAAIAAi3QBEBRB/A7QAXiSg2ioQBkCHCIBZQAqiBhciNQBwAdBhBAQBPA1gMBTIn2JdgA5eGMIkSjaQgkgMgdAMIAABWQhjAwhqgwQiliBhdirIguBsQguAcgvgcQhKhSgThbQgTg7hRgDQg3gDg0BFQh9ARgygxQhKhGAChVQgGiIA4hwQAmhmA9hOQhngGgOhnQg8hmA8g+QAbhaBnhLQA9hHBxgNIBzAAIhIhVQgwhQAwhDQA0hiBYgFQAyhIBpAXQhQg/gOgpQghhhA1g8QBJheBEgQQBOgUBWA4Qg5hHAJhNQAJhTA5gtQAxgmBWACQDcARB9B7IB3gcQiCgagXhFQgXhHgDhJQAAhJAkgiQAqgpBFAjQB+i9BJj/QA7AJAcA5IAAhrQAEhkBtg3QAygpBKgBQBsgaBNCLIAaiBQAzhwBqhJIDpiFQBUgxAxAxIBRAyQgqhjAqhkQAbh4BnhPQBZhiCPgjQBrgmBiABQENgfARC0IAdAoQAsAKAdgKQCWhkBQAHQCLgCBaAqQBQAmAgBdIAcBkQAKhBBHgbIDvg3QCSgaBHAaQBjAzAWBAIA0BFQDaBMBLB3QBVAeARBVIC9GZIBzDEIAyCIIEhGRIBmGyQAjD/jLA1QgBIHpGg8QgLGSoqgwIhdB/QnMFRmSjwIhghsQAxChjkAzQisAeiggfQjHgPivh3QhdA7iYAAQhhAThJhkIiPi+Ii+iGIh5ieIB5CeIC+CGICPC+Ig4BUQCqB1hBCWQhDCEkIgDQBmCbinA4IpVhnIBaBHQArBWgrBVQgPAmg2AVIgPABQhPAAg8glgA5c9IIAsAiIgsgiQhchfAAhwQAAgaAFgcQgFAcAAAaQAABwBcBfg");
	this.shape_5.setTransform(311.9039,404.4723);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#62813E").s().p("AAwOaQhchPgQhPImQBQIh9hZQhPhRAFhQQASg7g3gdQgigQgogCQixglgciiIBdiAQIqAxALmRQJFA8ABoHQDLg1gjj/QB3BaACDQIiPBKQCThFByAaQBXAUASAqQBCCKAVCsQgnA3hGgGQgegMgigFQAiANAeAEQBwAoAsBuQA+BJADB5QgGCghEBuQg+B2iDANQhTACg/g0QAxBmgLBOQgzDJitA2Qg7AlhTAAQhSAAhpglg");
	this.shape_6.setTransform(580.025,325.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(4,1,1).p("EAxfgPnQgegLgigGQAiANAeAEQBGAHAng3QgVithCiKQgSgqhXgUQhygaiTBFICPhKQgCjQh3haAcigjIB9BYIGQhPQAQBOBdBPQDSBKB3hKQCtg2AzjHQALhPgxhmQA/A0BTgCQCDgMA+h2QBEhuAGigQgDh6g+hKQgshuhwgoEgfAghNIB3gcQiCgagXhFQgXhHgDhJQAAhJAkgiQAqgpBFAjQB+i9BJj/QA7AJAcA5IAAhrQAEhkBtg3QAygpBKgBQBsgaBNCLIAaiBQAzhwBqhJIDpiFQBUgxAxAxIBRAyQgqhjAqhkQAbh4BnhPQBZhiCQgjQBrgmBhABQENgfARC0IAdAoQAsAKAdgKQCWhkBQAHQCLgCBaAqQBQAmAgBdIAcBkQAKhBBHgbIDvg3QCSgaBHAaQBjAzAWBAIA0BFQDaBMBLB3QBVAeARBVIC9GZIBzDEIAyCIIEhGRIBmGyAErksIBCAAQgNAKgNAKQiiEWDdCtQAxAxBIAEICtgrIFxkNIICjPQAjgIAfABQAoACAiARQA3AcgSA7QgFBRBPBQAI+mUQhsAfhlBJAErksQDkgzgxihIBgBsQGSDwHMlRIBdh/QIqAwALmSQJGA8ABoHQDLg1gjj/AggktQCfAfCsgeAazkbImEC9IGphmAWcn1QAcCiCxAlAyRDqIpVhnIBaBHQArBWgrBVQgPAmg2AVQhYAEhCgoIkSjaQgkgMgdAMIAABWQhjAwhqgwQiliBhdirIguBsQguAcgvgcQhKhSgThbQgTg7hRgDQg3gDg0BFQh9ARgygxQhKhGAChVQgGiIA4hwQAmhmA9hOQhngGgOhnQg8hmA8g+QAbhaBnhLQA9hHBxgNIBzAAIhIhVQgwhQAwhDQA0hiBYgFQAyhIBpAXQhQg/gOgpQghhhA1g8QBJheBEgQQBOgUBWA4Qg5hHAJhNQAJhTA5gtQAxgmBWACQDcARB9B7QgbCQByB1IAsAiAs2nJIiPi+Ii+iGIh5ieAs2nJQBJBkBhgTQCYAABdg7QCwB3DHAPAxQAXQEIADBDiEQBBiWiqh1IA4hUAl1GRIBRhmIBjkOIChlKAxQAXIDyAyICRB4IFYDQIB2BwIAuB1AyRDqQCng4hmibEgLNAtOIGAtAQAioSihn8QiDiIhMjWQitkAlJi4EgYOAtUIEoEYQmTjaiUCeIBWCJQlsitiMEMIEODYQkJhbi/B6IYwG+QHCjVHKkYIBfAfQCFgxAchhIBzlwIAAFxQA+iwBshJIAADZQCXiIA/CIIhOjcQD3kCFDhGIi6ERIF0g1Ih5ChIGghKIiGDlQGCAPDRC0IkpAiQEnCsFtg/EgRTAurQgYgLgZgIQieimjqBiEgRTAurIABABEgT0A1qQBaB4CLA8IBaAAIAAi3QBEBRB/A7QAXiSg2ioQBkCHCIBZQAqiBhciNQBwAdBhBAQBPA1gMBTIn2JdEgLNAtOIkNF+IkaCeIj4jGQB3DWASDWQj7hviJi7Ii6DKEgKmAtiQgTgKgUgKQivkMnDASIDsFXANtXDQhaBTh3gBQhjgBh3g6ANtXDQAAC6CGBOQBgiyiUi+QglA+gtAqgAKcYVIgypHQB1n+HwlAQEvh0Ekg/EABTA3gIByg+EANGA1OQD+DaF3BvIH8hwAKueFIiCCoEAL4AxyIhKztQB6i/DLAFEgBkAptQgBG/jeFE");
	this.shape_7.setTransform(338.821,404.4723);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE757").s().p("AkoDVIi6DKIkOjYQCMkLFsCsIhWiIQCUifGSDaIknkXIACAAQDphjCeCmIAyAVIgBgBIjslXQHDgSCvEMIkNF9IkaCeIj3jGQB2DWASDWQj6hviJi7g");
	this.shape_8.setTransform(191.725,719.7973);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(4,1,1).p("EAxfgPnQgegLgigGQAiANAeAEQBGAHAng3QgVithCiKQgSgqhXgUQhygaiTBFICPhKQgCjQh3haAcigjIB9BYIGQhPQAQBOBdBPQDSBKB3hKQCtg2AzjHQALhPgxhmQA/A0BTgCQCDgMA+h2QBEhuAGigQgDh6g+hKQgshuhwgoEgfAghNIB3gcQiCgagXhFQgXhHgDhJQAAhJAkgiQAqgpBFAjQB+i9BJj/QA7AJAcA5IAAhrQAEhkBtg3QAygpBKgBQBsgaBNCLIAaiBQAzhwBqhJIDpiFQBUgxAxAxIBRAyQgqhjAqhkQAbh4BnhPQBZhiCQgjQBrgmBhABQENgfARC0IAdAoQAsAKAdgKQCWhkBQAHQCLgCBaAqQBQAmAgBdIAcBkQAKhBBHgbIDvg3QCSgaBHAaQBjAzAWBAIA0BFQDaBMBLB3QBVAeARBVIC9GZIBzDEIAyCIIEhGRIBmGyAErksIBCAAQgNAKgNAKQiiEWDdCtQAxAxBIAEICtgrIFxkNIICjPQAjgIAfABQAoACAiARQA3AcgSA7QgFBRBPBQAI+mUQhsAfhlBJAErksQDkgzgxihIBgBsQGSDwHMlRIBdh/QIqAwALmSQJGA8ABoHQDLg1gjj/AggktQCfAfCsgeAazkbImEC9IGphmAWcn1QAcCiCxAlAyRDqIpVhnIBaBHQArBWgrBVQgPAmg2AVQhYAEhCgoIkSjaQgkgMgdAMIAABWQhjAwhqgwQiliBhdirIguBsQguAcgvgcQhKhSgThbQgTg7hRgDQg3gDg0BFQh9ARgygxQhKhGAChVQgGiIA4hwQAmhmA9hOQhngGgOhnQg8hmA8g+QAbhaBnhLQA9hHBxgNIBzAAIhIhVQgwhQAwhDQA0hiBYgFQAyhIBpAXQhQg/gOgpQghhhA1g8QBJheBEgQQBOgUBWA4Qg5hHAJhNQAJhTA5gtQAxgmBWACQDcARB9B7QgbCQByB1IAsAiAs2nJIiPi+Ii+iGIh5ieAs2nJQBJBkBhgTQCYAABdg7QCwB3DHAPAxQAXQEIADBDiEQBBiWiqh1IA4hUAl1GRIBRhmIBjkOIChlKAxQAXIDyAyICRB4IFYDQIB2BwIAuB1AyRDqQCng4hmibEgLNAtOIGAtAQAioSihn8QiDiIhMjWQitkAlJi4EgYOAtUIEoEYQlohpi/AtIBWCJQmEgEh0BjIEODYQkJhbi/B6IYwG+QHCjVHKkYIBfAfQCFgxAchhIBzlwIAAFxQA+iwBshJIAADZQCXiIA/CIIhOjcQD3kCFDhGIi6ERIF0g1Ih5ChIGghKIiGDlQGCAPDRC0IkpAiQEnCsFtg/EgRTAurQgYgLgZgIQieimjqBiEgRTAurIABABEgT0A1qQBaB4CLA8IBaAAIAAi3QBEBRB/A7QAXiSg2ioQBkCHCIBZQAqiBhciNQBwAdBhBAQBPA1gMBTIn2JdEgLNAtOIkNF+IkaCeIj4jGQB3DWASDWQj7hviJi7Ii6DKEgKmAtiQgTgKgUgKQjtAhmFkbIDsFXANtXDQhaBTh3gBQhjgBh3g6ANtXDQAAC6CGBOQBgiyiUi+QglA+gtAqgAKcYVIgypHQB1n+HwlAQEvh0Ekg/EABTA3gIByg+EANGA1OQD+DaF3BvIH8hwAKueFIiCCoEAL4AxyIhKztQB6i/DLAFEgBkAptQgBG/jeFE");
	this.shape_9.setTransform(338.821,404.4723);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE757").s().p("AkoDUIi6DKIkOjXQB0hkGEAEIhWiIQC/gtFnBpIknkXIACAAQDphjCeCmIAyAUIgBgBIjslXQGFEbDtghIkNF9IkaCeIj3jGQB2DWASDWQj6huiJi8g");
	this.shape_10.setTransform(191.725,719.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(4,1,1).p("EAxfgPnQgegLgigGQAiANAeAEQBGAHAng3QgVithCiKQgSgqhXgUQhygaiTBFICPhKQgCjQh3haAcigjIB9BYIGQhPQAQBOBdBPQDSBKB3hKQCtg2AzjHQALhPgxhmQA/A0BTgCQCDgMA+h2QBEhuAGigQgDh6g+hKQgshuhwgoEgfAghNIB3gcQiCgagXhFQgXhHgDhJQAAhJAkgiQAqgpBFAjQB+i9BJj/QA7AJAcA5IAAhrQAEhkBtg3QAygpBKgBQBsgaBNCLIAaiBQAzhwBqhJIDpiFQBUgxAxAxIBRAyQgqhjAqhkQAbh4BnhPQBZhiCQgjQBrgmBhABQENgfARC0IAdAoQAsAKAdgKQCWhkBQAHQCLgCBaAqQBQAmAgBdIAcBkQAKhBBHgbIDvg3QCSgaBHAaQBjAzAWBAIA0BFQDaBMBLB3QBVAeARBVIC9GZIBzDEIAyCIIEhGRIBmGyAErksIBCAAQgNAKgNAKQiiEWDdCtQAxAxBIAEICtgrIFxkNIICjPQAjgIAfABQAoACAiARQA3AcgSA7QgFBRBPBQAI+mUQhsAfhlBJAErksQDkgzgxihIBgBsQGSDwHMlRIBdh/QIqAwALmSQJGA8ABoHQDLg1gjj/AggktQCfAfCsgeAazkbImEC9IGphmAWcn1QAcCiCxAlAyRDqIpVhnIBaBHQArBWgrBVQgPAmg2AVQhYAEhCgoIkSjaQgkgMgdAMIAABWQhjAwhqgwQiliBhdirIguBsQguAcgvgcQhKhSgThbQgTg7hRgDQg3gDg0BFQh9ARgygxQhKhGAChVQgGiIA4hwQAmhmA9hOQhngGgOhnQg8hmA8g+QAbhaBnhLQA9hHBxgNIBzAAIhIhVQgwhQAwhDQA0hiBYgFQAyhIBpAXQhQg/gOgpQghhhA1g8QBJheBEgQQBOgUBWA4Qg5hHAJhNQAJhTA5gtQAxgmBWACQDcARB9B7QgbCQByB1IAsAiAs2nJIiPi+Ii+iGIh5ieAs2nJQBJBkBhgTQCYAABdg7QCwB3DHAPAxQAXQEIADBDiEQBBiWiqh1IA4hUAl1GRIBRhmIBjkOIChlKAxQAXIDyAyICRB4IFYDQIB2BwIAuB1AyRDqQCng4hmibEgLNAtOIGAtAQAioSihn8QiDiIhMjWQitkAlJi4EgYOAtUQCMClCcBzQmNjJiaCNIBWCJQk/iai5D5IEODYQkJhbi/B6IYwG+QHCjVHKkYIBfAfQCFgxAchhIBzlwIAAFxQA+iwBshJIAADZQCXiIA/CIIhOjcQD3kCFDhGIi6ERIF0g1Ih5ChIGghKIiGDlQGCAPDRC0IkpAiQEnCsFtg/EgRTAurQgYgLgZgIQieimjqBiEgRTAurIABABEgT0A1qQBaB4CLA8IBaAAIAAi3QBEBRB/A7QAXiSg2ioQBkCHCIBZQAqiBhciNQBwAdBhBAQBPA1gMBTIn2JdEgLNAtOIkNF+IkaCeIj4jGQB3DWASDWQj7hviJi7Ii6DKEgKmAtiQgTgKgUgKQhVjwodgKIDsFXANtXDQhaBTh3gBQhjgBh3g6ANtXDQAAC6CGBOQBgiyiUi+QglA+gtAqgAKcYVIgypHQB1n+HwlAQEvh0Ekg/EABTA3gIByg+EANGA1OQD+DaF3BvIH8hwAKueFIiCCoEAL4AxyIhKztQB6i/DLAFEgBkAptQgBG/jeFE");
	this.shape_11.setTransform(338.821,404.4723);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE757").s().p("AkoDUIi6DKIkOjXQC5j5E/CZIhWiIQCaiMGMDIQichziLikIACAAQDphjCeCmIAyAUIgBgBIjslXQIdAKBVDwIkNF9IkaCeIj3jGQB2DWASDWQj6huiJi8g");
	this.shape_12.setTransform(191.725,719.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(4,1,1).p("EAxfgPnQgegLgigGQAiANAeAEQBGAHAng3QgVithCiKQgSgqhXgUQhygaiTBFICPhKQgCjQh3haAcigjIB9BYIGQhPQAQBOBdBPQDSBKB3hKQCtg2AzjHQALhPgxhmQA/A0BTgCQCDgMA+h2QBEhuAGigQgDh6g+hKQgshuhwgoEgfAghNIB3gcQiCgagXhFQgXhHgDhJQAAhJAkgiQAqgpBFAjQB+i9BJj/QA7AJAcA5IAAhrQAEhkBtg3QAygpBKgBQBsgaBNCLIAaiBQAzhwBqhJIDpiFQBUgxAxAxIBRAyQgqhjAqhkQAbh4BnhPQBZhiCQgjQBrgmBhABQENgfARC0IAdAoQAsAKAdgKQCWhkBQAHQCLgCBaAqQBQAmAgBdIAcBkQAKhBBHgbIDvg3QCSgaBHAaQBjAzAWBAIA0BFQDaBMBLB3QBVAeARBVIC9GZIBzDEIAyCIIEhGRIBmGyAErksIBCAAQgNAKgNAKQiiEWDdCtQAxAxBIAEICtgrIFxkNIICjPQAjgIAfABQAoACAiARQA3AcgSA7QgFBRBPBQAI+mUQhsAfhlBJAErksQDkgzgxihIBgBsQGSDwHMlRIBdh/QIqAwALmSQJGA8ABoHQDLg1gjj/AggktQCfAfCsgeAazkbImEC9IGphmAWcn1QAcCiCxAlAyRDqIpVhnIBaBHQArBWgrBVQgPAmg2AVQhYAEhCgoIkSjaQgkgMgdAMIAABWQhjAwhqgwQiliBhdirIguBsQguAcgvgcQhKhSgThbQgTg7hRgDQg3gDg0BFQh9ARgygxQhKhGAChVQgGiIA4hwQAmhmA9hOQhngGgOhnQg8hmA8g+QAbhaBnhLQA9hHBxgNIBzAAIhIhVQgwhQAwhDQA0hiBYgFQAyhIBpAXQhQg/gOgpQghhhA1g8QBJheBEgQQBOgUBWA4Qg5hHAJhNQAJhTA5gtQAxgmBWACQDcARB9B7QgbCQByB1IAsAiAs2nJIiPi+Ii+iGIh5ieAs2nJQBJBkBhgTQCYAABdg7QCwB3DHAPAxQAXQEIADBDiEQBBiWiqh1IA4hUAl1GRIBRhmIBjkOIChlKAxQAXIDyAyICRB4IFYDQIB2BwIAuB1AyRDqQCng4hmibEgLNAtOIGAtAQAioSihn8QiDiIhMjWQitkAlJi4EgYOAtUQCMClCcBzQlUhMjTAQIBWCJQkmgRjSBwIEODYQkJhbi/B6IYwG+QHCjVHKkYIBfAfQCFgxAchhIBzlwIAAFxQA+iwBshJIAADZQCXiIA/CIIhOjcQD3kCFDhGIi6ERIF0g1Ih5ChIGghKIiGDlQGCAPDRC0IkpAiQEnCsFtg/EgRTAurQgYgLgZgIQlvhSgNAHEgRTAurIABABEgT0A1qQBaB4CLA8IBaAAIAAi3QBEBRB/A7QAXiSg2ioQBkCHCIBZQAqiBhciNQBwAdBhBAQBPA1gMBTIn2JdEgLNAtOIkNF+IkaCeIj4jGQB3DWASDWQj7hviJi7Ii6DKEgKmAtiQgTgKgUgKQiHhYnriiIDsFXANtXDQhaBTh3gBQhjgBh3g6ANtXDQAAC6CGBOQBgiyiUi+QglA+gtAqgAKcYVIgypHQB1n+HwlAQEvh0Ekg/EABTA3gIByg+EANGA1OQD+DaF3BvIH8hwAKueFIiCCoEAL4AxyIhKztQB6i/DLAFEgBkAptQgBG/jeFE");
	this.shape_13.setTransform(338.821,404.4723);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE757").s().p("AkoDUIi6DKIkOjXQDShxEmARIhWiIQDTgQFTBMQichziLikIAOgIQANgHFuBSIAyAUIgBgBIjslXQHrCjCHBXIkNF9IkaCeIj3jGQB2DWASDWQj6huiJi8g");
	this.shape_14.setTransform(191.725,719.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_8},{t:this.shape_2},{t:this.shape_1},{t:this.shape_7}]},3).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_10},{t:this.shape_2},{t:this.shape_1},{t:this.shape_9}]},5).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_12},{t:this.shape_2},{t:this.shape_1},{t:this.shape_11}]},5).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_13}]},5).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_14},{t:this.shape_2},{t:this.shape_1},{t:this.shape_13}]},3).to({state:[]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,681.7,813);


(lib.flower = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AhPCrQgWB3A3AlIA2AAIAXhFIA5A2IA5gTIAgg0IhPhTICkAAQAhgRgRg2Ih3g2QBlgUAUg6IAAgyIhsgTIgqAyIA9hxIgoglIgzBMQAqh2g8hGQhKBHAKB6Igkh5IgcAaIgdBnIhchKIgcAAQg8A5ArAuIA7A1IhngaQg2BFA2AqIByAAIhYBSQgtAyAtAnQAZBHAvgOgAhOARIAaA5IA3AUIAigVQAWg2gggwIgrgeIgcAAQgZAlgJAng");
	this.shape.setTransform(28.364,32.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDFD6C").s().p("AgjA6Igag6QAIgnAaglIAbAAIAsAeQAfAxgVA1IgiAVg");
	this.shape_1.setTransform(26.7361,34.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2547E").s().p("AguFHQg3glAWh3IhPBjQgvAOgZhHQgtgnAtgyIBYhSIhyAAQg2gqA2hFIBnAaIg7g1QgrguA8g5IAcAAIBcBKIAdhnIAcgaIAkB5QgKh6BKhHQA8BGgqB2IAzhMIAoAlIg9BxIAqgyIBsATIAAAyQgUA6hlAUIB3A2QARA2ghARIikAAIBPBTIggA0Ig5ATIg5g2IgXBFgAhOARIAaA5IA3AUIAigVQAWg2gggwIgrgeIgcAAQgZAlgJAng");
	this.shape_2.setTransform(28.364,32.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(5,1,1).p("AC3htQAAABAAABQABABABAAIABAAQAHADgKgGQgBAAgBgBIACAAIBmAMIAAAzQgeAvhcASIBpAoQAUA0gSAZIiEAIQAQAmAJAPIgPBGQgcATgeAEIhGhHIgUBQIg3ACQgwgfAKhdIg6A3QgsAOgcgyQglgiAcgrQAggvA7guIh2ABQgzglAyhFQAngFA3AKIgOglQgqgtAkg1QAJgRAhgCIBRBPIAWhhQAMgZAegIIAgBgQgGhNA4gmQA5AugUBTIAwg4IAOA3QgCAUADApgAhHgEQAKgmAWgjQAUgEAUgCIAmAcQAYAsgPAuQgRAWgaAMIgzgSg");
	this.shape_3.setTransform(27.3624,34.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDFD6C").s().p("AglA7IgZg5QAKglAWgjQAUgEAUgBIAmAcQAYArgPAuQgRAWgaANg");
	this.shape_4.setTransform(26.4848,34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2547E").s().p("AhdCwIg6A3QgsAOgcgyQglgiAcgrQAggvA7guIh2ABQgzglAyhFQAngFA3AKIgOglQgqgtAkg1QAJgRAhgCIBRBPIAWhhQAMgZAegIIAgBgQgGhNA4gmQA5AugUBTIAwg4IAOA3QgCAUADAqIgCgBIACABIAAACIACABIABAAIABABIAAAAIABAAIAAAAIABAAIAAAAIgFgDIAAAAIgBgBIAAAAIAAAAIAAAAIBmALIAAAzQgeAvhcASIBpAoQAUA0gSAZIiEAIQAQAmAJAPIgPBGQgcATgeAEIhGhHIgUBQIg3ACQgwgfAKhdgAgnhNQgWAjgKAmIAZA3IAzASQAagMARgWQAPgugYgsIgmgcQgUACgUAEgAC8hpIAAAAIgBAAIAAAAIgBgBIgBAAIgCgBIAAgCIAAAAIAAAAIABABIAAAAIAFADIAAAAIgBAAgAC3htIAAAAgAC3htIgCgBIACABIAAAAIAAAAg");
	this.shape_5.setTransform(27.3624,34.725);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("AkJhLQAZgXA7AHIAfgUQgogtALgxQAFgjAzgCIBHBUIAOhcQAKglAvgDIAcBHQgEgfAngGQA2AXADAvIAsgkIgNBIQAbgPAkAgQAFAigxAKIBkAEIgBA0QgpAkhRARIBbAaQAXAygCAhIhlAQQgJAhgVgKIADBYQgdAcgfgBIhThZIgQBcIg5AFQgpgagChDIgmAKQgoAPgdgdQgggeAOgjQARg2BLgzIh5ADQgwgiAuhEgAhBgKQALgiATghQAZgKAcgDIAfAaQASAmgKAnQgQAhgkAPIgugQg");
	this.shape_6.setTransform(26.5429,35.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDFD6C").s().p("AgmA8IgYg4QALghATghQAZgKAcgDIAfAaQASAmgKAnQgQAhgkAPg");
	this.shape_7.setTransform(26.2421,33.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F2547E").s().p("AhtDGIgmAKQgoAOgdgcQgggeAOgjQARg1BLg1Ih5AEQgwgiAuhEQAZgXA7AHIAfgUQgogtALgxQAFgiAzgDIBHBUIAOhbQAKgmAvgDIAcBHQgEgfAngGQA2AXADAwIAsgkIgNBIQAbgQAkAhQAFAhgxALIBkADIgBA1QgpAjhRARIBbAbQAXAxgCAhIhlAQQgJAhgVgLIADBZQgdAdgfgCIhThZIgQBbIg5AGQgpgagChDgAgjhNQgTAhgLAiIAYA4IAuAPQAkgOAQgiQAKgngSgmIgfgaQgcADgZAKg");
	this.shape_8.setTransform(26.5429,35.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(5,1,1).p("AkQg7QANgpA/AEIBMgEQgngsgNguQAAgzBGgFIA7BZIAIhVQAIgyBAADIAXAuQAAANAUAbQA0AAAZAMIApgQIgnBaQA3g0BGAVQgFA+hSAcIBfgEIgBA2QgzAYhJAQIBOAMQAaAxANAnIhFAZQghAdgzglIAUBrQgdAmghgIIhehpIgOBmIg7AIQghgUgOgpIgRgjQglAPgggIQgYgZgDgcQAFg7BZg5Ih8AEQgtgeAphCgAg8gFQAMggAQgfQAegOAkgFIAZAXQAKAhgDAgQgRAtgtARIgpgOg");
	this.shape_9.setTransform(25.7227,34.4915);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FDFD6C").s().p("AgoA+IgXg4QAMgeAQgfQAegPAkgEIAZAWQAKAhgDAgQgRAugtAQg");
	this.shape_10.setTransform(26.0083,33.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F2547E").s().p("Ah9DmIgRgjQglAPgggIQgYgZgDgcQAFg7BZg5Ih8AEQgtgeAphCQANgpA/AEIBMgEQgngsgNguQAAgzBGgFIA7BZIAIhVQAIgyBAADIAXAuQAAANAUAbQA0AAAZAMIApgQIgnBaQA3g0BGAVQgFA+hSAcIBfgEIgBA2QgzAYhJAQIBOAMQAaAxANAnIhFAZQghAdgzglIAUBrQgdAmghgIIhehpIgOBmIg7AIQghgUgOgpgAgghEQgQAfgMAgIAXA2IApAOQAtgRARgtQADgggKghIgZgXQgkAFgeAOg");
	this.shape_11.setTransform(25.7227,34.4915);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(5,1,1).p("AilApQhoA+AJBCIAkApIBDgcIgDBPIA0AdIA8gKIAKhyIBrB7QAjANAdgvIglh9QBRA+A5gYIAmghIg6heIhAACIB9gcIABg2IhbALQB1guANhbQhngIhUBXIBChsIglgDIhhAuIgGh2IgSgVQhRgIgHA/IAABPIgwheQhZAGAEBEIBLBWIh4gNQhDAAAAA7QglBBAqAagAgwg7IgaA5IAWA2IAmAMQA1gTARg3IgHg2IgSgUQgsAFgjAUg");
	this.shape_12.setTransform(26.8085,33.9443);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FDFD6C").s().p("AgqA/IgXg3IAag5QAkgTAsgGIASAVIAGA1QgQA4g2ATg");
	this.shape_13.setTransform(25.85,32.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F2547E").s().p("ABFEhIhrh7IgKByIg8AKIg0gdIADhPIhDAcIgkgpQgJhCBog+Ih/AGQgqgaAlhBQAAg7BDAAIB4ANIhLhWQgEhEBZgGIAwBeIAAhPQAHg/BRAIIASAVIAGB2IBhguIAlADIhCBsQBUhXBnAIQgNBbh1AuIBbgLIgBA2Ih9AcIBAgCIA6BeIgmAhQg5AYhRg+IAlB9QgWAlgbAAQgHAAgIgDgAgwg7IgaA5IAWA2IAmAMQA1gTARg3IgHg2IgSgUQgsAFgjAUg");
	this.shape_14.setTransform(26.8085,33.9443);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(5,1,1).p("AkgghQABg0AzgHIBtADIhEhNQAAg6BGgKQAhAcApA2IgMhZQAHg7BQAJQAUADAMAYIAMB2IBXg8QAdgGAXAWIhDBkQBIhFBXADQAFBBhSA2IBBgCIgdAzIhKAoIAzAIIAMBAQAOAZgIAlQhBAXhShGIAmByQgcAmgggIIhih3IgCBkIg+AdIgygcQgJgpAJg2IhNApQgbgSgNgZQADhDBYhBIh7AMQgjgaAYg3gAg9gJIAfg1QAhgOAqgEQAOAPAMASIACAuQgTAsguASQgcgEgYgQg");
	this.shape_15.setTransform(25.6791,33.9404);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FDFD6C").s().p("AgxAzIgRgzIAeg0QAjgOAogEQAPAPAMASIABAtQgSAtgvASQgcgEgXgQg");
	this.shape_16.setTransform(26.225,32.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F2547E").s().p("AiAEJQgJgpAJg2IhNApQgbgSgNgZQADhDBYhBIh7AMQgjgaAYg3QABg0AzgHIBtADIhEhNQAAg6BGgKQAhAcApA2IgMhZQAHg7BQAJQAUADAMAYIAMB2IBXg8QAdgGAXAWIhDBkQBIhFBXADQAFBBhSA2IBBgCIgdAzIhKAoIAzAIIAMBAQAOAZgIAlQhBAXhShGIAmByQgcAmgggIIhih3IgCBkIg+AdgAgeg+IgfA1IARAyQAYAQAcAEQAugSATgsIgCguQgMgSgOgPQgqAEghAOg");
	this.shape_17.setTransform(25.6791,33.9404);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(5,1,1).p("AkegYQACgsAkgPIBigFIg/hGQAFguAzgPQAqAIA7A+IgZhiQAIg4BOALQAggFAQAkIARB2IBMhJQApgNAbAqIhFBcQA9gyBGgDQAYAmgwA/IAnAGIg3AyIgYAzIAlASIghAiQAtAhAFA6QhKAWhShPIAnBoQgbAcgfgCIhYh0IAGBXIg/AwIgwgaQgUgrAQhEIhWA0QgkgPgJgdQAPhFBIhDIh3ASQgcgaALgugAg2gRIAjgwQAhgJAmgCQAUATAPAZIgEAmQgUAignAQQgmgBgcgag");
	this.shape_18.setTransform(25.1968,34.0415);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FDFD6C").s().p("Ag6AoIgMgvIAjgwQAigJAlgBQAUASAPAaIgEAlQgUAjgnAPQgmgBgcgZg");
	this.shape_19.setTransform(26.775,32.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F2547E").s().p("AhmENQgUgrAQhEIhWA0QgkgPgJgdQAPhFBIhDIh3ASQgcgaALguQACgsAkgPIBigFIg/hGQAFguAzgPQAqAIA7A+IgZhiQAIg4BOALQAggFAQAkIARB2IBMhJQApgNAbAqIhFBcQA9gyBGgDQAYAmgwA/IAnAGIg3AyIgYAzIAlASIghAiQAtAhAFA6QhKAWhShPIAnBoQgbAcgfgCIhYh0IAGBXIg/AwgAgThBIgjAwIAMAuQAcAaAmABQAngQAUgiIAEgmQgPgZgUgTQgmACghAJg");
	this.shape_20.setTransform(25.1968,34.0415);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(5,1,1).p("AkhgNQAEglAUgXIBWgPIg3g9QAJgjAggUQAygLBMBGIglhsQAKg0BNALQAqgNATAyIAYB2IBChXQAygUAhA+IhHBVQAxggA2gIQArALgOBHIAMAQIhRAvIAZA/IAYAbIhOAEQBOAqAQBOQhSAVhThWIAoBcQgaATgcADIhPhwIAPBKIhCBDIgtgaQgggsAYhTIhgBBQgtgMgEgiQAbhGA3hFIhyAXQgWgagCgjgAg0gZIAogsQAggDAjAAQAZAXASAhIgJAeQgVAYggAOQgwABghgjg");
	this.shape_21.setTransform(25.1,34.0898);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDFD6C").s().p("AhDAcIgHgqIAogsQAggDAjAAQAZAXARAgIgIAfQgWAXgfAOIgEAAQguAAgfgig");
	this.shape_22.setTransform(27.35,33.028);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F2547E").s().p("AhQEQQgggsAYhTIhfBBQgtgMgFgiQAbhGA4hFIhzAXQgWgagCgjQAEglAVgXIBVgPIg3g9QAJgjAggUQAygLBNBGIglhsQAJg0BNALQArgNASAyIAYB2IBBhXQA0gUAfA+IhGBVQAyggA1gIQAqALgOBHIANAQIhRAvIAZA/IAYAbIhOAEQBOAqAQBOQhSAVhShWIAnBcQgaATgcADIhPhwIAPBKIhCBDgAgLhFIgoAsIAGArQAhAjAwgBQAggOAVgYIAIgeQgRghgZgXQgjAAgfADg");
	this.shape_23.setTransform(25.1,34.0898);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(5,1,1).p("AhSiNQhehOg6AfIgbAxIAxA1IhLAYIgKA7IAeA0IBvgdIhPCPQAAAmA3AKIBphNQggBhArAuIAsAYIBDhWIgXg8IBFBrIA0gRIgqhSQBTBeBagTQgbhjhugyIB7AZIgKgkIhMhLIBsgtIAOgYQgVhQg9AQIhKAbIBIhOQglhSg+AcIg3BkIgdh2QgXg+g2AUQhLgMgKAwgAA0hDIg+gEIgsAnIACAnQAlAtA5gEIAwgZIANgXQgUgogfgbg");
	this.shape_24.setTransform(25.575,34.0718);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FDFD6C").s().p("AhMATIgCgnIAsgnIA+AEQAfAbAUAnIgNAYIgwAZIgJAAQgzAAgigpg");
	this.shape_25.setTransform(27.975,32.8663);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F2547E").s().p("AhAEVQgrguAghhIhpBNQg3gKAAgmIBPiPIhvAdIgeg0IAKg7IBLgYIgxg1IAbgxQA6gfBeBOIgxh2QAKgwBLAMQA2gUAXA+IAdB2IA3hkQA+gcAlBSIhIBOIBKgbQA9gQAVBQIgOAYIhsAtIBMBLIAKAkIh7gZQBuAyAbBjQhaAThTheIAqBSIg0ARIhFhrIAXA8IhDBWgAg2ggIACAnQAlAtA5gEIAwgZIANgXQgUgogfgbIg+gEg");
	this.shape_26.setTransform(25.575,34.0718);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(5,1,1).p("AkoALIALg4QAmgUAygHIg6g8QAKgeATgVQA+gUBbBEIgyhzQANgrBBAGQAxgQAYAyIAfBsIA1hcQA3gUAiBDQgVAqgoA0IBRgkQA6gMARBPQABAUgRAQIhtAuIBTBDQALAagKAZIh1ggQBcAvAaBWQhDAbhRhFIAcBAIg3gGIhDhEIAMAzIg1AsQgXANgkAAQgqg2AphhIhjBIQgugMgDgjIBSiEIhjAdgAgygIQAPgbAZgZIA6ACQAdAZAVAjIgJAgQgYARgaAPQgwACghgkg");
	this.shape_27.setTransform(25.4007,33.3212);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FDFD6C").s().p("AhBAdIgIgoQAPgbAZgYIA5ABQAdAaAVAjIgJAfQgXARgbAPIgGAAQgsAAgegig");
	this.shape_28.setTransform(27.775,33.583);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F2547E").s().p("AhWEkQgqg2AphhIhjBIQgugMgDgjIBSiEIhjAdIgsg0IALg4QAmgUAygHIg6g8QAKgeATgVQA+gUBbBEIgyhzQANgrBBAGQAxgQAYAyIAfBsIA1hcQA3gUAiBDQgVAqgoA0IBRgkQA6gMARBPQABAUgRAQIhtAuIBTBDQALAagKAZIh1ggQBcAvAaBWQhDAbhRhFIAcBAIg3gGIhDhEIAMAzIg1AsQgWANgiAAIgDAAgAgygIIAIAoQAhAkAwgCQAagPAYgRIAJggQgVgjgdgZIg6gCQgZAZgPAbg");
	this.shape_29.setTransform(25.4007,33.3212);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(5,1,1).p("AknAOIAMg2QAmgbA/gCIhDhDQAHglAXgRQBDgJBXA5IgxhwQAQglA2AAQAsgMAaAlIAgBjIAyhUQAwgNAgA1QgFAsgtBCIBXgsQA5gJAMBOQAIAcgbAUIhtAvIBZA7QASAigaAfIhugmQBKArAZBKQgsAihQgrIAPAuIh7g6IABAqIgnACQgZAngyALQgog+AyhhIhcBEQgmgQgGggIBVh5IhYAfgAgtADQAIghAcgeIA0gBQAcAYAVAfIgFAnQgWAVgdASQgnABgcgdg");
	this.shape_30.setTransform(25.2914,33.7688);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FDFD6C").s().p("Ag2AnIgOgoQAIgjAcgdIA0gBQAcAXAVAgIgFAmQgWAWgdASIgCAAQgmAAgbgcg");
	this.shape_31.setTransform(27.575,34.3004);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F2547E").s().p("AhjCIIhcBEQgmgQgGggIBVh5IhYAfIg5g0IAMg2QAmgbA/gCIhDhDQAHglAXgRQBDgJBXA5IgxhwQAQglA2AAQAsgMAaAlIAgBjIAyhUQAwgNAgA1QgFAsgtBCIBXgsQA5gJAMBOQAIAcgbAUIhtAvIBZA7QASAigaAfIhugmQBKArAZBKQgsAihQgrIAPAuIh7g6IABAqIgnACQgZAngyALQgog+AyhhgAgJg8QgcAegIAhIAOApQAcAdAngBQAdgSAWgVIAFgnQgVgfgcgYg");
	this.shape_32.setTransform(25.2914,33.7688);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(5,1,1).p("AknARIANgzQAmgjBLADIhMhLQAFgrAcgOQBGAEBUAuIgxhtQASgfAsgHQAogIAaAYIAiBZIAwhLQApgFAeAmQAKAugyBQIBeg1QA2gFAJBNQAQAkgmAZIhtAvIBfA0QAZAogqAmIhngsQA4AoAXA8QgVAqhNgQIAAAbIg8g0Ig+AKIgLAhIgagpQgaBChAAWQgnhFA8hjIhWBBQgegTgIgdIBYhuIhNAggAgrAPQABgpAfgiIAwgEQAaAWAWAbIAAAuQgXAagfAVQgfAAgWgVg");
	this.shape_33.setTransform(25.2517,34.2265);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FDFD6C").s().p("AgqAzIgWgrQABgoAggjIAvgEQAaAXAXAbIgBAtQgXAbgfAUQgeAAgWgUg");
	this.shape_34.setTransform(27.35,34.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F2547E").s().p("AhwCCIhWBBQgegTgIgdIBYhuIhNAgIhGg0IANgzQAmgjBLADIhMhLQAFgrAcgOQBGAEBUAuIgxhtQASgfAsgHQAogIAaAYIAiBZIAwhLQApgFAeAmQAKAugyBQIBeg1QA2gFAJBNQAQAkgmAZIhtAvIBfA0QAZAogqAmIhngsQA4AoAXA8QgVAqhNgQIAAAbIg8g0Ig+AKIgLAhIgagpQgaBChAAWQgnhFA8hjgAgLg8QgfAigBApIAVAqQAWAVAfAAQAfgVAXgaIAAguQgWgbgagWg");
	this.shape_35.setTransform(25.2517,34.2265);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(5,1,1).p("AknATIAOgwQAmgrBYAJIhVhSQACgyAggKQBLAPBQAkIgwhrQAVgZAhgNQAjgEAcAMIAjBPIAuhCQAhABAcAXQAaAyg3BdIBlg9QA0gCAEBNQAXArgvAdIhuAwIBlAsQAgAwg6AsIhggzQAmAmAWAvQACAyhMAJIgNAJIg+hMIg9AyIgWAZIgMhUQgcBchOAhQglhNBFhjIhPA8QgWgVgLgbIBbhiIhCAhgAgnAcQgGgxAignIArgGQAYAUAXAWIADA2QgVAfgiAYQgWgDgRgMg");
	this.shape_36.setTransform(25.2002,34.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FDFD6C").s().p("AggA9IgcgqQgGgxAignIArgGQAZAUAWAXIAEA2QgWAegiAYQgVgCgRgNg");
	this.shape_37.setTransform(27.28,35.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F2547E").s().p("Ah9B9IhPA8QgWgVgLgbIBbhiIhCAhIhTg1IAOgwQAmgrBYAJIhVhSQACgyAhgKQBKAPBRAkIgxhrQAVgZAhgNQAkgEAbAMIAjBPIAuhCQAhABAcAXQAaAyg3BdIBlg9QA0gCAFBNQAWArgvAdIhtAwIBkAsQAgAwg6AsIhggzQAmAmAWAvQACAyhLAJIgOAJIg+hMIg9AyIgWAZIgLhUQgcBchPAhQglhNBFhjgAgLg8QgiAnAGAxIAbAqQARAMAWADQAigYAWgfIgEg2QgXgWgYgUg");
	this.shape_38.setTransform(25.2002,34.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(5,1,1).p("ACAh0QA8hrgpg0Ig1gRIgrA6IglhGIg7ABIguAnIAwBoIicg0QglAGABA4IBeBZQhlgNgmAyIgPAvIBgAzIA3ghIheBXIAbAwIBJg4QhOBjAkBVQBcgtAdh0IgCB9IAhgPIA7hZIBBBiIAbAJQBKgigag6IgohFIBZA6QBKgzgmg4IhsgkIBugxQA6ghgegzQgBhMgygCgABQAdIgIg+IgugkIgmAIQglAtANA4IAiArIAYAIQAlgbAVgjg");
	this.shape_39.setTransform(25.1643,35.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FDFD6C").s().p("AgWBIIghgrQgOg4AlgsIAngJIAuAlIAHA9QgVAkgkAag");
	this.shape_40.setTransform(27.1446,36.15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F2547E").s().p("AiKB5IhJA3IgbgwIBehXIg3AiIhgg1IAPgtQAmgzBlAOIhehZQgBg4AlgHICcA0IgwhoIAugnIA7AAIAlBFIArg6IA1ASQApA0g8BqIBrhFQAyABABBMQAeAzg6AhIhuAxIBsAkQAmA4hKAzIhZg5IAoBEQAaA6hKAiIgbgJIhBhiIg7BZIghAPIACh+QgdB2hcAsQgkhVBOhigAgMg8QglAsANA4IAiArIAYAIQAlgbAVgjIgIg9Iguglg");
	this.shape_41.setTransform(25.1643,35.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(5,1,1).p("Ai+A9Qg7gaguglQAXgaAagDQAZgwBLAEIhChNQAJgjAmAEIB2AfIgchnIAugcQAhAHAWAUIAvAlQAcgXATgQIAgAtQArAlglBQIBdguQAoAIAABCQARAsg1AdIhMAxIBTAnQAUA2hQAcIg6gYQAQAlABAdQAKAzhCAQIhahXQgiAsgjAVIgPgGIgMhcQgjBihQAVQgchGA/hSIgmAfIgogyIAxgzIAYgZIgTAbQgCgBgDgBgAgtA0QgKgwAfgmIAngNQAeAMAbAWIAIA5QgVAgghAbIgfgFQgVgWgTgYg");
	this.shape_42.setTransform(24.9564,33.55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FDFD6C").s().p("AgVBHQgVgWgTgYQgKgwAfgmIAogOQAdANAbAVIAIA6QgVAgghAag");
	this.shape_43.setTransform(26.5515,36.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F2547E").s().p("AAPDFQgiAsgjAUIgPgFIgMhcQgjBihQAWQgchHA/hSIgmAfIgogyIAxgzIAFACIATgbIgYAZQg7gaguglQAXgaAagDQAZgvBLADIhChNQAJgjAmAEIB2AfIgchmIAugdQAhAHAWAVIAvAlIAvgoIAgAuQArAkglBRIBdgvQAoAIAABCQARAsg1AeIhMAwIBTAoQAUA1hQAdIg6gZQAQAlABAcQAKA0hCAQgAgYgiQgfAmAKAwQATAYAVAWIAfAFQAhgbAVggIgIg5QgbgVgegNgAi+A9IAYgZIgTAbIgFgCgAi+A9IAAAAg");
	this.shape_44.setTransform(24.9564,33.55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(5,1,1).p("AjGAZQg7gZgngsQAngcAsARQAMgtAxgGIglhAQARgPAoAPIBQAJIgIhlIAugRQAlAPANAoIA6AEQAjgRAQgDIAKBIQAuAWgPA2IBQgXQAeANAAA6QAEAmgwAaIgrAvIA6ArQACAyhXAGIgaAJQALAogSAVQgFAvg5gDIgkgxIg1gQQgoAqgngDIADgaIgag8QgoBRhFgDQgTg1Arg9QACgDADgEIgFAHIAAAAIgzg1IAqg2IAIgLIARAVQgNgFgMgFgAg3AvQgGgnAYgfIAogSQAkAFAgAaIAIA0QgUAegdAaIgogCQgYgVgVgcg");
	this.shape_45.setTransform(24.8652,33.6814);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FDFD6C").s().p("AgVBEQgYgVgVgbQgGgnAYgfIApgTQAjAGAgAZIAIA0QgUAegdAag");
	this.shape_46.setTransform(25.9557,36.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F2547E").s().p("ABXEYIgkgxIg1gQQgoAqgngDIADgaIgag8QgoBRhFgDQgTg1Arg9IAAAAIAFgHIgFAHIgzg1IAqg2Qg7gZgngsQAngcAsARQAMgtAxgGIglhAQARgPAoAPIBQAJIgIhlIAugRQAlAPANAoIA6AEQAjgRAQgDIAKBIQAuAWgPA2IBQgXQAeANAAA6QAEAmgwAaIgrAvIA6ArQACAyhXAGIgaAJQALAogSAVQgEAsg0AAIgGAAgAglgXQgYAfAGAnQAVAcAYAVIAoACQAdgaAUgeIgIg0QgggagkgFgAitAjIgRgVIgIALIAZAKgAi9CEIAAAAIAFgHIgFAHgAjGAZIAIgLIARAVIgZgKgAjGAZIAAAAg");
	this.shape_47.setTransform(24.8652,33.6814);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(5,1,1).p("AkqhZQA2gfA+AmQgBgqAYgRIgJg0QAZAGApAaIAqgMIANhkIAvgGQApAWADA9IBFgdQAqgMANALIgKBkQAvAHAIAcIBCAAQAUATAAAwQgJAegsAYIgJAuIAhAuQgQAvhdgPIAGApQAGAsglAOQgUApgygVIgohFIgvAZQguApgqgbIAVgvIgpgaQgtA+g6gbQgMgpAigwIAfgRIhBg3IAcg2IA1AOQhZgbguhCgAhCAnQgDgeARgZIAqgXQAqgBAkAeIAIAvQgTAcgaAZIguABQgcgVgXgfg");
	this.shape_48.setTransform(24.95,34.1195);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FDFD6C").s().p("AhGAOQgDgdARgaIApgXQArgBAkAeIAIAvQgTAcgaAZIgvABQgbgVgXgfg");
	this.shape_49.setTransform(25.3775,36.6496);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F2547E").s().p("ABCERIgohFIgvAZQgtApgsgbIAWgvIgpgaQgtA+g6gbQgMgpAigwIAfgRIhBg3IAdg2IA1AOQhagbguhCQA2gfA+AmQgBgqAYgRIgJg0QAZAGApAaIAqgMIAMhkIAwgGQApAWAEA9IBDgdQArgMAMALIgKBkQAwAHAHAcIBDAAQATATABAwQgJAegsAYIgJAuIAhAuQgQAvhdgPIAFApQAIAsgmAOQgOAbgaAAQgNAAgRgHgAgLgnIgpAXQgRAZADAeQAXAfAcAVIAugBQAagZATgcIgIgvQgjgdgqAAIgCAAg");
	this.shape_50.setTransform(24.95,34.1195);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(5,1,1).p("AktiHQBGghBQA5QgOgngCgaIATgoQAjAbAqAkIAEgiIAghiIAuAFQAvAegFBRIBPg9QAxgHAKAYIggCAQAygJAdACIA2AXQAKAZAAAnQgWAYgnAVIAYAtIAHAxQgiAshkglIAnBKQACAug5AIQgjAjgpgnIgthaIgqBDQgzAngugyIAnhEIg3AHQgzAsgugyQgEgcATgeIBBgpIhNg6IAGgrIBaAJQhngdguhPgAhOAeQAAgVALgSIAqgdQAxgHApAhIAIArQgTAagVAXIg3AFQgfgVgZgig");
	this.shape_51.setTransform(25.05,34.6708);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FDFD6C").s().p("AhLAIQABgVAKgTIAqgcQAygIAoAiIAIArQgSAZgXAYIg2AEQgfgVgZghg");
	this.shape_52.setTransform(24.75,36.9064);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F2547E").s().p("AAuEJIgthaIgqBDQgzAngugyIAnhEIg2AHQg0AsgugyQgEgcAUgeIBAgpIhNg6IAHgrIBZAJQhngdguhPQBGghBQA5QgOgngCgaIATgoQAjAbArAkIADgiIAhhiIAtAFQAvAegFBRIBOg9QAygHAJAYIgfCAQAygJAdACIA1AXQALAZAAAnQgWAYgnAVIAYAtIAHAxQghAshlglIAmBKQADAug5AIQgQARgTAAQgUAAgVgVgAgZgmIgqAdQgKASgBAVQAZAiAfAVIA2gFQAXgXASgaIgIgrQghgbgnAAIgSABg");
	this.shape_53.setTransform(25.05,34.6708);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(5,1,1).p("AB1CAQBqA8A1gpIARg1Ig6grIBGglIgBg7IgnguIhoAwIA0icQgHglg3ABIhaBeQAOhlgzgmIgugPIg0BgIAiA3IhXheIgwAbIA3BJQhjhOhVAkQAtBcB1AdIh9gCIAPAhIBZA7IhiBBIgJAbQAiBKA5gaIBFgoIg5BZQAzBKA4gmIAkhsIAxBuQAhA6AzgeQBMgBABgygAgcBQIA9gIIAlguIgJgmQgsglg4ANIgrAiIgIAYQAbAlAjAVg");
	this.shape_54.setTransform(25.15,35.1143);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FDFD6C").s().p("AhQADIAIgZIArghQA4gOAtAlIAIAnIgkAuIg+AHQgigVgcgkg");
	this.shape_55.setTransform(24.1,37.0946);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F2547E").s().p("AAZECIgxhuIgkBsQg4AmgzhKIA6hZIhGAoQg4AagjhKIAJgbIBjhBIhZg7IgQghIB9ACQh1gdgthcQBVgkBkBOIg4hJIAwgbIBXBeIghg3IAzhgIAvAPQAyAmgNBlIBZheQA4gBAGAlIg0CcIBogwIAnAuIABA7IhHAlIA7ArIgRA1Qg1Aphqg8IBGBrQgCAyhMABQgRAKgQAAQgdAAgWgmgAgngkIgrAiIgIAYQAbAlAjAVIA+gIIAkguIgIgmQghgbgmAAQgPAAgPADg");
	this.shape_56.setTransform(25.15,35.1143);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(5,1,1).p("Ai2BiQhMgNgShRQAQgsBKALIAsg7IguggQgFgPA+gMIAoANIgEhQQgGgfA2gSQAdASACArIBKAVQApgbAUgMIgBA1IAoA4QAag9A/gRQAVA/guBHIAPgSIAoAuIg/BHIAAABQgFAGgagiIAfAbIA3AvQgFAigjAPQggAfgxgJQgIA2gcAZQgBAAgBAAQgBAAgBAAQgpgBgpgRQgZgLgYgQIAzAaIgCABIg1AnQgpAKgggdQgGgTgHgTIgEgMIAAgBIgLgFQgBgBgCgBQgUgKgVgLQgSgZAIgpQAEgTALgXIgOArQAAAAgBgBgAhDACQAOgZAYgVIAggJQAhAIAbAcQAKApgUAiIgnAYIg0gTQgPgbgOgigACUCiQgRgDgUgIIAlAJQAAABAAABgAh1DBIAAAAIAAgBIgBgCIANAJIgMgGIgBgDAh1DBIgLgGAhxDNIgEgM");
	this.shape_57.setTransform(23.5,34.0378);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FDFD6C").s().p("AglAxQgQgbgNghQAOgaAYgVIAfgJQAhAIAcAcQAKApgVAiIgmAYg");
	this.shape_58.setTransform(23.4139,35.425);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F2547E").s().p("AhkDzIgNgmIgEgMIANAGIgOgJIAOAJIgNgGIgBgDIABACIgLgFIgDgCIgpgVQgSgZAIgpIABABIAOgrQgLAXgEATQhMgNgShRQAQgsBKALIAsg7IgtggQgGgPA+gMIAoANIgEhQQgFgfA1gSQAdASACArIBKAVQApgbAUgMIgBA1IAoA4QAag9A+gRQAWA/gvBHIAQgSIAoAuIg/BHIgfgbIABABIABABIABACIABABIABABIAAAAIACADIAAABQAPARAFACIABAAIABAAIAAAAIABgBIABgBIA2AvQgEAigkAPQgfAfgxgJIAAgCIglgJQAUAIARADQgIA2gcAZIgCAAIgCAAQgpgBgpgRIACgBIgzgaQAYAQAZALQgZgLgYgQIAzAaIgCABIg0AnQgLACgKAAQgdAAgYgVgAgdgsQgXAVgPAZQAOAiAPAbIA0ATIAmgYQAVgigKgpQgcgcgggIgAh1DAIgBgCIABADgABvCXIAlAJIAAACQgRgDgUgIgAi2BiQAEgTALgXIgOArIgBgBgAi2BiIAAAAgADTAuIgBAAQgFgCgPgRIAAgBIgCgDIAAAAIgBgBIgBgBIgBgCIgBgBIgBgBIAfAbIgBABIgBABIAAAAIgBAAgADWAsg");
	this.shape_59.setTransform(23.5,34.0378);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},1).to({state:[]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-2.5,68.6,70.6);


(lib.bushLine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("AgWgNIAtAb");
	this.shape.setTransform(1079.175,348.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(10,1,1).p("EgE7gxrIBtAAIBxCzIAAkwIB8hxIBmCQIg7D6IDXhpIAABtIhHCQIDLAAIBtBOIAAjuQAShbBcgGICMCwIgfihQBriYAxBKQCNgQgUA7QA1BZhkBLIDHgzQCQAuhaBTIibD2IEkgyIAACOIhxBfICrB1IAvCrIBOh5IBWAAIBOCNIAAj2ICzCwIAAkCIBWAAIB1DPICYkoICFAAIBKDeIhKCgICgiFICMBOIAvCNIiYCIIFLAjIAABDIh1BdQANDACPA+IArjDIBKgrQB+A2APBDIAACkICIg3IBOCcIigC3IDnAAIAqCVIiEBZICMBtIAACYIB5BKIAAEGIC4hLICrgJICEAAQD3AcEBEpIh1CQIAbAcIB5B8IA0DuICLiNIBaAzIAACkICYh1IBeBCIAABiIhaBdIDDAAIBdCNIiKB6IhbBuIDCg5IB1ECIj9BxIBSCoIikAAIBCE4IDHAAIB1DaIA3jyICjhxIElAvIAADPIi7C7IGGCzIiUCcIlIAAIBODDIi7AvIkNivIA6F6IksCIIlTjaIhDDLIoilXIArC3IoPiQIAvC/IqqhKIBVDxIkwguIiIjLIi0C7IjhgzIhqDuIjOAAIjyhaIAAhxInMAAIBGCNIh5CgIlzhOIhSjmIjGENIh9hWIAyjHQimCLkGhYEA8GgG6ICUCFEA3VgK/IjiAAIC7CkIi3AAIBlDqIhKB5Ih1haIBeD2IiFCyIAABtEgDzgtUIAOA0EgDzgtUIjcBQIAAB5EgE7gxrIBIEXEgh8go5Qg8iwBFgvIB4AAQBoBXhoCEQDiCZCZiZQiIgzgsh2IAviEQBrgwCPAwQioh3BPhfIBHhVQBPApA4CRIAAj5IBdheIBiA7IAAD9IB5i3IBdDHIBKjyICsicICUAAIBDCoIg3DGIEwhhEgh8go5QAFALAEAMEgh8go5Qg8iehpAVIgtAfQhHCDBHA8IB1CBQiXgciNAcIgvCYQhBiJhLgwIhvA/QhiByAtBiQgcBzCRBgQjFAHgeBQIAACHQBeCrDqBxQjVgugdBlICNFuQiUiEiJCEIAAhjQi6hXisDBIBFjPIhxg/IhZAtIAADHQhziHhohIQhMhPhUBZIAACrIDHC6Qi/hcizBcQiJg2iICzIAAjqIh9DxIg7kYIhhERQgbixh5guQhygeAQCfQiIBNDqCtIjTAAIBGEgQhFBFihhFIAAhxQiOAHhcCpQAMiYhphDQhlBcALA4IAzC0QhVhkhfAtQh/AjACBqQhZB9CQBcICkBiIiJAuIgvBWIA/CQIi0gpQiDBrBwBuIA+B5QiWg+hfA+IhQA8IBrChIhwA7Qg4B+BeB5IBhAAQB7gBBQh4IAACgQiuA0g8BvQgkB7DMA1QilAUgSBoQgiCIBaAmIDkA9IjHAyQh8AvgcDiQgRBpBnAUQBWAqA+gqQBwgNAkh7IAACEQgdA/DBAEQiBARhlCyQg/BmCpAsICbglQD/gWAFh/IBAC8QBLBMApgIQEaBgCzjAQhaBzBmB/QC7BtCMhhICBigQABCaB4gDIDLhTIhKB3QAwBFAtApQCMA3BchHQBiiGC1hBQByA/g+B2QCJA6CbgkQAfiEBqgbICFAAQgvCRBHAwQALAIAOAFICNAAQDggXBAiUIAADKQCWB5DZhaICcjgIBWDJQCXBhCXhhIAfiwIB3CcQCiBjBzhjQC7hJAOiaIBrDEQBqAeBpgeIAAi3QCZAGAiBzQDHAmDGgmQBxgRiEkEEADCAwaIhYhk");
	this.shape_1.setTransform(625.1762,344.9194);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#466D1D").s().p("EgkMA00IAAjKQhACUjgAXIiNAAQgOgFgLgIQhHgwAviRIiFAAQhqAbgfCEQibAkiJg6QA+h2hyg/Qi1BBhiCGQhcBHiMg3QgtgpgwhFIBKh3IjLBTQh4ADgBiaIiBCgQiMBhi7htQhmh/BahzQizDAkahgQgpAIhLhMIhAi8QgFB/j/AWIibAlQipgsA/hmQBliyCBgRQjBgEAdg/IAAiEQgkB7hwANQg+AqhWgqQhngUARhpQAcjiB8gvIDHgyIjkg9QhagmAiiIQAShoClgUQjMg1Akh7QA8hvCug0IAAigQhQB4h7ABIhhAAQheh5A4h+IBwg7IhrihIBQg8QBfg+CWA+Ig+h5QhwhuCDhrIC0ApIg/iQIAvhWICJguIikhiQiQhcBZh9QgChqB/gjQBfgtBVBkIgzi0QgLg4BlhcQBpBDgMCYQBcipCOgHIAABxQChBFBFhFIhGkgIDTAAQjqitCIhNQgQifByAeQB5AuAbCxIBhkRIA7EYIB9jxIAADqQCIizCJA2QCzhcC/BcIjHi6IAAirQBUhZBMBPQBoBIBzCHIAAjHIBZgtIBxA/IhFDPQCsjBC6BXIAABjQCJiECUCEIiNluQAdhlDVAuQjqhxheirIAAiHQAehQDFgHQiRhgAchzQgthiBihyIBvg/QBLAwBBCJIAviYQCNgcCXAcIh1iBQhHg8BHiDIAtgfQBpgVA8CeIAJAXIgJgXQg8iwBFgvIB4AAQBoBXhoCEQDiCZCZiZQiIgzgsh2IAviEQBrgwCPAwQioh3BPhfIBHhVQBPApA4CRIAAj5IBdheIBiA7IAAD9IB5i3IBdDHIBKjyICsicICUAAIBDCoIg3DGIEwhhIBtAAIBxCzIAAkwIB8hxIBmCQIg7D6IDXhpIAABtIhHCQIDLAAIBtBOIAAjuQAShbBcgGICMCwIgfihQBriYAxBKQCNgQgUA7QA1BZhkBLIDHgzQCQAuhaBTIibD2IEkgyIAACOIhxBfICrB1IAvCrIBOh5IBWAAIBOCNIAAj2ICzCwIAAkCIBWAAIB1DPICYkoICFAAIBKDeIhKCgICgiFICMBOIAvCNIiYCIIFLAjIAABDIh1BdQANDACPA+IArjDIBKgrQB+A2APBDIAACkICIg3IBOCcIigC3IDnAAIAqCVIiEBZICMBtIAACYIB5BKIAAEGIC4hLICrgJICEAAQD3AcEBEpIh1CQIAbAcIB5B8IA0DuICLiNIBaAzIAACkICYh1IBeBCIAABiIhaBdIDDAAIBdCNIiKB6IhbBuIDCg5IB1ECIj9BxIBSCoIikAAIBCE4IDHAAIB1DaIA3jyICjhxIElAvIAADPIi7C7IGGCzIiUCcIlIAAIBODDIi7AvIkNivIA6F6IksCIIlTjaIhDDLIoilXIArC3IoPiQIAvC/IqqhKIBVDxIkwguIiIjLIi0C7IjhgzIhqDuIjOAAIjyhaIAAhxInMAAIBGCNIh5CgIlzhOIhSjmIjGENIh9hWIAyjHQimCLkGhYQCEEEhxARQjGAmjHgmQgihziZgGIAAC3QhpAehqgeIhrjEQgOCai7BJQhzBjiihjIh3icIgfCwQiXBhiXhhIhWjJIicDgQhdAmhQAAQhsAAhWhFgEAx2ACWIAABtIAAhtICFiyIhej2IB1BaIBKh5IhljqIC3AAIi7ikIDiAAIjiAAIC7CkIi3AAIBlDqIhKB5Ih1haIBeD2gEBHTAAuIgugdgEA+agE1IiUiFgEgHPgsEIAAB5IAAh5IDchQIAOA0IgOg0IhIkXIBIEXgEgDzgtUg");
	this.shape_2.setTransform(625.1762,344.9194);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,1260.4,699.9);


(lib.bushInside3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("AGuEFQBDhZB7ASIAyAAIAABWIgyA4QDuheBhBeApeCCQhAhYAbhwIAogyQBZgfBKCRQgwhuAmhmQARhtBZgEQBoAjgeB6IAACvQALiVCIhKIA+AAIA0A4IhAB0QB7hMBcAqIAlBIQgTA3iIAtIBuAAQBEAkAHCEQBRheAZhMQBeg9AgA9IBFAgIhQCPIgHAJAu6EKQAFg6BaAQICuA4IhUh+IAAhQQAWhcA+AxIBPBjIAbAA");
	this.shape.setTransform(95.525,33.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,196.1,71.4);


(lib.bushInside2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Al3gMQBihABjAkIhdhvQg1hbA1h2QAVhbBGAbIBJAtIApBqQgQiIBkhpQBSgsATADQBQgJAFBjQhMCBAtBtQB6gfAlhhIBjAAIAAB9QiGA0AIB5ICWgXICJB3IAAibQADhUBZAGQBIAagaA4QAdBOgrA1QBkhzB/AjIAAA+QgKBqhmAoQDhg3BoBNArACAIgshxQgngyAzgtQgEhBBCANQCcAbAUC3IAAixIA8gzIAdAtQBAAEgeBZAxdItIgphLQgEhEBTgGID/AAIjXiIQgphGBHhbQgNhtB/A7QCEggA7BjQATAgAMAtIgfhNAqhDNQABADABADAmHgCQAIgFAIgF");
	this.shape.setTransform(115.9409,55.6912);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,236.9,116.4);


(lib.bushInside1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ApMGZIAAhIQBPgQAcgoIB9AAIibhLQhYg5AphOQBggbCNA8IhUg6Qg5hnBZhNIAeAAIBsCJQAlhaggh6IA4gyQAVB2BnAVQAphFh2iAQADhVBZgGIAgBlIBShlIASDCQAnh2A9gcQAlBFgzBtQBUiBBtgZQAtA/g+BnICoiDIgdCGIBbgq");
	this.shape.setTransform(58.85,40.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,122.7,86.8);


(lib.cloudType2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("A0HV3QDEBwERA4QDtBdEnhdQEZgMDGiOQBaBfCKgEQEMAEAphOQD0CBFHgEQDwAUCzgUQDxgRBLh8QB0BfDKgYQBmAzBJgzQDDgLAkhHICNBeQC/ApCdhJIDfAzQDPBFB9hFQCggwAQhZQBAhahAhxQhChnhiANQhWhBjfBKQApiGh3hHQgkg5hNAaQgthVh8BVQB/i0gVjXQAVijhwi7QhdkIj2h8QiIibjkAWQi0hai0BaQjJAJhBBoQiXA+g0ChQiKBbAFDGQh4gyimAHQiOgJh8BmQhXgHhYB7QhzBUAsCBIiLgtQh3hAiBB1QAehYhBhXQAJiRiehrIijg2QCfiYAvi8QBQiigWiiQAhiYh6iKQhri8iyiYQgihak6g3QinhDixBDQjLAOiZCWQgei+h3iSQhmhziUgKIkOAAQjNAVguB4QiACFADCQIAABeIjdAAQjGgLhhBlQiSAqgiBvQjDByALCzQh7CgBMDEQgMC0CfCnIjVAAQiLAch/CcQhcA0gGCrQhUCCAhB4IByDIQiOgmh0AmQiaARgTBkQhhB4BhBjICwCNQC+BbCPhbQBugDAbg7QC3C9FJgdIIEhWIC4hKICJBdIExAAg");
	this.shape.setTransform(401.2125,161.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AsyYfQkRg4jEhwIl4BpIkxAAIiJhdIi4BKIoEBWQlJAdi3i9QgbA7huADQiPBbi+hbIiwiNQhhhjBhh4QAThkCagRQB0gmCOAmIhyjIQghh4BUiCQAGirBcg0QB/icCLgcIDVAAQifinAMi0QhMjEB7igQgLizDDhyQAihvCSgqQBhhlDGALIDdAAIAAheQgDiQCAiFQAuh4DNgVIEOAAQCUAKBmBzQB3CSAeC+QCZiWDLgOQCxhDCnBDQE6A3AiBaQCyCYBrC8QB6CKghCYQAWCihQCiQgvC8ifCYICjA2QCeBrgJCRQBBBXgeBYQCBh1B3BAICLAtQgsiBBzhUQBYh7BXAHQB8hmCOAJQCmgHB4AyQgFjGCKhbQA0ihCXg+QBBhoDJgJQC0haC0BaQDkgWCICbQD2B8BdEIQBwC7gVCjQAVDXh/C0QB8hVAtBVQBNgaAkA5QB3BHgpCGQDfhKBWBBQBigNBCBnQBABxhABaQgQBZigAwQh9BFjPhFIjfgzQidBJi/gpIiNheQgkBHjDALQhJAzhmgzQjKAYh0hfQhLB8jxARQizAUjwgUQlHAEj0iBQgpBOkMgEQiKAEhahfQjGCOkZAMQiTAuiFAAQiFAAh3gug");
	this.shape_1.setTransform(401.2125,161.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("Eg97ARZQAThkCagRQB0gmCOAmIhyjIQghh4BUiCQAGirBcg0QB/icCLgcIDVAAQifinAMi0QhMjEB7igQgLizDDhyQAihvCSgqQBhhlDGALIDdAAIAAheQgDiQCAiFQAuh4DNgVIEOAAQCUAKBmBzQB3CSAeC+QCZiWDLgOQCxhDCnBDQE6A3AiBaQCyCYBrC8QB6CKghCYQAWCihQCiQgvC8ifCYICjA2QCeBrgJCRQBBBXgeBYQCBh1B3BAICLAtQgsiBBzhUQBYh7BXAHQB8hmCOAJQCmgHB4AyQgFjGCKhbQA0ihCXg+QBBhoDJgJQC0haC0BaQDkgWCICbQD2B8BdEIQBwC7gVCjQAVDXh/C0QB8hVAtBVQBNgaAkA5QB3BHgpCGQDfhKBWBBQBigNBCBnQBABxhABaQgQBZigAwQh9BFjPhFIjfgzQidBJi/gpIiNheQgkBHjDALQhJAzhmgzQjKAYh0hfQhLB8jxARQizAUjwgUQlHAEj0iBQgpBOkMgEQiKAEhahfQjGCOkZAMQknBdjthdQkRg4jEhwIl4BpIkxAAIiJhdIi4BKIoEBWQlJAdi3i9QgbA7huADQiPBbi+hbIiwiNQhhhjBhh4g");
	this.shape_2.setTransform(338.5125,161.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:401.2125}},{t:this.shape,p:{x:401.2125}}]}).to({state:[{t:this.shape_1,p:{x:338.5125}},{t:this.shape_2,p:{x:338.5125}}]},1).to({state:[{t:this.shape_1,p:{x:275.8125}},{t:this.shape_2,p:{x:275.8125}}]},1).to({state:[{t:this.shape_1,p:{x:213.0625}},{t:this.shape_2,p:{x:213.0625}}]},1).to({state:[{t:this.shape_1,p:{x:150.3625}},{t:this.shape_2,p:{x:150.3625}}]},1).to({state:[{t:this.shape_1,p:{x:87.6625}},{t:this.shape_2,p:{x:87.6625}}]},1).to({state:[{t:this.shape_1,p:{x:24.9625}},{t:this.shape_2,p:{x:24.9625}}]},1).to({state:[{t:this.shape_1,p:{x:-37.7375}},{t:this.shape_2,p:{x:-37.7375}}]},1).to({state:[{t:this.shape_1,p:{x:-100.4375}},{t:this.shape_2,p:{x:-100.4375}}]},1).to({state:[{t:this.shape_1,p:{x:-163.1375}},{t:this.shape_2,p:{x:-163.1375}}]},1).to({state:[{t:this.shape_1,p:{x:-225.8375}},{t:this.shape_2,p:{x:-225.8375}}]},1).to({state:[{t:this.shape_1,p:{x:-288.5875}},{t:this.shape_2,p:{x:-288.5875}}]},1).to({state:[{t:this.shape_1,p:{x:-351.2875}},{t:this.shape_2,p:{x:-351.2875}}]},1).to({state:[{t:this.shape_1,p:{x:-413.9875}},{t:this.shape,p:{x:-413.9875}}]},1).to({state:[{t:this.shape_1,p:{x:-413.9875}},{t:this.shape,p:{x:-413.9875}}]},1).to({state:[{t:this.shape_1,p:{x:-413.9875}},{t:this.shape,p:{x:-413.9875}}]},1).to({state:[{t:this.shape_1,p:{x:-413.9875}},{t:this.shape,p:{x:-413.9875}}]},1).to({state:[{t:this.shape_1,p:{x:-413.9875}},{t:this.shape,p:{x:-413.9875}}]},1).to({state:[{t:this.shape_1,p:{x:-413.9875}},{t:this.shape,p:{x:-413.9875}}]},1).to({state:[{t:this.shape_1,p:{x:-413.9875}},{t:this.shape,p:{x:-413.9875}}]},1).to({state:[{t:this.shape_1,p:{x:-413.9875}},{t:this.shape,p:{x:-413.9875}}]},1).to({state:[{t:this.shape_1,p:{x:238.1625}},{t:this.shape_2,p:{x:238.1625}}]},1).to({state:[]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-817.7,-2.5,1622.6,327.7);


(lib.cloudType1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("EAv/gFSQgvgFgwgBAdH+ZQg6gIg9gFQo2gkmEDqIkODaAFk7HQiViOjZhgIq2ihQjbgRjNAnEgm8AAAQkDiKj4AfEgv+AYxQBgAABngkEgpAAYjQA9ABAogRA1vb9QC2gYCPhMEggZgCjQgYACgWADAZdatQCEDAEnB5QEpBjECAT");
	this.shape.setTransform(388.7875,214.01);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("EApdAheQhNgBhRgJQjugZkNhXQlAiAiFjQIgWARQkGDEo4BzQorB5oqh5Ir0lLIgKgEQiLBMiwAdQjPAhkEgfQlzANiBimIilhTIgfgQQgbAXgrAJQhYARifgoIgigJQhVAihQALQkiAojpj9Qj3hlgyjTQjBhzDBolQBCjwGDh+QDXiEDfgFQDugFD2COQALgQAMgMQB5iPD8gRIAygCIgEgDQiQhbgQjaQiJhAAMlkQgYkQD7lpQCSkgHAiqQDFhdDUgkQDDghDRARILHChQDaBeCXCKQBfBYBFBpIAGAJIEZjdQGOjqJDAkIBPAHQG5A0C4DIQE5COCrH6QC3FCizF8IgEAIQAygEAxACQFPALElECQEYCFBnEdQCyESg0FJQALFdj+EjQikEAmBDNQizBhmYAAIg8gBg");
	this.shape_1.setTransform(400.3891,214.7979);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.922)").ss(0.1,1,1).p("AgZAaQBkgcBSgyQiJBLiuAdQgBAAgBAB");
	this.shape_2.setTransform(219.425,387.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("ADw7MQBgBYBEBpIEOjaQGEjqI2AkQA+AFA5AIQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQjABnnHgHQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLQhZAvhoAbQg+ARhDAJEgTcghFQDNgoDbASIK2ChQDZBgCVCOEgTcghFQDDghDRARILHCgQDaBfCXCKEgxyAYsQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjEgqzAYeQhZASifgoQgRgEgRgFQhVAhhQAMEgurAYIQhnAkhgAAA3jb4QjPAikEggQlzANiBilIilhUIgfgPQgaAWgrAJEgpPAYOQgoARg8gB");
	this.shape_3.setTransform(354.4891,214.521);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("EApdAhhQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLIgKgFQiKBMiuAdIgDAAQjPAikEggQlzANiBilIilhUIgfgPQgaAWgrAJQArgJAagWIAfAPQgoARg8gBQhZASifgoIgigJQhVAhhQAMQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjIAHgBIAEgBIADAAQB7gUCBAAIAAAAIAAAAQA9AAA+AFIAFAAIABAAIAGABIADAAILHCgQDaBfCXCKQBgBYBEBpIEOjaQGEjqI2AkQA+AFA5AIQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQizBgmYAAIg8AAgEgvNAX/IAiAJQhnAkhgAAQBQgMBVghgEgurAYIIAAAAgAiB+1IrHigIgDAAIgGgBIgBAAIgFAAQg+gFg9AAIAAAAIAAAAQiBAAh7AUIgDAAIgEABIgHABQDNgoDbASIK2ChQDZBgCVCOQiXiKjahfg");
	this.shape_4.setTransform(354.4891,214.521);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.847)").ss(0.1,1,1).p("AgZAaQBkgcBSgyQiJBLiuAdQgBAAgBAB");
	this.shape_5.setTransform(173.525,387.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("ADw7MQBgBYBEBpIEOjaQGEjqI2AkQA+AFA5AIQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQjABnnHgHQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLQhZAvhoAbQg+ARhDAJEgTcghFQDDghDRARILHCgQDaBfCXCKEgTcghFQDNgoDbASIK2ChQDZBgCVCOEgxyAYsQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjEgqzAYeQhZASifgoQgRgEgRgFQhVAhhQAMA3jb4QjPAikEggQlzANiBilIilhUIgfgPQgaAWgrAJEgpPAYOQgoARg8gBEgurAYIQhnAkhgAA");
	this.shape_6.setTransform(308.5891,214.521);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("EApdAhhQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLIgKgFQiKBMiuAdIgDAAQjPAikEggQlzANiBilIilhUIgfgPQgaAWgrAJQArgJAagWIAfAPQgoARg8gBQhZASifgoIgigJQhVAhhQAMQBQgMBVghIAiAJQhnAkhgAAQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjIAHgBIAEgBIADAAQB7gUCBAAIAAAAIAAAAQA9AAA+AFIAFAAIABAAIAGABIADAAILHCgQDaBfCXCKQBgBYBEBpIEOjaQGEjqI2AkQA+AFA5AIQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQizBgmYAAIg8AAgADw7MIAAAAgAiB+1IrHigIgDAAIgGgBIgBAAIgFAAQg+gFg9AAIAAAAIAAAAQiBAAh7AUIgDAAIgEABIgHABQDNgoDbASIK2ChQDZBgCVCOQiXiKjahfg");
	this.shape_7.setTransform(308.5891,214.521);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.769)").ss(0.1,1,1).p("AgZAaQBkgcBSgyQiJBLiuAdQgBAAgBAB");
	this.shape_8.setTransform(127.625,387.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.1,1,1).p("ADw7MQBgBYBEBpIEOjaQGEjqI2AkQA+AFA5AIQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQjABnnHgHQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLQhZAvhoAbQg+ARhDAJEgTcghFQDNgoDbASIK2ChQDZBgCVCOEgTcghFQDDghDRARILHCgQDaBfCXCKEgxyAYsQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjA3jb4QjPAikEggQlzANiBilIilhUQgoARg8gBQhZASifgoQgRgEgRgFQhVAhhQAMEgpPAYOIgfgPQgaAWgrAJEgurAYIQhnAkhgAA");
	this.shape_9.setTransform(262.6891,214.521);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("EApdAhhQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLIgKgFQiKBMiuAdIgDAAQjPAikEggQlzANiBilIilhUIgfgPQgaAWgrAJQhZASifgoIgigJQhVAhhQAMQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjIAHgBIAEgBIADAAQB7gUCBAAIAAAAIAAAAQA9AAA+AFIAFAAIABAAIAGABIADAAILHCgQDaBfCXCKQBgBYBEBpIEOjaQGEjqI2AkQA+AFA5AIQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQizBgmYAAIg8AAgEgvNAX/IAiAJQhnAkhgAAQBQgMBVghgEgqzAYeQArgJAagWIAfAPQgmAQg4AAIgGAAgEgpPAYOgEgurAYIIAAAAgAiB+1IrHigIgDAAIgGgBIgBAAIgFAAQg+gFg9AAIAAAAIAAAAQiBAAh7AUIgDAAIgEABIgHABQDNgoDbASIK2ChQDZBgCVCOQiXiKjahfg");
	this.shape_10.setTransform(262.6891,214.521);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(0,0,0,0.694)").ss(0.1,1,1).p("AgZAaQBkgcBSgyQiJBLitAdQgCAAgBAB");
	this.shape_11.setTransform(81.725,387.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0.306)").ss(0.1,1,1).p("AqeDOIEOjZQGEjqI0AkQA+AFA5AIQgmgEgogEQpEgjmMDpIkaDdQgDgFgCgEg");
	this.shape_12.setTransform(324.325,39.1158);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.1,1,1).p("AbT+eQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQjABnnHgHQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLQhZAvhoAbQg+ARhDAJEgTcghFQDNgoDbASIK2ChQDZBgCVCOEgTcghFQDDghDRARILHCgQDaBfCXCKQBgBYBEBpEgxyAYsQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjA3jb4QjPAikEggQlzANiBilIilhUQgoARg8gBEgurAYIQhnAkhgAAEgurAYIQgRgEgRgFQhVAhhQAMEgpPAYOIgfgPQgaAWgrAJQhZASifgo");
	this.shape_13.setTransform(216.7891,214.521);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("EApdAhhQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLIgKgFQiKBMiuAdIgDAAQjPAikEggQlzANiBilIilhUIgfgPQgaAWgrAJQhZASifgoIgigJQhVAhhQAMQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjIAHgBIAEgBIADAAQB7gUCBAAIAAAAIAAAAQA9AAA+AFIAFAAIABAAIAGABIADAAILHCgQDaBfCXCKQBgBYBEBpIAGAJIEZjeQFZjKHiAAIAAAAIAAAAQBHAABKAEIAFAAIBPAIQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQizBgmYAAIg8AAgEgvNAX/IAiAJQhnAkhgAAQBQgMBVghgEgqzAYeQArgJAagWIAfAPQgmAQg4AAIgGAAgEgpPAYOgEgurAYIIAAAAgAKi7lQGEjqI2AkQA+AFA5AIIhPgIIgFAAQhKgEhHAAIAAAAIAAAAQniAAlZDKIkfDVgAiB+1IrHigIgDAAIgGgBIgBAAIgFAAQg+gFg9AAIAAAAIAAAAQiBAAh7AUIgDAAIgEABIgHABQDNgoDbASIK2ChQDZBgCVCOQiXiKjahfgAbT+eIAAAAg");
	this.shape_14.setTransform(216.7891,214.521);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0.616)").ss(0.1,1,1).p("AgZAaQBkgcBSgyQiJBLiuAdQgBAAgBAB");
	this.shape_15.setTransform(35.825,387.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.1,1,1).p("AbT+eQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQjABnnHgHQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLQhZAvhoAbQg+ARhDAJADw7MQBgBYBEBpEgTcghFQDNgoDbASIK2ChQDZBgCVCOEgTcghFQDDghDRARILHCgQDaBfCXCKEgxyAYsQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjEgurAYIQhnAkhgAAEgurAYIQgRgEgRgFQhVAhhQAMEgpPAYOQgoARg8gBEgpPAYOIgfgPQgaAWgrAJQhZASifgoA3jb4QjPAikEggQlzANiBilIilhU");
	this.shape_16.setTransform(170.8891,214.521);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(0,0,0,0.384)").ss(0.1,1,1).p("AqeDOIEOjZQGEjqI0AkQA+AFA5AIQgmgEgogEQpEgjmMDpIkaDdQgDgFgCgEg");
	this.shape_17.setTransform(278.425,39.1158);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("EApdAhhQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLIgKgFQiKBMiuAdIgDAAQjPAikEggQlzANiBilIilhUIgfgPQgaAWgrAJQArgJAagWIAfAPQgoARg8gBQhZASifgoIgigJQhVAhhQAMQBQgMBVghIAiAJQhnAkhgAAQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjIAHgBIAEgBIADAAQB7gUCBAAIAAAAIAAAAQA9AAA+AFIAFAAIABAAIAGABIADAAILHCgQDaBfCXCKQBgBYBEBpIEOjaQGEjqI2AkQA+AFA5AIIhPgIIgFAAQhKgEhHAAIAAAAIAAAAQniAAlZDKQFZjKHiAAIAAAAIAAAAQBHAABKAEIAFAAIBPAIQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQizBgmYAAIg8AAgAGU4LIAGAJIEZjegAiB+1IrHigIgDAAIgGgBIgBAAIgFAAQg+gFg9AAIAAAAIAAAAQiBAAh7AUIgDAAIgEABIgHABQDNgoDbASIK2ChQDZBgCVCOQiXiKjahfg");
	this.shape_18.setTransform(170.8891,214.521);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(0,0,0,0.537)").ss(0.1,1,1).p("AgZAaQBkgcBSgyQiJBLiuAdQgBAAgBAB");
	this.shape_19.setTransform(-10.075,387.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0.463)").ss(0.1,1,1).p("AqeDOIEOjZQGEjqI0AkQA+AFA5AIQgmgEgogEQpEgjmMDpIkaDdQgDgFgCgEg");
	this.shape_20.setTransform(232.525,39.1158);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(0.1,1,1).p("AbT+eQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQjABnnHgHQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLQhZAvhoAbQg+ARhDAJEgTcghFQDNgoDbASIK2ChQDZBgCVCOEgTcghFQDDghDRARILHCgQDaBfCXCKQBgBYBEBpEgxyAYsQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjEgurAYIQhnAkhgAAEgurAYIQgRgEgRgFQhVAhhQAMA3jb4QjPAikEggQlzANiBilIilhUQgoARg8gBEgpPAYOIgfgPQgaAWgrAJQhZASifgo");
	this.shape_21.setTransform(124.9891,214.521);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("EApdAhhQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLIgKgFQiKBMiuAdIgDAAQjPAikEggQlzANiBilIilhUIgfgPQgaAWgrAJQhZASifgoIgigJQhVAhhQAMQBQgMBVghIAiAJQhnAkhgAAQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjIAHgBIAEgBIADAAQB7gUCBAAIAAAAIAAAAQA9AAA+AFIAFAAIABAAIAGABIADAAILHCgQDaBfCXCKQBgBYBEBpIAGAJIEZjeQFZjKHiAAIAAAAIAAAAQBHAABKAEIAFAAIBPAIQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQizBgmYAAIg8AAgEgqzAYeQArgJAagWIAfAPQgmAQg4AAIgGAAgEgpPAYOgAKi7lQGEjqI2AkQA+AFA5AIIhPgIIgFAAQhKgEhHAAIAAAAIAAAAQniAAlZDKIkfDVgAiB+1IrHigIgDAAIgGgBIgBAAIgFAAQg+gFg9AAIAAAAIAAAAQiBAAh7AUIgDAAIgEABIgHABQDNgoDbASIK2ChQDZBgCVCOQiXiKjahfgAbT+eIAAAAg");
	this.shape_22.setTransform(124.9891,214.521);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(0,0,0,0.463)").ss(0.1,1,1).p("AgZAaQBkgcBSgyQiJBLitAdQgCAAgBAB");
	this.shape_23.setTransform(-55.975,387.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,0,0,0.537)").ss(0.1,1,1).p("AqeDOIEOjZQGEjqI0AkQA+AFA5AIQgmgEgogEQpEgjmMDpIkaDdQgDgFgCgEg");
	this.shape_24.setTransform(186.625,39.1158);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(0.1,1,1).p("AbT+eQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQjABnnHgHQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLQhZAvhoAbQg+ARhDAJADw7MQBgBYBEBpEgTcghFQDNgoDbASIK2ChQDZBgCVCOEgTcghFQDDghDRARILHCgQDaBfCXCKEgxyAYsQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjEgurAYIQhnAkhgAAEgurAYIQgRgEgRgFQhVAhhQAMA3jb4QjPAikEggQlzANiBilIilhUQgoARg8gBEgpPAYOIgfgPQgaAWgrAJQhZASifgo");
	this.shape_25.setTransform(79.0891,214.521);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("EApdAhhQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLIgKgFQiKBMiuAdIgDAAQjPAikEggQlzANiBilIilhUIgfgPQgaAWgrAJQhZASifgoIgigJQhVAhhQAMQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjIAHgBIADAAIAEgBQB7gUCBAAIAAAAIAAAAQA9AAA9AFIAGAAIABAAIAGABIADAAILHCgQDaBfCXCKQBgBYBEBpIEOjaQGEjqI2AkQA+AFA5AIQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQizBgmYAAIg8AAgAGU4LIAGAJIEZjegAKz7gQFZjKHiAAIAAAAIAAAAQBHAABKAEIAFAAIBPAIIhPgIIgFAAQhKgEhHAAIAAAAIAAAAQniAAlZDKgEgvNAX/IAiAJQhnAkhgAAQBQgMBVghgEgqzAYeQArgJAagWIAfAPQgmAQg4AAIgGAAgEgpPAYOgAiB+1IrHigIgDAAIgGgBIgBAAIgGAAQg9gFg9AAIAAAAIAAAAQiBAAh7AUIgEABIgDAAIgHABQDNgoDbASIK2ChQDZBgCVCOQiXiKjahfg");
	this.shape_26.setTransform(79.0891,214.521);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(0,0,0,0.384)").ss(0.1,1,1).p("AgZAaQBkgcBSgyQiJBLiuAdQgBAAgBAB");
	this.shape_27.setTransform(-101.875,387.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0.616)").ss(0.1,1,1).p("AqeDOIEOjZQGEjqI0AkQA+AFA5AIQgmgEgogEQpEgjmMDpIkaDdQgDgFgCgEg");
	this.shape_28.setTransform(140.725,39.1158);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(0.1,1,1).p("AbT+eQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQjABnnHgHQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLQhZAvhoAbQg+ARhDAJEgTcghFQDNgoDbASIK2ChQDZBgCVCOQBgBYBEBpEgTcghFQDDghDRARILHCgQDaBfCXCKEgxyAYsQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjEgurAYIQgRgEgRgFQhVAhhQAMEgurAYIQhnAkhgAAA3jb4QjPAikEggQlzANiBilIilhUQgoARg8gBEgpPAYOIgfgPQgaAWgrAJQhZASifgo");
	this.shape_29.setTransform(33.1891,214.521);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("EApdAhhQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLIgKgFQiKBMiuAdIgDAAQjPAikEggQlzANiBilIilhUIgfgPQgaAWgrAJQhZASifgoQhnAkhgAAQBQgMBVghIAiAJIgigJQhVAhhQAMQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjIAHgBIADAAIAEgBQB7gUCBAAIAAAAIAAAAQA9AAA9AFIAGAAIABAAIAGABIADAAILHCgQDaBfCXCKQBgBYBEBpIEOjaQGEjqI2AkQA+AFA5AIQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQizBgmYAAIg8AAgAGU4LIAGAJIEZjegAKz7gQFZjKHiAAIAAAAIAAAAQBHAABKAEIAFAAIBPAIIhPgIIgFAAQhKgEhHAAIAAAAIAAAAQniAAlZDKgEgqzAYeQArgJAagWIAfAPQgmAQg4AAIgGAAgEgpPAYOgAiB+1IrHigIgDAAIgGgBIgBAAIgGAAQg9gFg9AAIAAAAIAAAAQiBAAh7AUIgEABIgDAAIgHABQDNgoDbASIK2ChQDZBgCVCOQiXiKjahfg");
	this.shape_30.setTransform(33.1891,214.521);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(0,0,0,0.306)").ss(0.1,1,1).p("AgZAaQBkgcBSgyQiJBLitAdQgCAAgBAB");
	this.shape_31.setTransform(-147.775,387.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0.694)").ss(0.1,1,1).p("AqeDOIEOjZQGEjqI0AkQA+AFA5AIQgmgEgogEQpEgjmMDpIkaDdQgDgFgCgEg");
	this.shape_32.setTransform(94.825,39.1158);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(0.1,1,1).p("AbT+eQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQjABnnHgHQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLQhZAvhoAbQg+ARhDAJADw7MQBgBYBEBpEgTcghFQDDghDRARILHCgQDaBfCXCKEgTcghFQDNgoDbASIK2ChQDZBgCVCOEgxyAYsQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjEgqzAYeQhZASifgoQgRgEgRgFQhVAhhQAMA3jb4QjPAikEggQlzANiBilIilhUIgfgPQgaAWgrAJEgpPAYOQgoARg8gBEgurAYIQhnAkhgAA");
	this.shape_33.setTransform(-12.7109,214.521);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("EApdAhhQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLIgKgFQiKBMiuAdIgDAAQjPAikEggQlzANiBilIilhUIgfgPQgaAWgrAJQArgJAagWIAfAPQgoARg8gBQhZASifgoIgigJQhVAhhQAMQBQgMBVghIAiAJQhnAkhgAAQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjIAHgBIADAAIAEgBQB7gUCBAAIAAAAIAAAAQA9AAA9AFIAGAAIABAAIAGABIADAAILHCgQDaBfCXCKQBgBYBEBpIEOjaQGEjqI2AkQA+AFA5AIQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQizBgmYAAIg8AAgAGU4LIAGAJIEZjegAKz7gQFZjKHiAAIAAAAIAAAAQBHAABKAEIAFAAIBPAIIhPgIIgFAAQhKgEhHAAIAAAAIAAAAQniAAlZDKgADw7MIAAAAgAiB+1IrHigIgDAAIgGgBIgBAAIgGAAQg9gFg9AAIAAAAIAAAAQiBAAh7AUIgEABIgDAAIgHABQDNgoDbASIK2ChQDZBgCVCOQiXiKjahfg");
	this.shape_34.setTransform(-12.7109,214.521);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(0,0,0,0.769)").ss(0.1,1,1).p("AqeDOIEOjZQGEjqI0AkQA+AFA5AIQgmgEgogEQpEgjmMDpIkaDdQgDgFgCgEg");
	this.shape_35.setTransform(48.925,39.1158);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.1,1,1).p("AbT+eQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQjABnnHgHQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLQiOBMi3AYQjPAikEggQlzANiBilIilhUIgfgPQgaAWgrAJQhZASifgoQgRgEgRgFQhVAhhQAMQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjQDNgoDbASIK2ChQDZBgCVCOQBgBYBEBpEgTcghFQDDghDRARILHCgQDaBfCXCKEgurAYIQhnAkhgAAEgpPAYOQgoARg8gB");
	this.shape_36.setTransform(-58.6109,214.521);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("EApdAhhQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLQiOBMi3AYQjPAikEggQlzANiBilIilhUIgfgPQgaAWgrAJQhZASifgoIgigJQhVAhhQAMQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjIAHgBIADAAIAEgBQB7gUCBAAIAAAAIAAAAQA9AAA9AFIAGAAIABAAIAGABIADAAILHCgQDaBfCXCKQBgBYBEBpIEOjaQGEjqI2AkQA+AFA5AIQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQizBgmYAAIg8AAgAGU4LIAGAJIEZjegAKz7gQFZjKHiAAIAAAAIAAAAQBHAABKAEIAFAAIBPAIIhPgIIgFAAQhKgEhHAAIAAAAIAAAAQniAAlZDKgEgvNAX/IAiAJQhnAkhgAAQBQgMBVghgEgqzAYeQArgJAagWIAfAPQgmAQg4AAIgGAAgEgurAYIIAAAAgAiB+1IrHigIgDAAIgGgBIgBAAIgGAAQg9gFg9AAIAAAAIAAAAQiBAAh7AUIgEABIgDAAIgHABQDNgoDbASIK2ChQDZBgCVCOQiXiKjahfg");
	this.shape_37.setTransform(-58.6109,214.521);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0.847)").ss(0.1,1,1).p("AqeDOIEOjZQGEjqI0AkQA+AFA5AIQgmgEgogEQpEgjmMDpIkaDdQgDgFgCgEg");
	this.shape_38.setTransform(3.025,39.1158);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(0.1,1,1).p("AbT+eQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQjABnnHgHQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLQiOBMi3AYQjPAikEggQlzANiBilIilhUQgoARg8gBQhZASifgoQgRgEgRgFQhVAhhQAMQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjQDNgoDbASIK2ChQDZBgCVCOQBgBYBEBpEgTcghFQDDghDRARILHCgQDaBfCXCKEgpPAYOIgfgPQgaAWgrAJEgurAYIQhnAkhgAA");
	this.shape_39.setTransform(-104.5109,214.521);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("EApdAhhQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLQiOBMi3AYQjPAikEggQlzANiBilIilhUIgfgPQgaAWgrAJQhZASifgoIgigJQhVAhhQAMQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjIAHgBIADAAIAEgBQB7gUCBAAIAAAAIAAAAQA9AAA9AFIAGAAIABAAIAGABIADAAILHCgQDaBfCXCKQBgBYBEBpIEOjaQGEjqI2AkQA+AFA5AIQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQizBgmYAAIg8AAgAGU4LIAGAJIEZjegAKz7gIADgCIAIgEQFWjEHaAAIAAAAIAAAAQBHAABKAEIAFAAIBPAIIhPgIIgFAAQhKgEhHAAIAAAAIAAAAQnaAAlWDEIgIAEIgDACgEgvNAX/IAiAJQhnAkhgAAQBQgMBVghgEgqzAYeQArgJAagWIAfAPQgmAQg4AAIgGAAgEgpPAYOgEgurAYIIAAAAgAiB+1IrHigIgDAAIgGgBIgBAAIgGAAQg9gFg9AAIAAAAIAAAAQiBAAh7AUIgEABIgDAAIgHABQDNgoDbASIK2ChQDZBgCVCOQiXiKjahfg");
	this.shape_40.setTransform(-104.5109,214.521);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(0.1,1,1).p("AbT+eQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQjABnnHgHQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLQiOBMi3AYQjPAikEggQlzANiBilIilhUQgoARg8gBADw7MQBgBYBEBpEgTcghFQDNgoDbASIK2ChQDZBgCVCOEgTcghFQDDghDRARILHCgQDaBfCXCKEgxyAYsQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjEgurAYIQhnAkhgAAEgurAYIQgRgEgRgFQhVAhhQAMEgpPAYOIgfgPQgaAWgrAJQhZASifgo");
	this.shape_41.setTransform(-150.4109,214.521);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,0,0,0.922)").ss(0.1,1,1).p("AqeDOIEOjZQGEjqI0AkQA+AFA5AIQgmgEgogEQpEgjmMDpIkaDdQgDgFgCgEg");
	this.shape_42.setTransform(-42.875,39.1158);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("EApdAhhQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLQiOBMi3AYQjPAikEggQlzANiBilIilhUIgfgPQgaAWgrAJQArgJAagWIAfAPQgoARg8gBQhZASifgoIgigJQhVAhhQAMQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjIAHgBIADAAIAEgBQB7gUCBAAIAAAAIAAAAQA9AAA9AFIAGAAIABAAIAGABIADAAILHCgQDaBfCXCKQBgBYBEBpIEOjaQGEjqI2AkQA+AFA5AIIhPgIIgFAAQhKgEhHAAIAAAAIAAAAQnaAAlWDEIgIAEIgDACIADgCIAIgEQFWjEHaAAIAAAAIAAAAQBHAABKAEIAFAAIBPAIQG6A0C3DHQE5COCrH7QC3FBizF8QAwABAwAFQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQizBgmYAAIg8AAgAGU4LIAGAJIEZjegEgvNAX/IAiAJQhnAkhgAAQBQgMBVghgAiB+1IrHigIgDAAIgGgBIgBAAIgGAAQg9gFg9AAIAAAAIAAAAQiBAAh7AUIgEABIgDAAIgHABQDNgoDbASIK2ChQDZBgCVCOQiXiKjahfg");
	this.shape_43.setTransform(-150.4109,214.521);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(0.1,1,1).p("EAwAgFSQgwgFgwgBAdG+ZQg5gIg+gFQo1gkmEDqIkODaAFj7HQiViOjYhgIq2ihQjcgSjNAoEgv/AYxQBhAABngkEgpAAYjQA9ABAogREgm9AAAQkCiKj5AfEggagCjQgXACgWADA1vb9QC2gYCPhMAZcatQCFDAEnB5QEpBjECAT");
	this.shape_44.setTransform(-207.9,214.0207);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#999999").s().p("EApdAheQhNgBhRgJQjtgZkOhXQlAiBiFjPIgWARQkFDFo5ByQorB4oqh4Ir0lLIgKgFQiLBMiwAdQjPAikEggQlzANiBilIilhUIgfgPQgaAWgrAJQhZASifgoIgigJQhVAhhQAMQkiAojpj9Qj3hlgyjUQjBhyDBolQBCjxGDh9QDXiEDfgFQDugFD2COQALgQAMgNQB6iPD7gQIAygCIgEgDQiQhcgQjaQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgiQDDgiDRARILHChQDaBeCXCKQBgBYBEBpIAGAJIEZjeQGOjpJDAjIBPAIQG6A0C3DHQE5COCrH7QC3FBizF8IgEAIQAygDAyABQFPAMEkECQEYCFBnEdQCyESg0FIQALFej+EjQikD/mBDOQizBhmYAAIg8gBg");
	this.shape_45.setTransform(-196.3109,214.8003);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.1,1,1).p("EAuMgFXQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQjABnnHgHQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLQiOBMi3AYQjPAikEggQlzANiBilIilhUQgoARg8gBQhZASifgoQhnAkhgAAQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjQDNgoDbASIK2ChQDZBgCVCOQBgBYBEBpIEOjaQGEjqI2AkQA+AFA5AIQG6A0C3DHQE5COCrH7QC3FBizF8AGU4LQADAEADAFIEZjeQGOjpJDAjQAoAEAnAEEgTcghFQDDghDRARILHCgQDaBfCXCKEgpPAYOIgfgPQgaAWgrAJEgurAYIQgRgEgRgFQhVAhhQAM");
	this.shape_46.setTransform(288.9891,214.521);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(0,0,0,0.8)").ss(0.1,1,1).p("AgtgDQAvABAwAEQgygBgxADQACgEACgDg");
	this.shape_47.setTransform(579.575,179.95);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#999999").s().p("EApdAhhQhNgChRgIQkCgTkphjQknh5iEjAQkFDEo5BzQorB4oqh4Ir0lLQiOBMi3AYQjPAikEggQlzANiBilIilhUIgfgPQgaAWgrAJQArgJAagWIAfAPQgoARg8gBQhZASifgoIgigJQhVAhhQAMQBQgMBVghIAiAJQhnAkhgAAQkiAojpj9Qj3hmgyjTQjBhyDBolQBCjxGDh+QDXiEDfgEQD5gfECCLQB6iPD7gQQAWgDAYgCQgkgXgcgfQhUhdgMijQiJhAAMljQgYkRD7lpQCSkgHAipQDFheDUgjIAGgBIAEAAIAEgBQB7gUCBAAIAAAAIAAAAQA9AAA9AFIAGAAIABAAIAGABIADAAILHCgQDaBfCXCKQBgBYBEBpIEOjaQGEjqI2AkQA+AFA5AIIhPgIIgFAAQhKgEhHAAIAAAAIAAAAQniAAlZDKQFZjKHiAAIAAAAIAAAAQBHAABKAEIAFAAIBPAIQG6A0C3DHQE5COCrH7QC3FBizF8IgEAIQAygDAyABQFPAMEkEBQEYCGBnEdQCyESg0FIQALFej+EjQikD/mBDOQizBgmYAAIg8AAgAGU4LIAGAJIEZjegAiB+1IrHigIgDAAIgGgBIgBAAIgGAAQg9gFg9AAIAAAAIAAAAQiBAAh7AUIgEABIgEAAIgGABQDNgoDbASIK2ChQDZBgCVCOQiXiKjahfg");
	this.shape_48.setTransform(288.9891,214.521);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-606.6,-1,1417.4,431.1);


(lib.lightningStone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("ABUgTIECE3IAlAgADQmEIh8FxIgxA5IkxBvIiFAAAmTC7IgDhaQgBgJAAgJIgJjiAmTCuIAAANIAADFQAAADgBACABUgTIFNkn");
	this.shape.setTransform(52.075,38.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AnOF0Qg3gvgfhXQhGjJBli/IAsgxIBZhlIDVh3IFDAAIDQBKICjCFQBHB2gWB1QgfBjhOBIIiNBjIgkAZQgfAThuAmImmAzQhyAKhHg8g");
	this.shape_1.setTransform(57.7088,42.3649);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7B7B7B").s().p("AgdCaQhGjIBkjAIAsgxIABAWIAJDiIABASIACBZIgChZIACA0IAAAYIAAANIAADGIAAADIAAACIgBAEIgBANQg3gvgehXg");
	this.shape_2.setTransform(5.813,50.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#545550").s().p("Agpi4IDPBKIlLEmg");
	this.shape_3.setTransform(77.125,18.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#686868").s().p("AkrENIgCg1IgBgSIgJjhIgBgVIBahlIDVh3IFCAAIh8FwIgxA6IkxBvg");
	this.shape_4.setTransform(41.6,26.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#535351").s().p("AmIC7IACgMIAAgFIAAgBIABgEIAAjFIAAgNIAAgYICFAAIExhwIAxg5IECE2IAlAgIgkAZQgfAUhvAmImmAzIgeABQhdAAg+g0g");
	this.shape_5.setTransform(50.675,60.8149);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3E3E3C").s().p("AgQEfIkCk2IFMknICjCEQBHB3gXB1QgeBjhPBIIiMBjg");
	this.shape_6.setTransform(87.9707,39.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,118.5,87.8);


(lib.lighter = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AEZngIAAAWAiUraIAAEBAkUraIAAEBAhylLIAAPqQhZB6hNh6IAAvrQBZhWBNBXg");
	this.shape.setTransform(36.925,83.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("ACWpzQgFgHADhDQgMhahVgXQhUgYg0AiQg0AigoAwICpAAIAiBfIB8AAID4AAIAABaIiRAAIAAAwQAAAJAAAIABcnCICgAAIBPAAIAASZQgSBShzAQIn/AAQg2gHgehIIAAysIAAkQIBcAAICAAAAAapzIBCCxAmNnCIHpAA");
	this.shape_1.setTransform(39.8,82.4698);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8894F3").s().p("AhSHtIAAvrQBYhWBNBYIAAPpQgsA9gpAAQgpAAgng9g");
	this.shape_2.setTransform(17.125,101.0936);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CDCDCD").s().p("Aj0CIIAAkPIBdAAIB/AAIAAEAIAAkAICoAAIAjBfIBCCwgAiXB5IAAkAg");
	this.shape_3.setTransform(24.5,23.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E78C2").s().p("AkYJ+Qg1gHgfhHIAAytIHpAAICgAAIBQAAIAASZQgTBThzAPgAkTn+IAAPqQBNB6BZh6IAAvpQgngsgqAAQgpAAgsArg");
	this.shape_4.setTransform(36.45,101.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D94A4E").s().p("Ah3BYIhCiwIB8AAID3AAIAABaIiRAAIAAAwIAAARIgBAVg");
	this.shape_5.setTransform(61,28.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9A9695").s().p("AAoBiIgjhfIioAAQAngvA0ghQA1giBUAXQBVAXAMBZQgEBDAGAHg");
	this.shape_6.setTransform(38.4,9.8198);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,84.6,170);


(lib.campFire = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(5,1,1).p("APuGaIClAtIHug+ID7iwIAAjCIitisIkoiIIjSAAARLlHQAFgCAFgBIBTg5IAtBmIhzAqIj6BcARLlHQg4A/BPAVAHhjgIC0hgIAAh7IBOAAIAABxQCSA8DWg5AHhjgQCBg8CZBFIBtBAIBtA/IB4ChIAACgIgtBtIgyBEIhCBGIhjgCInugMIhOgDIkMgGIg4gCIhnhiQgEB/ihgMIn/AAIixAAIhaglQgpgugihrIAAiYIChiVQAShABdgVIC6hCQBaguCIAuQDHAgBFB4IBSBWIJckbQAKgFAJgEgAvPmiILgCbIA0hYIAACMQBcBIA5hDQEHhtC4ikIAABNICqAAIh1C7AiOBEIhKB/IA6CiAvPmiQCmB+iOCRIgvgsQg4gjhPgYQhOgXhkgMQi9AOiBA0QioARguCLIhCCtQgZBvBPBWQBDBYBiAoIDBAAIGMAAAuIhoIgvgrAvPmiQiJAtgVB7");
	this.shape.setTransform(191.5981,48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AO7jSIBrAAIAAhjICdgtIDiAAIC+BnIh4BSIChAAIAACdIhSBmIhKCEIlaAxIiQgzAgYFOIhziSIAAheIBnA2Ig2iAID/hSIA+BaIAAh/ICcg+ICVhSICHAAID/BzIBbB8IgtC9IiZCqAFCFXIiRiWIBCCUAjyBJIhaAdIA5h+ImDiMIhOBqIAAhjIkMB8IgpCHIg6AAIBnCcICQBbAwRiNIithWIlBBTIBjCkIi6hSIg1C5IA5BWICRAAIgyBn");
	this.shape_1.setTransform(194.15,60.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6D6B6C").s().p("AikEOIAyhnIiQAAIg6hXIA1i4IC6BSIhjikIFBhTICsBWIihCVIAACXQAiBrApAug");
	this.shape_2.setTransform(58.25,64.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8A8685").s().p("AFxEgIiRiXIBCCUIkLgGIhziSIAAheIBmA1Ig0h/ID+hSIA+BbIAAiAICcg+ICVhTICIAAID/B0IBaB8IgtC8IiYCrgAktElIn/AAIiQhaIhnicIA5AAIApiHIEMh8IAABjIBOhrIGECMIg6B/IBagdIA6CgQgDB1iGAAIgbgCg");
	this.shape_3.setTransform(189.425,65.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#613B16").s().p("AkqC8QhEh4jHghQiIgthbAtIi5BCIgvgrQCOiQimh+ILgCcIAzhYIAACLQBcBGA6hBQEHhtC4ikIAABNICqAAIh1C7IpcEbgAKygJQiahEiAA7IC0hgIAAh7IBNAAIAABxQCTA8DWg5Qg4BABPAUIj6Bbg");
	this.shape_4.setTransform(198.9,27.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#916B46").s().p("AwaBcQg3gkhPgXQAUh6CKgtQClB9iOCQgAQYgsIAKgDIBSg4IAtBlIhyApQhPgUA4g/g");
	this.shape_5.setTransform(196.725,19.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#686868").s().p("Az5FgIhbglQgpgtghhrIAAiYICgiVQAThABdgVIC5hDQBagtCJAtQDGAhBFB4IBTBXIhLB+IhaAdIA6h/ImEiLIhOBqIAAhjIkMB8IgpCHIg5AAIBnCdICQBagAMZDeIAthtIAAifIh3ihIBrAAIAAhjICcgtIDjAAIC9BnIh3BSICgAAIAACdIhSBmIhKCEIlaAxg");
	this.shape_6.setTransform(217.825,59.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#848484").s().p("ANJF9ICZirIAti9Ihbh7Ij/h0IiIAAIiUBTIidA+IAAB/Ig9haIj/BRIA2CAIhng1IAABeIByCSIg4gCIhnhjIg6igIBKh/IJckcIATgJQCBg7CZBEIBtBAIBtA/IB4CiIAACfIgtBtICQA0IFagyIBKiEIBShmIAAicIihAAIB4hTIi+hnIjiAAIidAtIAABjIhrAAIhtg/ID6hcIBzgqIDSAAIEoCIICtCtIAADBIj7CxInuA9IilgtIAyhEIgyBEIhCBGgAENFuIhCiUICQCXgA6aFRQhignhDhYQhPhWAZhvIBCisQAuiMCogRQCBgzC9gPQBkAMBOAXQBPAYA4AkIAvArIAvArQhdAWgSBAIithWIlBBSIBjCkIi6hRIg1C4IA5BXICRAAIgyBmgANoj4g");
	this.shape_7.setTransform(191.5981,57.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,388.2,101);


(lib.spider = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#884F9B").ss(1,1,1).p("AkhhRQBwCgClADQDQAFBeid");
	this.shape.setTransform(110.3,76.4327);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AI8mAQBTgrCFAnQDaCiA8DiAJzArQBagIBFBDQBoCeATDEAHhnzQCkhzDFAsQC4CCBKDUAKGitQBKgmA4AwQDFCKBHDfACWjhQAAATgOANQgNANgSAAQgTAAgNgNQgNgNAAgTQAAgSANgOQANgNATAAQASAAANANQAOAOAAASgAG9hTQAAAsggAfQgFAGgGADIAAAAQgcAWglAAQgYAAgVgKQgRgIgOgNQgfgfAAgsQAAgtAfgfQAdgdApgCIABAAQADgBACAAQAMAAALADQABAAACAAQAcAHAWAWQAgAfAAAtgAhUjpQAAAVgPAPQgOAPgVAAQgVAAgPgPQgPgPAAgVQAAgVAPgPQAPgPAVAAQAVAAAOAPQAPAPAAAVgAjzhTQAAAtggAfQgFAFgGADQAAABAAAAQgcAVglAAQgsAAgggeQgfgfAAgtQAAgsAfggQAggfAsAAQAtAAAfAfQAgAgAAAsgAoojzQgbgOgfgFQhHgMhfAbQjiCig+DhAnKlmQgogbgqgSQiIg7icAhQi+CChNDUAp1ggQgBgBgCgBQhKgjg6AvQjMCJhJDgApiC4QhcgIhIBDQhrCegiC2");
	this.shape_1.setTransform(110.025,68.0412);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#884F9B").s().p("AmkBMQgfgfAAgsQAAgsAfggQAggfAsAAQAtAAAfAfQAgAgAAAsQAAAsggAfIgLAJIAAABQgcAVglABQgsAAgggggAErBiQgRgJgOgOQgfgeAAgtQAAgsAfgfQAdgdApgCIABAAIAFAAQAMgBALADIADAAQAcAHAWAWQAgAfAAAsQAAAtggAeIgLAKIAAAAQgcAWglAAQgYAAgVgJg");
	this.shape_2.setTransform(109.325,59.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhBYQgcgdgFgnQgEAngdAcIgMAMQgfAZgpAAQgxAAgjglQgigjAAg0QAAgzAigkQAjgkAxAAQAxAAAjAkQAdAeAEAoQAFgoAcgdQAjglAxAAQAyAAAiAlQAjAkAAAzQAAAzgjAkIgMAMQgfAZgpgBQgxABgjglgABXgBQgNANAAATQAAASANANQAOAOASAAQATAAANgOQANgNAAgSQAAgTgNgNQgNgNgTABQgSgBgOANgAicgNQgOAOAAAVQAAAVAOAPQAPAPAVAAQAVAAAPgPQAPgPAAgVQAAgVgPgOQgPgPgVAAQgVAAgPAPg");
	this.shape_3.setTransform(108.575,42.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AnEGcQiHh7gmihQgHgggEgiIADACIgDgCQgDgeAAggQAAgyAIgwQAGgiALghQAWhHAqg/IAGgHQAmg4A2gxIAKgJQC4iiECAAQB8AABsAmIALAEQBBAYA8AnIAYARQAUAOATAQIAVATIAWAUIAOAPQASATAQAUIAVAcQAMAQAKARQAaAqARAuQAIAWAGAXQAJAiAFAkQAEAkAAAmQAABJgRBCIgBAEIgCAGIgFASQgsCIh3BsQi7CrkJAAQkJAAi7irgAgBEHQDCAABaiQIACgDIAAAAIACgEIABgCIgBACIgCAEIAAAAIgCADQhaCQjCAAIAAAAIAAAAIgJAAIgEAAQikgDhwihQBwChCkADIAEAAIAJAAIAAAAIAAAAgAmvg+QgfAgAAArQAAAtAfAfQAgAfAsAAQAlAAAcgVIAAgBIALgJQAggfAAgtQAAgrggggQgfgfgtAAQgsAAggAfgAEBg+QgfAfAAAsQAAAsAfAfQAOAOARAIQAVAKAYAAQAlAAAcgWIAAAAIALgKQAggfAAgsQAAgsgggfQgWgWgcgHIgDAAQgLgDgMAAIgFABIgBAAQgpACgdAdgAAPhGQAjAkAxAAQApAAAfgZIAMgLQAjgkAAg0QAAgzgjglQgjgkgxAAQgxAAgjAkQgbAegFAnQgGgogcgdQgjglgxAAQgyAAgiAlQgjAkAAA0QAAAzAjAkQAiAlAyAAQApAAAfgZIAMgMQAcgdAGgnQAFAnAbAegAosiSQgbgOgfgFQAfAFAbAOgAnOkFQgogbgqgSQAqASAoAbgAp8A+IAAAAgABFhgQgNgNAAgTQAAgSANgOQANgNATAAQASAAANANQAOAOAAASQAAATgOANQgNANgSAAQgTAAgNgNgAiuhkQgPgPAAgVQAAgVAPgPQAPgPAVAAQAVAAAOAPQAPAPAAAVQAAAVgPAPQgOAPgVAAQgVAAgPgPg");
	this.shape_4.setTransform(110.425,58.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AJDmLQBTgrCFAnQDaCiATDiAJ6AhQBagIBFBCQBoCegzDFAKNi4QBKglA4AvQDFCLABD0AHon9QCkhzDFAsQC4CCAZDhACdjrQAAASgOANQgNAOgSAAQgTAAgNgOQgNgNAAgSQAAgTANgNQANgNATAAQASAAANANQAOANAAATgAHEheQAAAtggAfQgFAFgGAEIAAABQgcAUglAAQgYAAgVgJQgRgHgOgOQgfgfAAgtQAAgsAfggQAdgdApgCIABAAQADAAACAAQAMAAALACQABAAACABQAcAGAWAWQAgAgAAAsgAhNj0QAAAVgPAPQgOAPgVAAQgVAAgPgPQgPgPAAgVQAAgVAPgPQAPgOAVAAQAVAAAOAOQAPAPAAAVgAjshdQAAAsggAfQgFAGgGAEQAAAAAAAAQgcAVglAAQgsAAgggfQgfgfAAgsQAAgtAfgfQAgggAsAAQAtAAAfAgQAgAfAAAtgAohj+QgbgNgfgFQhHgNhfAbQjiCig3DhAnDlwQgogcgqgSQiIg7icAiQi+CCgqDoApugrQgBgBgCAAQhKgjg6AuQjMCKgRDgApbCuQhcgIhIBCQhrCeAVDM");
	this.shape_5.setTransform(109.325,69.0912);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AI8mAQBTgrCFAnQDbCiBRDUAJ0ArQBZgIBGBDQBnCegIC2AKGitQBKgmA5AwQDFCKBADmAHhnzQCkhzDGAsQC4CCBXDUACWjhQAAATgNANQgOANgSAAQgSAAgOgNQgNgNAAgTQAAgSANgOQAOgNASAAQASAAAOANQANAOAAASgAG9hTQAAAsggAfQgFAGgGADIABAAQgdAWgkAAQgZAAgUgKQgRgIgOgNQgfgfAAgsQAAgtAfgfQAdgdAogCIACAAQACgBADAAQALAAAMADQABAAABAAQAdAHAVAWQAgAfAAAtgAhUjpQAAAVgPAPQgOAPgVAAQgVAAgPgPQgOgPAAgVQAAgVAOgPQAPgPAVAAQAVAAAOAPQAPAPAAAVgAjzhTQAAAtggAfQgFAFgGADQAAABAAAAQgcAVglAAQgsAAgggeQgegfAAgtQAAgsAeggQAggfAsAAQAtAAAfAfQAgAgAAAsgAoojzQgbgOgfgFQhHgMhfAbQjiCihoDhAnJlmQgpgbgqgSQiIg7icAhQi+CChbDiAp1ggQgBgBgCgBQhKgjg6AvQjMCJhCDZApiC4QhcgIhIBDQhrCeg3C2");
	this.shape_6.setTransform(110,68.0412);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AI8mAQBTgrCFAnQDaCiA8DiAJzArQBagIBFBDQBoCeATDEAKGitQBKgmA4AwQDFCKBHDfAHhnzQCkhzDFAsQC4CCBKDUACWjhQAAATgOANQgNANgSAAQgTAAgNgNQgNgNAAgTQAAgSANgOQANgNATAAQASAAANANQAOAOAAASgAG9hTQAAAsggAfQgFAGgGADIAAAAQgcAWglAAQgYAAgVgKQgRgIgOgNQgfgfAAgsQAAgtAfgfQAdgdApgCIABAAQADgBACAAQAMAAALADQABAAACAAQAcAHAWAWQAgAfAAAtgAhUjpQAAAVgPAPQgOAPgVAAQgVAAgPgPQgPgPAAgVQAAgVAPgPQAPgPAVAAQAVAAAOAPQAPAPAAAVgAjzhTQAAAtggAfQgFAFgGADQAAABAAAAQgcAVglAAQgsAAgggeQgfgfAAgtQAAgsAfggQAggfAsAAQAtAAAfAfQAgAgAAAsgAnKlmQgogbgqgSQiIg7icAhQi+CChNDUAoojzQgbgOgfgFQhHgMhfAbQjiCig+DhAp1ggQgBgBgCgBQhKgjg6AvQjMCJhJDgApiC4QhcgIhIBDQhrCegiC2");
	this.shape_7.setTransform(110.025,68.0412);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AJDmLQBTgrCFAnQDaCiATDiAJ6AhQBagIBFBCQBoCegzDFAHon9QCkhzDFAsQC4CCAZDhAKNi4QBKglA4AvQDFCLABD0ACdjrQAAASgOANQgNAOgSAAQgTAAgNgOQgNgNAAgSQAAgTANgNQANgNATAAQASAAANANQAOANAAATgAHEheQAAAtggAfQgFAFgGAEIAAABQgcAUglAAQgYAAgVgJQgRgHgOgOQgfgfAAgtQAAgsAfggQAdgdApgCIABAAQADAAACAAQAMAAALACQABAAACABQAcAGAWAWQAgAgAAAsgAhNj0QAAAVgPAPQgOAPgVAAQgVAAgPgPQgPgPAAgVQAAgVAPgPQAPgOAVAAQAVAAAOAOQAPAPAAAVgAjshdQAAAsggAfQgFAGgGAEQAAAAAAAAQgcAVglAAQgsAAgggfQgfgfAAgsQAAgtAfgfQAgggAsAAQAtAAAfAgQAgAfAAAtgAnDlwQgogcgqgSQiIg7icAiQi+CCgqDoAohj+QgbgNgfgFQhHgNhfAbQjiCig3DhApugrQgBgBgCAAQhKgjg6AuQjMCKgRDgApbCuQhcgIhIBCQhrCeAVDM");
	this.shape_8.setTransform(109.325,69.0912);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AI8mAQBTgrCFAnQDbCiBRDUAJ0ArQBZgIBGBDQBnCegIC2AHhnzQCkhzDGAsQC4CCBXDUAKGitQBKgmA5AwQDFCKBADmACWjhQAAATgNANQgOANgSAAQgSAAgOgNQgNgNAAgTQAAgSANgOQAOgNASAAQASAAAOANQANAOAAASgAG9hTQAAAsggAfQgFAGgGADIABAAQgdAWgkAAQgZAAgUgKQgRgIgOgNQgfgfAAgsQAAgtAfgfQAdgdAogCIACAAQACgBADAAQALAAAMADQABAAABAAQAdAHAVAWQAgAfAAAtgAhUjpQAAAVgPAPQgOAPgVAAQgVAAgPgPQgOgPAAgVQAAgVAOgPQAPgPAVAAQAVAAAOAPQAPAPAAAVgAjzhTQAAAtggAfQgFAFgGADQAAABAAAAQgcAVglAAQgsAAgggeQgegfAAgtQAAgsAeggQAggfAsAAQAtAAAfAfQAgAgAAAsgAnJlmQgpgbgqgSQiIg7icAhQi+CChbDiAoojzQgbgOgfgFQhHgMhfAbQjiCihoDhAp1ggQgBgBgCgBQhKgjg6AvQjMCJhCDZApiC4QhcgIhIBDQhrCeg3C2");
	this.shape_9.setTransform(110,68.0412);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_5},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_6},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_7},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_8},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_9},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_7},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_8},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_9},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_7},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_8},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_9},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_7},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_8},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_9},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_7},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_8},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_9},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_7},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_8},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_9},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,0,224.8,129.5);


(lib.pants = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F8A00B").ss(2,1,1).p("AhJBoICIgNAhuhnIDdAKAhsAlICnAa");
	this.shape.setTransform(48.675,63.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E3B179").ss(0.1,1,1).p("AAtAAQAAATgOANQgMANgTAAQgSAAgNgNQgNgNAAgTQAAgRANgOQANgNASAAQATAAAMANQAOAOAAARg");
	this.shape_1.setTransform(35.65,42.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AWhkZIhdAAIhIBMIgSB+ICBCgALLktQAsBLBeAPQBEAYAwgYQB+gzAUiAIAEgLAPVhjIBtBwQAUA/gUABIhhA9IhVAAQhIAKgGgzIAPhZIBWhngAA3G/IhHg/QgMgXAMgvQgFglAyg3IBDggQBEgLA4A4QAbAigbAiADlguIBHBfQAjAvBBABQCKgSBAg+QApgZgKguIhLh1AnaGzQgWgpAVg5IA1hIQBXgUAqARAibgJIgyBSQgTAiATAcQAHAlAtAGIBPAAQBagcASg1AzVm+QAZBLBeA1ICHAAQA9gGAggxIgJgrA2Cg9QApgSApg/QAmhAgmhdQgkhDhMgD");
	this.shape_2.setTransform(153.425,60.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AWllPQB6gxhJhqIglgWIgtBeQhbA3h5AVIhEALIkiAzIg8AAIg2AxIidCDIhiBRIguiGIi5CxIjDCQIgrAAIiShrIqsnvIg8BYIgYAkIhTguIjngUIgPgBQiIgIhdg6QAxgZgUhAQhEAOgNBDIAUArIBNAyQgCAegCAdQgHCkAlCQQAXBaAoBTIBXhqQAKCEBVBaIBKhGIApAjIAdgkQBSB+BRA6IBnhDQgEA+AtAdQBOgZALhBQAiBiBgBIQAKgFALgEQCEg8AxhxQAFgNAFgNQAkByBeBUIBMhGQAvBIA6AaQAOgHANgIQBrg8A6hUIBOBvQBdg6AxhZQAGBDA3ASIA9hpQgGCHBfAyICqiyIB7B6QByhRAYhsIAxBFIAph1QBWAqAgBlQA+hfAjhqQAwiTgDirQAFgXAEgVQAJhEgSg5IhoAxAhAGzIAmgl");
	this.shape_3.setTransform(152.1164,53.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#323232").s().p("ACMDJQgtgGgHglQgTgcATgiIAyhTICTBrIArAAQgSA1hbAcgAJSBIIhHhfIC5ixIAuCFIBihRIBLB1QAKAtgpAaQhAA+iKASQhBgBgjgvgAuTh6QgNgNAAgTQAAgSANgOQAOgNASAAQATAAANANQANAOAAASQAAATgNANQgNANgTAAQgSAAgOgNg");
	this.shape_4.setTransform(124.032,58.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#662700").s().p("AgPGAQgMgXAMgvQgGglAyg3IBEggQBEgLA4A4QAaAigaAiQg6BUhsA8gAnaFRIA0hIQBYgUApARQgxBxiEA8QgWgpAWg5gAM+BhIAPhZIBWhnIAzgEIBsBwQAUA/gUABIhgA9IhWAAIgVACQgzAAgGgrgATqhPIATh+IBHhMIBdAAQgDAWgGAWQADCsgwCSgA2flxQBLADAkBDQAmBdgmBAQgoA/gpASQgliRAHijgANVjTQhdgPgshLIA1gxIA8AAIEjgzIgEALQgVCAh+AzQgYAMgdAAQgdAAgigMgAxdk+Qheg1gahLIDnAUIBTAtIAZgjIAJArQggAxg+AGg");
	this.shape_5.setTransform(153.3693,60.325);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8A00B").s().p("AhAGyIAmgkIgmAkIhMBHQhehUgkhzIgKAbQgqgShXAVIg1BHQgVA6AWAoIgVAJQhghHgihiQgLBBhOAZQgtgdAEg+IhnBDQhRg7hSh9IgdAjIgpghIhKBFQhVhagKiEIhXBpQgohTgXhZQApgSApg+QAmhAgmhdQgkhDhMgDIAEg8IhNgxIgUgsQANhDBEgOQAUBBgxAYQBdA6CIAIIAPABQAZBMBeA1ICHAAQA9gGAggxIgJgrIA8hYIKsHuIgyBSQgTAiATAdQAHAkAtAHIBPAAQBagcASg1IDDiQIBHBgQAjAvBBABQCKgTBAg9QApgbgKgtIhLh0ICdiDQAsBMBeAPQBEAYAwgYQB+gzAUiAIAEgMIBEgLQB5gVBbg3IAtheIAlAWQBJBqh6AyQASA4gJBEIhdAAIhIBMIgSB9ICBChQgjBqg+BeQgghkhWgpIgpBzIgxhEQgYBshyBRIh7h6IiqCyQhfgzAGiHIg9BpQg3gRgGhCQgxBXhdA7IhOhvQAbgigbgjQg4g3hEALIhDAgQgyA3AFAlQgMAvAMAXIBHA/IgbAOQg6gZgvhJgAOwgYIhWBnIgPBZQAGAzBIgKIBVAAIBhg9QAUgCgUg/IhthvgAxUDRICJgMgAvPCoIingZgAuaALIjfgKgAysiKQgNANAAATQAAASANAOQAOANASAAQATAAANgNQANgOAAgSQAAgTgNgNQgNgNgTAAQgSAAgOANgAU9keIBogwg");
	this.shape_6.setTransform(152.1164,53.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,306.3,108.5);


(lib.handWaiting = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ACfhDIj1ieIieiZQglguAlgsQCBiDCygfIgQCeQhGAshRAMIFwDoIgbCGgABSDJIiKgcQhCgZg3hOQgkgmAcgxQAagwBLAAQCWAIAxCKQgMgoAMgYIAshUAg4CtQhsgKgrBRQgnBKA+BSQA3AtApgLIAdgJQhrBCBFBoQAsA9BygqQC3hvADgoQgXiBAXiRQhhgYgjhTQAAgBAAAAAg7GpICWhF");
	this.shape.setTransform(26.35,63.1151);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC08F").s().p("AhhJTQhFhoBshCIgeAJQgpALg3gtQg+hSAnhKQAshRBrAKQhCgZg3hOQgkgmAdgxQAagwBKAAQCXAIAwCKIAAABQAkBTBgAYQgXCRAXCBQgCAoi4BvQguARgiAAQg0AAgagkgAg6GpICVhFgABSDJIiKgcgACfhDIj0ieIifiZQglguAlgsQCCiDCxgfIgQCeQhFAshSAMIFwDoIgbCGg");
	this.shape_1.setTransform(26.35,63.1151);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,54.7,128.3);


(lib.handFist = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AKljTQA0A5gTAuIhKB/QgXAgg7AWIhPAAIhUAAQgzAnAUA7QAFA8BZASQBQAIAigTQBHgcAfhHQAbg/g9g5AKljTQBMgrgphQQgHghgpgMQiNgUhGBDQgMBIAYA/QAEAtAQAGIAdAYIAAA4IhWA8IhcgRIgugIIg3g3IAAhhAHFlMIAAgvIhbgyIh3AlQhpApgqBiQgCAQAEAtQgIBTA3AcItnGPIAcBwINYlrQABB/CXgXIAZAAIAZAAAGsgGIAAAuIAvAhAFQgXIgBDCAHliSQB2AlBKhm");
	this.shape.setTransform(72.6548,42.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC08F").s().p("ArWE+INnmOQg3gcAIhUQgEgtACgPQAqhjBpgpIB3glIBbAyIAAAwQBGhDCNATQApAMAHAiQApBPhMArQA0A5gTAuIhKB/QA9A6gbA+QgfBHhHAcQgiAThQgIQhZgSgFg8QgUg7AzgnIBUAAIgvghIAAguIhcgRIgugIIg3g3IAAhhIAABhIA3A3IAuAIIgBDCIgZAAQiXAXgBh/ItYFqgAIqBJQA7gVAXghQgXAhg7AVIhPAAgAIChCIhWA8IBWg8IAAg4IgdgYIABAAQAfAKAcAAIAAAAIAAAAQBNAAA2hJIABgCIgBACQg2BJhNAAIAAAAIAAAAQgcAAgfgKIgBAAIAdAYgAHRjFQAEAtAQAGQgQgGgEgtQgQgpAAgtQAAgYAEgYQgEAYAAAYQAAAtAQApg");
	this.shape_1.setTransform(72.6548,42.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,147.3,87.9);


(lib.handCasual = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AFTG9QAyBJA3AAQAhAEAXgEQAtglgDg0IgNhXQgohthvg7ICqAkQB1gZiRh6QhNghhJAQQhUikjqgJQhGiBiah4QirinkBg/IAVB3ID8CNIDvEKIhaBuIAgCVQh1AHgyBGQgeAwAeAnIAwBAQARAXCBghQBOg3AqhwQBSgNAiA9QgNCKAUBKQAZBiBbATIAhAAQBQg3gOhrgAEEDWQBUB4gFBv");
	this.shape.setTransform(60.0548,60.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC08F").s().p("ADwJfQhbgTgZhiQgUhKANiKQgig9hSANQgqBwhOA3QiBAhgRgXIgwhAQgegnAegwQAyhGB1gHIggiVIBahuIjvkKIj8iNIgVh3QEBA/CrCnQCaB4BGCBQDqAJBUCkQBJgQBNAhQCRB6h1AZIiqgkQBvA7AoBtIANBXQADA0gtAlQgXAEghgEQg3AAgyhJIABgLQAAhqhQhyQBQByAABqIgBALQAOBrhQA3g");
	this.shape_1.setTransform(60.0548,60.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,122.1,123.5);


(lib.leftFoot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AADh8QADACAEACQABABABABQACABACABIADACQABABACACQAeAXgBAgIAAAlQBCADAngcIAAhDIADgIAhyg/IgpAPQgMBXAdAkIArAy");
	this.shape.setTransform(24.014,63.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AlPCHQAJgEAJgEQBrgyAxA3QAIAIAGAKQC0h8FUB8IAAnJIBXhHIAAH/QAHBCA5ALQBEA9g5A9QjHAbjAgwIAAhHQhJBxhkALIgwAAQg0gSgTgqQggA0g9AXIheAAAlPCHIhAA1IgkAAIhJAAQgNADgVAbQgbBWANAaQAnApAVAEIBQACIBRACQiGhlCGiPg");
	this.shape_1.setTransform(56.1034,37.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1B286").s().p("AlPF7QhDgyAAg9QAAg9BDhIIASgIQBrgyAxA3QAIAIAGAKQC0h8FUB8IAAnJIBXhHIAAH/QAHBCA5ALQBEA9g5A9QjHAbjAgwIAAhHQhJBxhkALIgwAAQg0gSgTgqQggA0g9AXgAkADoQA4AAAjgYIABAAIAAgBIAAhDIADgIIgDAIIAABDIAAABIgBAAQgjAYg4AAIAAAAIAAAAIgLAAIgCAAIAAglIAAgBQABgfgegXIgDgDIgDgCIgEgCIgCgCIgHgEIAHAEIACACIAEACIADACIADADQAeAXgBAfIAAABIAAAlIACAAIALAAIAAAAIAAAAgAmgF5IgrgyQgUgZAAgzQAAgWADgaIApgPIgpAPQgDAaAAAWQAAAzAUAZIArAyIhQgCQgVgEgngpQgNgaAbhWQAVgbANgDIBJAAIAkAAIBAg1QhDBIAAA9QAAA9BDAygAlPCHIAAAAg");
	this.shape_2.setTransform(56.1034,37.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,115.2,78.9);


(lib.small = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhGAnIAxAfQBiAGgHhZIgqg4g");
	this.shape.setTransform(7.0513,7.0408);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVBGIgxgfIBihsIAqA4QAHBThXAAIgLAAg");
	this.shape_1.setTransform(7.0513,7.0408);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,16.1,16.1);


(lib.large = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhlBLIgkivQCggrBzBJIgwC7g");
	this.shape.setTransform(13.8,11.6897);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhlBLIgkivQCfgrB0BJIgwC7g");
	this.shape_1.setTransform(13.8,11.6897);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,29.6,25.4);


(lib.nose = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.1,1,1).p("AAtgtQAAAogWAbQgWAcgeAAQggAAgWgcQgWgbAAgoQAAgoARgnQARgnBAgWQA/gVgFA8QgGA9AAAogABqCHQAAAXgLARQgKAQgOAAQgPAAgKgQQgKgRAAgXQAAgYAKgQQAKgRAPAAQAOAAAKARQALAQAAAYg");
	this.shape.setTransform(19.825,63.1181);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AlVlXIilB0QjgFVDgENQHKGkIpmkQDkkVjklCIiHhhIAPBGAlVlXIgNBhAFyk5QlPoel4IA");
	this.shape_1.setTransform(61.8875,59.2643);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBD8BC").s().p("AAuCvQgKgRAAgXQAAgYAKgQQAKgRAPAAQAOAAAKARQALAQAAAYQAAAXgLARQgKAQgOAAQgPAAgKgQgAhTAWQgWgbAAgoQAAgoARgnQARgnBAgWQA/gVgFA8QgGA9AAAoQAAAogWAbQgWAcgeAAQggAAgWgcg");
	this.shape_2.setTransform(19.825,63.1181);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4BE92").s().p("An6F/QjgkNDglVIClh0IgNBhIANhhQF4oAFPIeIAPBGIgPhGICHBhQDkFCjkEVQkVDSj8AAQj9AAjljSgAl2CFQgKARAAAXQAAAYAKAQQALARAOAAQAPAAAKgRQAKgQAAgYQAAgXgKgRQgKgQgPAAQgOAAgLAQgAmsiSQhAAVgQAnQgRAnAAAoQAAAnAWAcQAWAcAfAAQAgAAAWgcQAWgcAAgnQAAgoAFg8QAEgtgiAAQgMAAgRAGg");
	this.shape_3.setTransform(61.8875,59.2643);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,125.8,120.6);


(lib.hair = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AG1koIhIAnIjFClIjIE2AiLEpIAAlzIBIi3AjPEUIhLkzIiaia");
	this.shape.setTransform(43.65,29.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,89.3,61.4);


(lib.side = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABpDBIAAiZQjBhWigh8IAAFTIAVAmIAWAnIE2g1IEIg1QANgTgNgUQiMgEh8g5Aj4iqIh/hLIAAAdQAgDSA1BwIA/Bl");
	this.shape.setTransform(37.5625,24.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjjDPIgVgmIAAlTQCgB8DBBWIAACZIk2A1gAkiBqQg1hwggjSIAAgdIB/BLIAAFTIAVAmgABpDBIAAiZQB8A5CMAEQANAUgNATIkIA1gABpAoIAAAAg");
	this.shape_1.setTransform(37.5625,24.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,77.1,51.3);


(lib.mouthOpenTongu = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABoBeQAlgeA2gYQAwgUA+gPQB2gMBoBBICABwIh1lIQicBhjdgQQhlgHhygfQj7hshmjZIkjitQguCsAuDEQAoDlBzB2ICeCPIAAhDICRhUQC6goCeAoIC4BJAiiDIIA3BcAmBD1QCZAzB9gEAKPCqQCCCRh7CIQi5DElCgoQhxgMhJg0QhmhgAaib");
	this.shape.setTransform(72.2149,61.4063);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("AgQg6IAhB1");
	this.shape_1.setTransform(90.025,59.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7B4D5").s().p("AAWBtQgJgJAAgPQAAgPAGgUQAGgVARANQARAMAJAJQAJAKAAANQAAAOgJAJQgJAJgOAAQgNAAgKgJgAg2AGQgOgNAAgVQAAgUgHgnQgIgmAjAKQAjAKAVAVQAVAUAAAdQAAAcgPANQgOAOgTAAQgVAAgOgOg");
	this.shape_2.setTransform(129.0088,84.3875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F493BE").s().p("AgMErQhxgMhKg1QhmhgAaiaIg3hbIA3BbQh9AFiZg0IAAhDICRhTQC6gpCfApIC3BIIi3hIQAlgfA1gXQAwgVA+gPQB2gMBoBCICABwQCCCPh7CIQiZCkj6AAQgyAAg1gHgAGjgcQgGAUAAAOQAAAPAJAJQAKAJANAAQAOAAAJgJQAJgJAAgOQAAgMgJgKQgJgJgRgMQgGgFgFAAQgIAAgEANgAFEimQAHAnAAAUQAAAVAOAOQAOAOAVAAQAUAAAOgOQAPgOAAgcQAAgdgVgUQgWgVgjgKQgHgCgGAAQgUAAAGAeg");
	this.shape_3.setTransform(89.0024,92.2567);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#923561").s().p("AkYEfQhyh3gojkQgvjEAvitIEiCtQBmDZD7BrQByAgBlAHIAjB2Qg3AYgkAeQiggpi6ApIiQBTIAABDg");
	this.shape_4.setTransform(45.8875,42.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B8517C").s().p("AB3A0QhohBh1ANQg+AOgwAUIgih1QDdAQCbhhIB1FJg");
	this.shape_5.setTransform(113.025,62);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,146.4,124.8);


(lib.mouthOpen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAYiSQBIgNBKgKQhHBqA3BJQgUABgJATQAEAbAXAfQgogogygTAg9BzIAYAVIBsAdQA3ALA/gLQAsgHAtgdIAAgcQgRgzgsgoIg/AAAAYiSIAiBJIAEBmQgGgCgFgCQg5gSg3BsAAYiSQhvAThrAZQgqAKgpALQAgA6AzAvQA3A0BOAn");
	this.shape.setTransform(27.775,17.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#923561").s().p("AhWAoQgzgvggg6IBTgVQBqgZBwgTIAiBJIAEBmIgMgEQg5gSg3BsQhNgng3g0g");
	this.shape_1.setTransform(17,15.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B24C7B").s().p("AgiBGIgEhmIgihJQBIgNBJgKQhHBqA3BJQgUABgKATQAFAbAXAfQgogogxgTg");
	this.shape_2.setTransform(37.5,12.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F296BD").s().p("AgkBKIhtgcIgYgVQA3hrA6ASIALAEQAxATAoAoQgXgfgEgbQAJgTAUgBIA/AAQAsAoARAxIAAAcQgtAegsAGQgfAGgeAAQgdAAgbgGg");
	this.shape_3.setTransform(38.575,26.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,57.6,36.1);


(lib.happy_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AJVE3IEbjIIC7kiAuxk2IAnDkICzEZAwqjGIB5hwIBGAA");
	this.shape.setTransform(106.7,31.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,216.4,65.2);


(lib.angry = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AggiWQADBfAjBUQgWBcAxAd");
	this.shape.setTransform(3.275,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AJjiLIGuB4AwQCMQCNinD3g4");
	this.shape_1.setTransform(107.95,13.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1,214.5,42.6);


(lib.Pupil = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCAKIgFgDQgDgDAAgEQAAgDADgEQADgBADgBIABgBQAEAAAEADQADAEAAADQAAAEgDADQgEADgEAAIgCAAg");
	this.shape.setTransform(7.7,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#25160F").s().p("AglAmQgQgQgBgWQABgWAQgPQAPgQAWgBQAIAAAIACQANAFAJAKQARAPgBAWIAAABQABAWgRAPQgJALgNAEQgIABgIAAQgWABgPgRgAAUgLQgDAAgCACQgEADAAAFQAAADAEADIAEADIAEAAQAEAAADgDQAEgDAAgDQAAgFgEgDQgDgDgEAAIgDABg");
	this.shape_1.setTransform(5.45,5.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10.9,10.9);


(lib.eyes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AAWBqQBygFBIA3QBLAwAfA1IB/hTQCpiwipiyQinh1imB1Qg5AmgWBNQAnBjguBIgAAdhBQhhjjjkAQQjPAggWChIAACOQAtB8BUAwICAAvIB8h6QA6g4BsAG");
	this.shape.setTransform(52.5625,27.8223);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmMDnQhUgwgth8IAAiOQAWihDPggQDkgQBhDjQASAuAAAnQAAAvgZAnQhsgGg6A4Ih8B6gADQCcQhIg3hyAFQAZgnAAgvQAAgngSguQAWhNA5gmQCmh1CnB1QCpCyipCwIh/BTQgfg1hLgwgAAWBqIAAAAg");
	this.shape_1.setTransform(52.5625,27.8223);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AoGBPIHHidAA4APIHPAo");
	this.shape_2.setTransform(51.85,14.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AAWBqQBygFBIA3QBLAwAfA1IB/hTQB3h9gxh8QgUg0gyg1Qinh1imB1QglAZgWAoQgMAXgIAbQgmhbg9g0QhZhOiJAKQjPAggWChIAAAgIAABuQAtB8BUAwICAAvIB8h6QA6g4BsAGgAAdhBQAnBjguBI");
	this.shape_3.setTransform(52.5613,27.8224);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B39583").s().p("AoGBRQAWifDPghQCJgKBaBOInICcgAA4AyQAWgpAlgXQCnh1CmB1QAyAzAUA0g");
	this.shape_4.setTransform(51.85,11.2974);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmMDEQhUgvgth9IAAhuIHHidQA9A0AmBbQAIgbAMgWIHOAnQAxB9h3B8Ih/BTQgfg1hLgwQhIg2hyAEQAZgmAAguQAAgogSgvQASAvAAAoQAAAugZAmQhsgGg6A4Ih8B7gAAWBHIAAAAg");
	this.shape_5.setTransform(52.5613,31.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("AAWBqQBygFBIA3QBLAwAfA1IB/hTQB3h9gxh8QgUg0gyg1Qinh1imB1QglAZgWAoQgMAXgIAbQgmhbg9g0QhZhOiJAKQjPAggWChIAACOQAtB8BUAwICAAvIB8h6QA6g4BsAGgAAdhBQAnBjguBI");
	this.shape_6.setTransform(52.5613,27.8224);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B39583").s().p("AmMDnQhUgwgth8IAAiOQAWihDPggQCJgKBZBOQA9A0AmBbQASAuAAAnQAAAvgZAnQhsgGg6A4Ih8B6gADQCcQhIg3hyAFQAZgnAAgvQAAgngSguQAIgbAMgXQAWgoAlgZQCmh1CnB1QAyA1AUA0QAxB8h3B9Ih/BTQgfg1hLgwgAAdhBIAAAAg");
	this.shape_7.setTransform(52.5613,27.8224);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AmMDnQhUgwgth8IAAiOQAWihDPggQCJgKBZBOQA9A0AmBbQASAuAAAnQAAAvgZAnQhsgGg6A4Ih8B6gADQCcQhIg3hyAFQAZgnAAgvQAAgngSguQAIgbAMgXQAWgoAlgZQCmh1CnB1QAyA1AUA0QAxB8h3B9Ih/BTQgfg1hLgwgAAdhBIAAAAg");
	this.shape_8.setTransform(52.5613,27.8224);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},14).to({state:[{t:this.shape_7},{t:this.shape_6}]},4).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},3).to({state:[{t:this.shape_8},{t:this.shape_6}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,107.1,57.7);


(lib.eyebrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AhPhuIgwCSQCagFBlBQIAAhfQg4hiiXgcg");
	this.shape.setTransform(12.825,11.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#672B06").s().p("Ah/AkIAwiSQCXAcA4BiIAABfQhlhQiaAFg");
	this.shape_1.setTransform(12.825,11.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,27.7,24.1);


(lib.beard = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Az+pCQgjgjh5A4IAVhTQCOksEyhqIjkgcQDYi2FHA3IhBh3QBegMBRA0QBmDQAiDmIiNCwQg+CAAYCZQAiBrBFBPQBPBsBcAoQBnAvBqAbQCBAdB5gdQB6gTBWgmQBigpA+hHQBFg+AjhPQAohUAPhTQAChDgVg/QgChuhZhYIiBhvQB9jPA2jtICIgWQhiBAADA4QHxACCHDPQAsBCAZA+IiwAAIgfggASfuGQDeDcBxELQBsDcAKDaQhhgfg9hNIhWgYAXGhVIAABbQBIEkiFEFQhHBjhVBWIhChzQgrBEgxBEQg4BNhPA+IhEAZQgggSgKgcQABhDAcg7QhGCLh2BrQheBxh9BFIgwiOIgjhRAz+pCIB/hgA1pCaQiRArhpBpQAHj6B/kIQBXjHCIinAyYJDIguBDQhThrg+iXIgSjqIBCgSAyYJDIA8hRAsyL3IAmhFAyYJDQBbDUC7BlIBQiFAN6LvQgCADgBADAGwQTQhBBhhnBBQhZBlieA2QnAkfmDk6ASrJ1IAZg7");
	this.shape.setTransform(163.6,136);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#672B06").s().p("AsyL3IAnhFIgnBFIhQCFQi7hlhajUIA7hRIg7BRIgvBCQhThqg+iWIgSjrIBCgSIhCASQiRArhpBpQAHj6B/kIQBXjGCIioIB/hfIh/BfQgjgih5A4IAVhUQCPksExhqIjkgcQDYi1FHA2IhBh3QBegMBRA0QBmDQAiDmIiNCwQg+CBAYCYQAiBrBFBPQBPBsBcAoQBnAvBqAbQCBAdB5gdQB5gTBXgmQBigpA+hHQBEg+AkhPQAohUAPhTQABhDgUg+QgChvhahXIiAhwQB9jOA2juICIgWQhiBBACA4QHyABCIDPQArBCAZA+IiwAAIggggIAgAgQDeDdBxEKQBsDcAKDaQhiggg8hMIhWgYIBWAYIAABbQBIEjiFEGQhHBjhVBWIhDh0IAag6IgaA6QgrBFgwBEQg4BMhPA/IhEAaQghgTgJgcQABhDAcg7IACgGIgCAGQhGCLh2BrQhfBwh8BFIgwiNIgkhSIAkBSQhBBhhnBAQhZBmifA2Qm/kgmDk5g");
	this.shape_1.setTransform(163.6,136);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,329.2,274);


(lib.outsideCave = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("ALik7IF3JiIAHALARgEzQAAAGAGADAxMiXQgGABgGACIgDABIgJAC");
	this.shape.setTransform(235.45,131.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(7,1,1).p("EAsqgG+IGoDqIB7CSAOI7jIClF/IGEFHIBeDdEAk8gSBQgnGdgqERIAADaQgSEzh2AuEAk8gSBIFCJdICsBmQDDEOhBDyAiN/UIGfCXIHsAAICKBaICIBaQCaDSDrgMQHyBDG1D/AiN/UIEuE4IDGHGIH2QkIDQFvQBmDwA/DqQAwCzAZCvQAWCbAFCYQATBlAXBdQBFEcBhDLADQqVQiOCFAEAkIAAABADQqVIAAEJQBKCmAogPAFnzWQgqGMhtC1AkRZIICEESIDZBxIHFAAQAnBbBLAhIGgirIAAmNIm9iXIigh7ImzAAgAcrXpIFwEJAcrXpQDzgqB9AqAU2UsQDxDCEEgFABMniQBLD5hLEFEghiAL1IFLovIB7igIAAiNIJBpwIBCgYIBCgXIBsieIE+AAID2i3A/nVJIAAn8IFqpRIB5lfID/jaIDsmyEgh+gOxIJwleQJ0l1GTnCIF6ByAtrukIDWk8AtrukIh/ibIiEh7Egh+gOxIqfDtIjaElEg1MASCIIluCIAAh2IDZjMIElmgICqnOIABAAIAAgBEgkpAK8IjGg5EgkpAK8IhxiXEghiAL1IjHg5A/nVJIk4kJIiqihQjmgqixCbIAAEJIAAAAIC9DHIJwAAgEghiAL1IB7JUIFLAAICeB6IMnCYIDQCSIC9AAAvXsGIFfLhIhfaAAoHbtIDQCT");
	this.shape_1.setTransform(340.45,211.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AokHIIFLotIB8ihIAAiOIJApvIBBgYIjsGyIj+DaIh5FfIlpJRIAAH7g");
	this.shape_2.setTransform(180.6,241.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AYIYUInGAAIjahyIiEkSIEllLIGzAAIChB7IG8CXIAAGNImgCrQhLghgmhagAHuU1IjQiSIBf6AIlerhIBridIE+AAID2i3IABAAIF2JjIAHAMIAAAAQgDglCNiFIAAEJIABACIABADIAEAHIAAAAIABADIABABQA8CDAkAFIADAAIAAAAIAHgBIAAAAIAAAAIgHABIAAAAIgDAAQgkgFg8iDIgBgBIgBgDIAAAAIgEgHIgBgDIgBgCIAAkJQBti0ArmNIH1QkIDQFwQBmDwA/DpQAwCzAZCvQAWCbAFCYQATBlAXBdIk9AhIm8iXIihh7ImzAAIklFLIg5ClgARCmaQAliDAAiAQAAiAglh8QAlB8AACAQAACAglCDgARCuZQgFgEgBgGQABAGAFAEgEAgZARXgA6sQoIi9jGIgBgBIAAkJIACgBIACgCIABgBIABgBQCJh1CpAAIAAAAIAAAAQArAAAsAHIACABIAAAAIABAAIACAAIADABICqChIE4EJIhLCXgAvxORgA0pKIIiqihIgDgBIgCAAIgBAAIAAAAIgCgBQgsgHgrAAIAAAAIAAAAQipAAiJB1IgBABIgBABIgCACIgCABIAAEJIABABInsiYIIkuBIAAh2IDajMIElmgICqnOIAJgDIADgBIANgDIP3kDICEB7IB+CbIhrCdIhCAYIhCAXIpBJwIAACOIh7ChIlLItIB7JUgA0yEEIDGA5IjGg5IhyiXgA0yEEIjHg5gACK1bg");
	this.shape_3.setTransform(239.0125,255.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993300").s().p("APKMhIAIAMIAAAAgAPKMhIl2pjIAAAAIj2C3Ik/AAIDXk8IjXE8Ih9ibIiEh7Iv4EDIgMADIgDABIgJACIAAAAIJwleQJ0l1GSnBIF6BxIEuE4IDHHFQgqGNhtC0QiOCFAEAlgAPKMhg");
	this.shape_4.setTransform(249.6625,81.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#993333").s().p("AmIiSQgWhcgUhmQDxDCEDgFIFxEIIqVDkQhhjMhFkbg");
	this.shape_5.setTransform(517.3,378.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990033").s().p("ADLZaQD0gpB9ApQh9gpj0ApQkDAFjxjBQgEiZgWiaQgaiwgwizQg/jphmjwIjQlwIn1wkIjHnFIkuk5IGgCYIHsAAICJBaICJBaQCaDRDqgLQHyBDG1D/QgnGcgqESIAADZQgSE0h3AtQB3gtASk0IAAjZQAqkSAnmcIFBJdICtBlQCSDLAAC6QAAA/gQA8QAQg8AAg/QAAi6iSjLIGnDqIB7CSIyxc0gAoyzzIGEFIIBfDdIhfjdImElIIill+g");
	this.shape_6.setTransform(503.575,200.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjNQaIieh7IlLAAIAAn7IFqpRIB5lfID9jaIDtmyIBCgYIFeLiIhfZ/g");
	this.shape_7.setTransform(207.575,254.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,-3.5,687.9,430.7);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-961,-541,1922,1082);


(lib.Scene_1_spider = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// spider
	this.instance = new lib.spider("synched",0);
	this.instance.setTransform(108.25,1016.8,0.9994,0.9994,0,0,0,110.3,64.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(101).to({_off:false},0).to({x:524.65,y:1016.7,startPosition:3},24).wait(1).to({regX:110.4,x:498.55,y:984.25,startPosition:4},0).wait(1).to({scaleX:0.9993,scaleY:0.9993,rotation:-14.9978,x:458.25,y:943.35,startPosition:5},0).wait(1).to({regX:110.5,scaleX:0.9992,scaleY:0.9992,rotation:-29.9954,x:393.9,y:894.75,startPosition:6},0).wait(1).to({scaleX:0.9991,scaleY:0.9991,rotation:-44.9932,x:324.95,y:857,startPosition:7},0).wait(1).to({regY:64.7,scaleX:0.9989,scaleY:0.9989,rotation:-59.9918,x:260.75,y:821.35,startPosition:8},0).wait(1).to({rotation:-74.9898,x:188.4,y:793.3,startPosition:9},0).wait(1).to({regY:64.8,scaleX:0.9988,scaleY:0.9988,rotation:-89.9886,x:124.05,y:799.7,startPosition:10},0).wait(1).to({scaleX:0.9987,scaleY:0.9987,rotation:-104.9871,x:73.15,y:807.6,startPosition:11},0).wait(1).to({regX:110.4,scaleX:0.9986,scaleY:0.9986,rotation:-119.9849,x:-7.1,y:807.45,startPosition:12},0).wait(1).to({regX:110.5,regY:64.7,scaleX:0.9984,scaleY:0.9984,rotation:-134.9833,x:-79.45,y:837.35,startPosition:13},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_pupil = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pupil
	this.instance = new lib.Pupil("synched",0);
	this.instance.setTransform(628.8,504.35,2.3394,2.4128,0,0,0,5.5,5.6);

	this.instance_1 = new lib.Pupil("synched",0);
	this.instance_1.setTransform(550.6,471.35,2.3394,2.4128,0,0,0,5.5,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{x:550.6,regX:5.5,regY:5.6,scaleX:2.3394,scaleY:2.4128,y:471.35,rotation:0}},{t:this.instance,p:{x:628.8,regX:5.5,regY:5.6,scaleX:2.3394,scaleY:2.4128,y:504.35,rotation:0}}]},24).to({state:[{t:this.instance_1,p:{x:543.75,regX:5.5,regY:5.6,scaleX:2.3394,scaleY:2.4128,y:471.35,rotation:0}},{t:this.instance,p:{x:621.95,regX:5.5,regY:5.6,scaleX:2.3394,scaleY:2.4128,y:504.35,rotation:0}}]},18).to({state:[{t:this.instance_1,p:{x:533.65,regX:5.5,regY:5.6,scaleX:2.3394,scaleY:2.4128,y:471.35,rotation:0}},{t:this.instance,p:{x:611.85,regX:5.5,regY:5.6,scaleX:2.3394,scaleY:2.4128,y:504.35,rotation:0}}]},1).to({state:[]},43).to({state:[{t:this.instance_1,p:{x:538.2,regX:5.6,regY:5.7,scaleX:2.3392,scaleY:2.4126,y:466.9,rotation:0}},{t:this.instance,p:{x:616.4,regX:5.6,regY:5.7,scaleX:2.3392,scaleY:2.4126,y:499.9,rotation:0}}]},3).to({state:[{t:this.instance_1,p:{x:525.35,regX:5.5,regY:5.7,scaleX:2.3393,scaleY:2.4127,y:464.45,rotation:0}},{t:this.instance,p:{x:603.55,regX:5.5,regY:5.7,scaleX:2.3393,scaleY:2.4127,y:497.45,rotation:0}}]},1).to({state:[{t:this.instance_1,p:{x:761.05,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:287.05,rotation:0}},{t:this.instance,p:{x:858.2,regX:5.6,regY:5.7,scaleX:2.3391,scaleY:2.4125,y:287,rotation:0}}]},11).to({state:[]},19).to({state:[{t:this.instance_1,p:{x:788.55,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:281.7,rotation:0}},{t:this.instance,p:{x:842.25,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:281.65,rotation:0}}]},2).to({state:[]},22).to({state:[{t:this.instance_1,p:{x:792.35,regX:5.7,regY:5.8,scaleX:2.339,scaleY:2.4124,y:254.45,rotation:0}},{t:this.instance,p:{x:846.05,regX:5.6,regY:5.8,scaleX:2.339,scaleY:2.4124,y:254.4,rotation:0}}]},3).to({state:[{t:this.instance_1,p:{x:745.4,regX:5.7,regY:5.8,scaleX:2.339,scaleY:2.4124,y:214.65,rotation:0}},{t:this.instance,p:{x:864.75,regX:5.6,regY:5.8,scaleX:2.339,scaleY:2.4124,y:226.05,rotation:0}}]},3).to({state:[{t:this.instance_1,p:{x:781.95,regX:5.7,regY:5.8,scaleX:2.3389,scaleY:2.4123,y:264.95,rotation:0}},{t:this.instance,p:{x:846.05,regX:5.6,regY:5.8,scaleX:2.339,scaleY:2.4124,y:264.95,rotation:0}}]},11).to({state:[]},4).to({state:[{t:this.instance_1,p:{x:766.5,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:272.7,rotation:0}},{t:this.instance,p:{x:858.35,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:272.7,rotation:0}}]},3).to({state:[{t:this.instance_1,p:{x:766.5,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:272.7,rotation:0}},{t:this.instance,p:{x:866,regX:5.5,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:265.35,rotation:0}}]},4).to({state:[]},18).to({state:[{t:this.instance_1,p:{x:766.5,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:272.7,rotation:0}},{t:this.instance,p:{x:865.85,regX:5.9,regY:5.5,scaleX:2.3391,scaleY:2.4124,y:277.35,rotation:0}}]},3).to({state:[]},22).to({state:[{t:this.instance_1,p:{x:771,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:276.9,rotation:0}},{t:this.instance,p:{x:862.85,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:276.9,rotation:0}}]},3).to({state:[{t:this.instance_1,p:{x:766.5,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:272.7,rotation:0}},{t:this.instance,p:{x:858.35,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:272.7,rotation:0}}]},1).to({state:[]},21).to({state:[{t:this.instance_1,p:{x:779.2,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:281.85,rotation:0}},{t:this.instance,p:{x:871.05,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:281.85,rotation:0}}]},3).to({state:[{t:this.instance_1,p:{x:182.35,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:529.75,rotation:0}},{t:this.instance,p:{x:274.2,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:529.75,rotation:0}}]},5).to({state:[{t:this.instance_1,p:{x:219.55,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:529.75,rotation:0}},{t:this.instance,p:{x:311.4,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:529.75,rotation:0}}]},1).to({state:[{t:this.instance_1,p:{x:238.15,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:529.75,rotation:0}},{t:this.instance,p:{x:330,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:529.75,rotation:0}}]},1).to({state:[{t:this.instance_1,p:{x:253.65,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:529.75,rotation:0}},{t:this.instance,p:{x:345.5,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:529.75,rotation:0}}]},4).to({state:[]},12).to({state:[{t:this.instance_1,p:{x:252.8,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:531.55,rotation:0}},{t:this.instance,p:{x:344.65,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:531.55,rotation:0}}]},3).to({state:[{t:this.instance_1,p:{x:334.35,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:519.75,rotation:0}},{t:this.instance,p:{x:426.2,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:519.75,rotation:0}}]},3).to({state:[]},18).to({state:[{t:this.instance_1,p:{x:427.05,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:564.6,rotation:0}},{t:this.instance,p:{x:527.1,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:588.55,rotation:0}}]},2).to({state:[]},18).to({state:[{t:this.instance_1,p:{x:435.25,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:560.95,rotation:0}},{t:this.instance,p:{x:531.3,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:592.5,rotation:0}}]},3).to({state:[{t:this.instance_1,p:{x:435.25,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:549.75,rotation:0}},{t:this.instance,p:{x:531.3,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:581.3,rotation:0}}]},8).to({state:[{t:this.instance_1,p:{x:443.25,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:549.75,rotation:0}},{t:this.instance,p:{x:539.3,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:581.3,rotation:0}}]},8).to({state:[]},5).to({state:[{t:this.instance_1,p:{x:441.75,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:547.85,rotation:0}},{t:this.instance,p:{x:537.8,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:579.4,rotation:0}}]},3).to({state:[{t:this.instance_1,p:{x:492.15,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:547.85,rotation:0}},{t:this.instance,p:{x:588.2,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:579.4,rotation:0}}]},1).to({state:[{t:this.instance_1,p:{x:535.5,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:547.95,rotation:0}},{t:this.instance,p:{x:631.55,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:579.5,rotation:0}}]},3).to({state:[]},18).to({state:[{t:this.instance_1,p:{x:551.5,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:543.05,rotation:0}},{t:this.instance,p:{x:647.55,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:574.6,rotation:0}}]},3).to({state:[]},18).to({state:[{t:this.instance_1,p:{x:535.5,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:555.3,rotation:0}},{t:this.instance,p:{x:631.55,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:586.85,rotation:0}}]},3).to({state:[]},22).to({state:[{t:this.instance_1,p:{x:535.5,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:554.1,rotation:0}},{t:this.instance,p:{x:631.55,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:585.65,rotation:0}}]},3).to({state:[]},22).to({state:[{t:this.instance_1,p:{x:528.85,regX:5.7,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:536.55,rotation:0}},{t:this.instance,p:{x:624.9,regX:5.6,regY:5.8,scaleX:2.3391,scaleY:2.4124,y:568.1,rotation:0}}]},3).to({state:[{t:this.instance_1,p:{x:536.7,regX:7.2,regY:2.8,scaleX:2.339,scaleY:2.4124,y:553.95,rotation:59.9996}},{t:this.instance,p:{x:608.7,regX:5.6,regY:5.7,scaleX:2.339,scaleY:2.4124,y:567.95,rotation:135.0008}}]},13).to({state:[{t:this.instance_1,p:{x:537.45,regX:7.2,regY:2.8,scaleX:2.339,scaleY:2.4124,y:553.75,rotation:59.9996}},{t:this.instance,p:{x:609.45,regX:5.6,regY:5.7,scaleX:2.339,scaleY:2.4124,y:567.75,rotation:135.0008}}]},32).to({state:[]},1).to({state:[{t:this.instance_1,p:{x:542.45,regX:7.2,regY:2.8,scaleX:2.339,scaleY:2.4124,y:554.2,rotation:59.9996}},{t:this.instance,p:{x:614.45,regX:5.6,regY:5.7,scaleX:2.339,scaleY:2.4124,y:568.2,rotation:135.0008}}]},3).to({state:[{t:this.instance_1,p:{x:542.45,regX:7.2,regY:2.8,scaleX:2.339,scaleY:2.4124,y:554.2,rotation:59.9996}},{t:this.instance,p:{x:598.5,regX:5.6,regY:5.7,scaleX:2.339,scaleY:2.4124,y:568.2,rotation:135.0008}}]},14).to({state:[]},4).to({state:[{t:this.instance_1,p:{x:555.7,regX:7.2,regY:2.8,scaleX:2.339,scaleY:2.4124,y:554.2,rotation:59.9996}},{t:this.instance,p:{x:590.45,regX:5.6,regY:5.7,scaleX:2.339,scaleY:2.4124,y:565.75,rotation:135.0008}}]},3).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.rightFoot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.leftFoot("synched",0);
	this.instance.setTransform(52.2,37.9,0.9305,1,0,0,180,56.1,37.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.4,107.4,78.7);


(lib.Scene_1_MAIN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MAIN
	this.start = new lib.start();
	this.start.name = "start";
	this.start.setTransform(198.1,84.15);
	new cjs.ButtonHelper(this.start, 0, 1, 2, false, new lib.start(), 3);

	this.instance = new lib.tree("synched",0);
	this.instance.setTransform(1690.55,660.8,1.3619,1.3335,0,0,0,338.8,404.4);

	this.instance_1 = new lib.flower("synched",0);
	this.instance_1.setTransform(-328.25,1032.35,0.6479,0.6009,0,0,0,-634.1,97.8);

	this.instance_2 = new lib.flower("synched",0);
	this.instance_2.setTransform(-280.5,906.7,0.6479,0.6009,0,0,0,-634.1,97.8);

	this.instance_3 = new lib.flower("synched",0);
	this.instance_3.setTransform(-349,947.25,0.6479,0.6009,0,0,0,-634.1,97.8);

	this.instance_4 = new lib.flower("synched",0);
	this.instance_4.setTransform(-209.25,790.7,0.6479,0.6009,0,0,0,-634.1,97.8);

	this.instance_5 = new lib.flower("synched",0);
	this.instance_5.setTransform(651.1,927.75,0.6479,0.6009);

	this.instance_6 = new lib.flower("synched",0);
	this.instance_6.setTransform(466.25,819.9,0.6479,0.6009);

	this.instance_7 = new lib.flower("synched",0);
	this.instance_7.setTransform(551.3,973.6,0.6479,0.6009);

	this.instance_8 = new lib.flower("synched",0);
	this.instance_8.setTransform(450,750.85,0.6479,0.6009);

	this.instance_9 = new lib.flower("synched",0);
	this.instance_9.setTransform(651.1,1001.75,0.6479,0.6009);

	this.instance_10 = new lib.flower("synched",0);
	this.instance_10.setTransform(209.9,671.05,0.6479,0.6009);

	this.instance_11 = new lib.flower("synched",0);
	this.instance_11.setTransform(378.85,813.6,0.6479,0.6009);

	this.instance_12 = new lib.flower("synched",0);
	this.instance_12.setTransform(161.1,701.6,0.6479,0.6009,0,0,0,28.3,32.6);

	this.instance_13 = new lib.bushInside3("synched",0);
	this.instance_13.setTransform(225.8,920.4,1,1,0,0,0,95.5,33.2);

	this.instance_14 = new lib.bushInside2("synched",0);
	this.instance_14.setTransform(423.55,1009.3,1,1,0,0,0,116,55.7);

	this.instance_15 = new lib.bushInside1("synched",0);
	this.instance_15.setTransform(120.7,798.95,1,1,0,0,0,58.9,40.9);

	this.instance_16 = new lib.bushLine("synched",0);
	this.instance_16.setTransform(277.05,921.25,1,1,0,0,0,625.1,344.9);

	this.instance_17 = new lib.outsideCave("synched",0);
	this.instance_17.setTransform(1326.35,764.65,1.6417,2.0558,0,0,0,340.4,211.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AAAZqMAAAgzS");
	this.shape.setTransform(2.1,195.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#613B16").s().p("EiVzAYPMAAAgwdMErnAAAMAAAAwdg");
	this.shape_1.setTransform(960.9,954.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF99").s().p("EiVzBecMAAAhEzMAAAgzSMAAAhEyMErnAAAMAAAC83g");
	this.shape_2.setTransform(960.9,195.35);

	this.instance_18 = new lib.cloudType2("synched",0);
	this.instance_18.setTransform(318.1,160.65,0.6831,0.6969,0,0,0,401.2,161.3);

	this.instance_19 = new lib.cloudType2("synched",0);
	this.instance_19.setTransform(1496.8,141.1,0.7805,0.8181,0,0,0,401.2,161.3);

	this.instance_20 = new lib.cloudType1("synched",0);
	this.instance_20.setTransform(792.25,300.15,0.6212,0.6005,0,0,0,400.3,214.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("AAAZqMAAAgzT");
	this.shape_3.setTransform(6.2,164.2);

	this.instance_21 = new lib.hair("synched",0);
	this.instance_21.setTransform(618.15,362.2,1.7366,2.3356,-5.9828,0,0,43.6,29.7);

	this.instance_22 = new lib.eyebrow("synched",0);
	this.instance_22.setTransform(476.3,379.55,2.2284,2.1402,0,-29.9988,150.0007,12.8,11.2);

	this.instance_23 = new lib.eyebrow("synched",0);
	this.instance_23.setTransform(667.9,403.1,2.4475,2.1402,-29.9991,0,0,12.8,11.2);

	this.instance_24 = new lib.angry("synched",0);
	this.instance_24.setTransform(549.85,715.8,1,2.4975,0,0,0,105.8,20.2);

	this.instance_25 = new lib.eyes("synched",0);
	this.instance_25.setTransform(570.3,470.45,1.7788,2.3214,0,14.999,17.9939,52.6,27.9);

	this.instance_26 = new lib.nose("synched",0);
	this.instance_26.setTransform(550.05,579.5,1.4758,1.4553,14.9989,0,0,61.9,59.4);

	this.instance_27 = new lib.beard("synched",0);
	this.instance_27.setTransform(520.2,650.2,1.3398,1.3156,14.9992,0,0,163.7,136);

	this.instance_28 = new lib.handCasual("synched",0);
	this.instance_28.setTransform(635.05,859.15,1.7151,1.5431,0,-119.9956,60.0051,60.1,61);

	this.instance_29 = new lib.pants("synched",0);
	this.instance_29.setTransform(496.05,800.55,1.2875,1.9446,14.9988,0,0,152.3,53.5);

	this.instance_30 = new lib.rightFoot("synched",0);
	this.instance_30.setTransform(569.5,934.75,1.6581,2.1001,0,0,0,52.2,38);

	this.instance_31 = new lib.leftFoot("synched",0);
	this.instance_31.setTransform(314.3,897.65,1.4376,2.1016,7.8047,0,0,56.1,38);

	this.instance_32 = new lib.handCasual("synched",0);
	this.instance_32.setTransform(800.15,691.1,1.4242,1.6464,-29.9977,0,0,60.1,60.9);

	this.instance_33 = new lib.lightningStone("synched",0);
	this.instance_33.setTransform(720.35,842.05,1,1,0,0,0,57.7,42.4);

	this.instance_34 = new lib.lightningStone("synched",0);
	this.instance_34.setTransform(825,757.3,1,1,0,0,0,57.7,42.4);

	this.instance_35 = new lib.campFire("synched",0);
	this.instance_35.setTransform(931.85,967.6,1.3361,1.8302,0,0,0,191.6,48);

	this.instance_36 = new lib.insideCave();
	this.instance_36.setTransform(-37,-51,1.0383,1.0783);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AaTKhI9zDrIst7NIV70eIaSOigEAixAaOMguFAMUMgZ9goAMAeCglDMAsgARHg");
	this.shape_4.setTransform(880.45,786.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("A4GjWIV80fIaROiIludeI9yDrg");
	this.shape_5.setTransform(930.95,725.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("EglRgBeMAeDglDMAsfARHMgChAvnMguDAMVgAwNtBIMtbNIdyjrIFu9eI6Suig");
	this.shape_6.setTransform(880.45,786.9);

	this.instance_37 = new lib.handWaiting("synched",0);
	this.instance_37.setTransform(550.2,743.6,3.4687,2.0301,0,0,0,26.4,63.2);

	this.instance_38 = new lib.handFist("synched",0);
	this.instance_38.setTransform(1198.45,467.8,2.1876,3.0658,0,88.9371,-90.0004,72.6,43.1);

	this.instance_39 = new lib.small("synched",0);
	this.instance_39.setTransform(713.25,581.6,3.0734,3.7959,39.8067,0,0,7.2,7.2);

	this.instance_40 = new lib.mouthOpen("synched",0);
	this.instance_40.setTransform(763.15,613.1,3.2428,3.8739,0,0,0,27.8,17.2);

	this.instance_41 = new lib.happy_1("synched",0);
	this.instance_41.setTransform(817.85,513.25,2.0014,3.087,0,0,0,106.8,31.1);

	this.instance_42 = new lib.lighter("synched",0);
	this.instance_42.setTransform(1223.65,-100.7,1.7236,1.5818,0,0,0,39.9,82.5);

	this.instance_43 = new lib.mouthOpenTongu("synched",0);
	this.instance_43.setTransform(775.45,611.75,1.419,1.3298,0,0,0,72.2,61.4);

	this.instance_44 = new lib.side("synched",0);
	this.instance_44.setTransform(733,560.05,2.4354,4.2548,0,0,0,37.6,24.8);

	this.instance_45 = new lib.large("synched",0);
	this.instance_45.setTransform(317.35,717.6,1,1,-45,0,0,13.8,11.8);

	this.replay = new lib.playAgain();
	this.replay.name = "replay";
	this.replay.setTransform(499.05,225.65,1,1,0,0,0,346.1,137.7);
	new cjs.ButtonHelper(this.replay, 0, 1, 2, false, new lib.playAgain(), 3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.1,1,1).p("AAAZpMAAAgzS");
	this.shape_7.setTransform(2.1,168.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{x:960.9,y:195.35}},{t:this.shape_1,p:{x:960.9,y:954.875}},{t:this.shape},{t:this.instance_17,p:{x:1326.35,y:764.65}},{t:this.instance_16,p:{x:277.05,y:921.25}},{t:this.instance_15,p:{x:120.7,y:798.95}},{t:this.instance_14,p:{x:423.55,y:1009.3}},{t:this.instance_13,p:{x:225.8,y:920.4}},{t:this.instance_12,p:{x:161.1,y:701.6}},{t:this.instance_11,p:{x:378.85,y:813.6}},{t:this.instance_10,p:{x:209.9,y:671.05}},{t:this.instance_9,p:{x:651.1,y:1001.75}},{t:this.instance_8,p:{x:450,y:750.85}},{t:this.instance_7,p:{x:551.3,y:973.6}},{t:this.instance_6,p:{x:466.25,y:819.9}},{t:this.instance_5,p:{x:651.1,y:927.75}},{t:this.instance_4,p:{x:-209.25,y:790.7}},{t:this.instance_3,p:{x:-349,y:947.25}},{t:this.instance_2,p:{x:-280.5,y:906.7}},{t:this.instance_1,p:{x:-328.25,y:1032.35}},{t:this.instance,p:{x:1690.55,y:660.8}},{t:this.start}]}).to({state:[{t:this.shape_2,p:{x:965,y:164.25}},{t:this.shape_1,p:{x:965,y:923.775}},{t:this.shape_3},{t:this.instance_17,p:{x:1330.45,y:733.55}},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_16,p:{x:281.15,y:890.15}},{t:this.instance_15,p:{x:124.8,y:767.85}},{t:this.instance_14,p:{x:427.65,y:978.2}},{t:this.instance_13,p:{x:229.9,y:889.3}},{t:this.instance_12,p:{x:165.2,y:670.5}},{t:this.instance_11,p:{x:382.95,y:782.5}},{t:this.instance_10,p:{x:214,y:639.95}},{t:this.instance_9,p:{x:655.2,y:970.65}},{t:this.instance_8,p:{x:454.1,y:719.75}},{t:this.instance_7,p:{x:555.4,y:942.5}},{t:this.instance_6,p:{x:470.35,y:788.8}},{t:this.instance_5,p:{x:655.2,y:896.65}},{t:this.instance_4,p:{x:-205.15,y:759.6}},{t:this.instance_3,p:{x:-344.9,y:916.15}},{t:this.instance_2,p:{x:-276.4,y:875.6}},{t:this.instance_1,p:{x:-324.15,y:1001.25}},{t:this.instance,p:{x:1694.65,y:629.7}}]},1).to({state:[{t:this.shape_2,p:{x:965,y:164.25}},{t:this.shape_1,p:{x:965,y:923.775}},{t:this.shape_3},{t:this.instance_17,p:{x:1330.45,y:733.55}},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_16,p:{x:281.15,y:890.15}},{t:this.instance_15,p:{x:124.8,y:767.85}},{t:this.instance_14,p:{x:427.65,y:978.2}},{t:this.instance_13,p:{x:229.9,y:889.3}},{t:this.instance_12,p:{x:165.2,y:670.5}},{t:this.instance_11,p:{x:382.95,y:782.5}},{t:this.instance_10,p:{x:214,y:639.95}},{t:this.instance_9,p:{x:655.2,y:970.65}},{t:this.instance_8,p:{x:454.1,y:719.75}},{t:this.instance_7,p:{x:555.4,y:942.5}},{t:this.instance_6,p:{x:470.35,y:788.8}},{t:this.instance_5,p:{x:655.2,y:896.65}},{t:this.instance_4,p:{x:-205.15,y:759.6}},{t:this.instance_3,p:{x:-344.9,y:916.15}},{t:this.instance_2,p:{x:-276.4,y:875.6}},{t:this.instance_1,p:{x:-324.15,y:1001.25}},{t:this.instance,p:{x:1694.65,y:629.7}}]},22).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:825,y:757.3}},{t:this.instance_33,p:{x:720.35,y:842.05,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9977,x:800.15,y:691.1,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:7.8047,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-119.9956,skewY:60.0051,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:771.25}},{t:this.instance_33,p:{x:733.55,y:832.75,rotation:0}},{t:this.instance_32,p:{scaleX:1.4243,rotation:-24.5315,x:800.1,y:691.05,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:14.9988,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-125.4789,skewY:54.5216,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:1,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:757.3}},{t:this.instance_33,p:{x:733.55,y:832.75,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9883,x:800.2,y:691.05,regX:60.2,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:14.9988,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-125.4789,skewY:54.5216,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:2,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:757.3}},{t:this.instance_33,p:{x:718.25,y:837.4,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9883,x:800.2,y:691.05,regX:60.2,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:9.7483,regX:56.2,x:314.4,y:897.7,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-117.2852,skewY:62.7152,scaleY:1.543,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:3,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:825,y:757.3}},{t:this.instance_33,p:{x:720.35,y:842.05,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9977,x:800.15,y:691.1,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:8.7855,regX:56.2,x:314.4,y:897.7,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-119.9956,skewY:60.0051,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},3).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:771.25}},{t:this.instance_33,p:{x:733.55,y:832.75,rotation:0}},{t:this.instance_32,p:{scaleX:1.4243,rotation:-24.5315,x:800.1,y:691.05,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:14.9988,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-125.4789,skewY:54.5216,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:1,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:757.3}},{t:this.instance_33,p:{x:733.55,y:832.75,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9883,x:800.2,y:691.05,regX:60.2,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:9.2995,regX:56.2,x:314.45,y:897.7,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-125.4789,skewY:54.5216,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:2,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:825,y:757.3}},{t:this.instance_33,p:{x:720.35,y:842.05,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9977,x:800.15,y:691.1,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:8.7696,regX:56.2,x:314.45,y:897.65,scaleY:2.1015,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-119.9956,skewY:60.0051,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},3).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:771.25}},{t:this.instance_33,p:{x:733.55,y:832.75,rotation:0}},{t:this.instance_32,p:{scaleX:1.4243,rotation:-24.5315,x:800.1,y:691.05,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:14.9988,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-125.4789,skewY:54.5216,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:1,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:757.3}},{t:this.instance_33,p:{x:733.55,y:832.75,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9883,x:800.2,y:691.05,regX:60.2,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:9.5419,regX:56.2,x:314.4,y:897.7,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-125.4789,skewY:54.5216,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:2,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:825,y:757.3}},{t:this.instance_33,p:{x:720.35,y:842.05,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9977,x:800.15,y:691.1,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:14.9988,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-119.9956,skewY:60.0051,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},3).to({state:[{t:this.instance_36,p:{x:-38,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:771.25}},{t:this.instance_33,p:{x:733.55,y:832.75,rotation:0}},{t:this.instance_32,p:{scaleX:1.4243,rotation:-24.5315,x:800.1,y:691.05,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:14.9988,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-125.4789,skewY:54.5216,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:1,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-35,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:757.3}},{t:this.instance_33,p:{x:733.55,y:832.75,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9883,x:800.2,y:691.05,regX:60.2,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:10.0435,regX:56.1,x:314.25,y:897.7,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-125.4789,skewY:54.5216,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:2,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:825,y:757.3}},{t:this.instance_33,p:{x:720.35,y:842.05,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9977,x:800.15,y:691.1,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:14.9988,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-119.9956,skewY:60.0051,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},4).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:771.25}},{t:this.instance_33,p:{x:733.55,y:832.75,rotation:0}},{t:this.instance_32,p:{scaleX:1.4243,rotation:-24.5315,x:800.1,y:691.05,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:14.9988,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-125.4789,skewY:54.5216,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:1,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:757.3}},{t:this.instance_33,p:{x:733.55,y:832.75,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9883,x:800.2,y:691.05,regX:60.2,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:14.9988,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-125.4789,skewY:54.5216,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:2,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:825,y:757.3}},{t:this.instance_33,p:{x:720.35,y:842.05,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9977,x:800.15,y:691.1,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:7.8047,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-119.9956,skewY:60.0051,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:771.25}},{t:this.instance_33,p:{x:733.55,y:832.75,rotation:0}},{t:this.instance_32,p:{scaleX:1.4243,rotation:-24.5315,x:800.1,y:691.05,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:14.9988,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-125.4789,skewY:54.5216,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:1,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:757.3}},{t:this.instance_33,p:{x:733.55,y:832.75,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9883,x:800.2,y:691.05,regX:60.2,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:14.9988,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-125.4789,skewY:54.5216,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:2,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:757.3}},{t:this.instance_33,p:{x:718.25,y:837.4,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9883,x:800.2,y:691.05,regX:60.2,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:9.7483,regX:56.2,x:314.4,y:897.7,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-117.2854,skewY:62.7152,scaleY:1.543,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:3,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:825,y:757.3}},{t:this.instance_33,p:{x:720.35,y:842.05,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9977,x:800.15,y:691.1,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:7.8047,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-119.9956,skewY:60.0051,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},3).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:771.25}},{t:this.instance_33,p:{x:733.55,y:832.75,rotation:0}},{t:this.instance_32,p:{scaleX:1.4243,rotation:-24.5315,x:800.1,y:691.05,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:14.9988,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-125.4789,skewY:54.5216,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:1,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:757.3}},{t:this.instance_33,p:{x:733.55,y:832.75,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9883,x:800.2,y:691.05,regX:60.2,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:14.9988,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-125.4789,skewY:54.5216,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:2,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:757.3}},{t:this.instance_33,p:{x:718.25,y:837.4,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9883,x:800.2,y:691.05,regX:60.2,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:9.7483,regX:56.2,x:314.4,y:897.7,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-117.2854,skewY:62.7152,scaleY:1.543,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:3,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:825,y:757.3}},{t:this.instance_33,p:{x:720.35,y:842.05,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9977,x:800.15,y:691.1,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:7.8047,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-119.9956,skewY:60.0051,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},3).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:771.25}},{t:this.instance_33,p:{x:733.55,y:832.75,rotation:0}},{t:this.instance_32,p:{scaleX:1.4243,rotation:-24.5315,x:800.1,y:691.05,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:14.9988,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-125.4789,skewY:54.5216,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:1,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:757.3}},{t:this.instance_33,p:{x:733.55,y:832.75,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9883,x:800.2,y:691.05,regX:60.2,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:14.9988,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-125.4789,skewY:54.5216,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:2,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:757.3}},{t:this.instance_33,p:{x:718.25,y:837.4,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9883,x:800.2,y:691.05,regX:60.2,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:9.7483,regX:56.2,x:314.4,y:897.7,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-117.2854,skewY:62.7152,scaleY:1.543,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:3,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:825,y:757.3}},{t:this.instance_33,p:{x:720.35,y:842.05,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9977,x:800.15,y:691.1,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:7.8047,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-119.9956,skewY:60.0051,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},4).to({state:[{t:this.instance_36,p:{x:-41,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:771.25}},{t:this.instance_33,p:{x:733.55,y:832.75,rotation:0}},{t:this.instance_32,p:{scaleX:1.4243,rotation:-24.5315,x:800.1,y:691.05,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:14.9988,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-125.4789,skewY:54.5216,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:1,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:757.3}},{t:this.instance_33,p:{x:733.55,y:832.75,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9883,x:800.2,y:691.05,regX:60.2,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:14.9988,regX:56.1,x:314.3,y:897.65,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-125.4789,skewY:54.5216,scaleY:1.5431,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:2,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_35,p:{x:931.85,y:967.6}},{t:this.instance_34,p:{x:814.65,y:757.3}},{t:this.instance_33,p:{x:718.25,y:837.4,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9883,x:800.2,y:691.05,regX:60.2,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:9.7483,regX:56.2,x:314.4,y:897.7,scaleY:2.1016,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.6581,scaleY:2.1001,x:569.5,y:934.75,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2875,scaleY:1.9446,rotation:14.9988,x:496.05,y:800.55,regY:53.5}},{t:this.instance_28,p:{skewX:-117.2854,skewY:62.7152,scaleY:1.543,regY:61,scaleX:1.7151,rotation:0,x:635.05,y:859.15,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3156,rotation:14.9992,x:520.2,y:650.2,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:61.9,regY:59.4,scaleX:1.4758,scaleY:1.4553,rotation:14.9989,x:550.05,y:579.5}},{t:this.instance_25,p:{startPosition:3,regY:27.9,scaleX:1.7788,scaleY:2.3214,skewX:14.999,skewY:17.9939,x:570.3,y:470.45}},{t:this.instance_24,p:{scaleX:1,scaleY:2.4975,x:549.85,y:715.8,regX:105.8,regY:20.2,rotation:0}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4475,scaleY:2.1402,x:667.9,y:403.1,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.2,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:476.3,y:379.55,regX:12.8}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:618.15,y:362.2}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:14.9992,regX:56.1,x:672.15,y:931.9,scaleY:2.6342,scaleX:1.7727}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_28,p:{skewX:0,skewY:0,scaleY:3.4167,regY:60.8,scaleX:2.2704,rotation:134.9996,x:846.35,y:687.75,regX:60.1}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:0,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:891.05,y:143.35,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:679.95,y:168.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}}]},30).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:0.001,regX:56.1,x:672.2,y:931.75,scaleY:2.634,scaleX:1.7726}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_28,p:{skewX:0,skewY:0,scaleY:3.4165,regY:60.8,scaleX:2.2703,rotation:138.2415,x:846.25,y:687.75,regX:60.1}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:1,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:891.05,y:143.35,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:679.95,y:168.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:14.9992,regX:56.1,x:672.15,y:931.9,scaleY:2.6342,scaleX:1.7727}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_28,p:{skewX:0,skewY:0,scaleY:3.4161,regY:60.8,scaleX:2.27,rotation:140.2469,x:846.2,y:687.6,regX:60.1}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:7,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:891.05,y:143.35,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:679.95,y:168.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}}]},6).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:0.001,regX:56.1,x:672.2,y:931.75,scaleY:2.634,scaleX:1.7726}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_28,p:{skewX:0,skewY:0,scaleY:3.4159,regY:60.7,scaleX:2.2699,rotation:129.7845,x:846.45,y:687.75,regX:60.1}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:10,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:891.05,y:143.35,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:679.95,y:168.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}}]},6).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:14.9992,regX:56.1,x:672.15,y:931.9,scaleY:2.6342,scaleX:1.7727}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_28,p:{skewX:0,skewY:0,scaleY:3.4153,regY:60.7,scaleX:2.2694,rotation:144.7828,x:846.2,y:687.65,regX:60.1}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:19,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:891.05,y:143.35,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:679.95,y:168.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}}]},6).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:0.001,regX:56.1,x:672.2,y:931.75,scaleY:2.634,scaleX:1.7726}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_28,p:{skewX:0,skewY:0,scaleY:3.4151,regY:60.7,scaleX:2.2693,rotation:129.7845,x:846.3,y:687.5,regX:60.1}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:22,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:891.05,y:143.35,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:679.95,y:168.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}}]},3).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:14.9992,regX:56.1,x:672.15,y:931.9,scaleY:2.6342,scaleX:1.7727}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_28,p:{skewX:0,skewY:0,scaleY:3.4149,regY:60.6,scaleX:2.2692,rotation:144.7828,x:846.35,y:687.7,regX:60.1}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:0,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:891.05,y:143.35,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:679.95,y:168.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}}]},3).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:0.001,regX:56.1,x:672.2,y:931.75,scaleY:2.634,scaleX:1.7726}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_28,p:{skewX:0,skewY:0,scaleY:3.4143,regY:60.6,scaleX:2.2688,rotation:129.7848,x:846.5,y:687.4,regX:60.1}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:9,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:891.05,y:143.35,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:679.95,y:168.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}}]},9).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:14.9992,regX:56.1,x:672.15,y:931.9,scaleY:2.6342,scaleX:1.7727}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_28,p:{skewX:0,skewY:0,scaleY:3.4137,regY:60.6,scaleX:2.2684,rotation:144.783,x:846.2,y:687.15,regX:60.1}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:18,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:891.05,y:143.35,rotation:-29.9991}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:679.95,y:168.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}}]},9).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:14.9992,regX:56.1,x:672.15,y:931.9,scaleY:2.6342,scaleX:1.7727}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:0,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:987.95,y:105.85,rotation:15.0001}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:605.15,y:116.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}},{t:this.instance_41,p:{y:513.25,regX:106.8,scaleX:2.0014,scaleY:3.087,skewX:0,x:817.85}},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38,p:{regX:72.6,regY:43.1,scaleX:2.1876,scaleY:3.0658,rotation:0,skewX:88.9371,skewY:-90.0004,x:1198.45,y:467.8}}]},3).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:14.9992,regX:56.1,x:672.15,y:931.9,scaleY:2.6342,scaleX:1.7727}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:2,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:987.95,y:105.85,rotation:15.0001}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:605.15,y:116.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}},{t:this.instance_41,p:{y:513.25,regX:106.8,scaleX:2.0014,scaleY:3.087,skewX:0,x:817.85}},{t:this.instance_40},{t:this.instance_39},{t:this.instance_28,p:{skewX:164.9973,skewY:-15.0026,scaleY:2.1869,regY:60.6,scaleX:2.8493,rotation:0,x:1159.1,y:549.2,regX:60}}]},2).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:0,regX:56.2,x:672.3,y:931.9,scaleY:2.6341,scaleX:1.7727}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:3,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:987.95,y:105.85,rotation:15.0001}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:605.15,y:116.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}},{t:this.instance_41,p:{y:513.25,regX:106.8,scaleX:2.0014,scaleY:3.087,skewX:0,x:817.85}},{t:this.instance_40},{t:this.instance_39},{t:this.instance_28,p:{skewX:164.9973,skewY:-15.0026,scaleY:2.1869,regY:60.6,scaleX:2.8493,rotation:0,x:1159.1,y:549.2,regX:60}}]},1).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:14.999,regX:56.2,x:672.35,y:931.95,scaleY:2.6341,scaleX:1.7727}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:7,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:987.95,y:105.85,rotation:15.0001}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:605.15,y:116.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}},{t:this.instance_41,p:{y:513.25,regX:106.8,scaleX:2.0014,scaleY:3.087,skewX:0,x:817.85}},{t:this.instance_40},{t:this.instance_39},{t:this.instance_28,p:{skewX:164.9973,skewY:-15.0026,scaleY:2.1869,regY:60.6,scaleX:2.8493,rotation:0,x:1159.1,y:549.2,regX:60}},{t:this.instance_42,p:{y:-100.7,regX:39.9,regY:82.5,scaleX:1.7236,scaleY:1.5818,rotation:0,x:1223.65}}]},4).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:14.999,regX:56.2,x:672.35,y:931.95,scaleY:2.6341,scaleX:1.7727}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:12,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:987.95,y:105.85,rotation:15.0001}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:605.15,y:116.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}},{t:this.instance_41,p:{y:513.25,regX:106.8,scaleX:2.0014,scaleY:3.087,skewX:0,x:817.85}},{t:this.instance_40},{t:this.instance_39},{t:this.instance_28,p:{skewX:164.9973,skewY:-15.0026,scaleY:2.1869,regY:60.6,scaleX:2.8493,rotation:0,x:1159.1,y:549.2,regX:60}},{t:this.instance_42,p:{y:0.05,regX:39.9,regY:82.5,scaleX:1.7236,scaleY:1.5818,rotation:0,x:1223.65}}]},5).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:14.999,regX:56.2,x:672.35,y:931.95,scaleY:2.6341,scaleX:1.7727}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:17,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:987.95,y:105.85,rotation:15.0001}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:605.15,y:116.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}},{t:this.instance_41,p:{y:513.25,regX:106.8,scaleX:2.0014,scaleY:3.087,skewX:0,x:817.85}},{t:this.instance_40},{t:this.instance_39},{t:this.instance_28,p:{skewX:164.9973,skewY:-15.0026,scaleY:2.1869,regY:60.6,scaleX:2.8493,rotation:0,x:1159.1,y:549.2,regX:60}},{t:this.instance_42,p:{y:175.9,regX:39.9,regY:82.5,scaleX:1.7236,scaleY:1.5818,rotation:0,x:1223.65}}]},5).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:14.999,regX:56.2,x:672.35,y:931.95,scaleY:2.6341,scaleX:1.7727}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:22,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:987.95,y:105.85,rotation:15.0001}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:605.15,y:116.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}},{t:this.instance_41,p:{y:513.25,regX:106.8,scaleX:2.0014,scaleY:3.087,skewX:0,x:817.85}},{t:this.instance_40},{t:this.instance_39},{t:this.instance_42,p:{y:308.6,regX:39.9,regY:82.5,scaleX:1.7236,scaleY:1.5818,rotation:0,x:1223.65}},{t:this.instance_28,p:{skewX:164.9973,skewY:-15.0026,scaleY:2.1869,regY:60.6,scaleX:2.8493,rotation:0,x:1159.1,y:549.2,regX:60}}]},5).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:14.999,regX:56.2,x:672.35,y:931.95,scaleY:2.6341,scaleX:1.7727}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:2,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:987.95,y:105.85,rotation:15.0001}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:605.15,y:116.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}},{t:this.instance_41,p:{y:513.25,regX:106.8,scaleX:2.0014,scaleY:3.087,skewX:0,x:817.85}},{t:this.instance_40},{t:this.instance_39},{t:this.instance_42,p:{y:389.2,regX:39.9,regY:82.5,scaleX:1.7236,scaleY:1.5818,rotation:0,x:1223.65}},{t:this.instance_28,p:{skewX:164.9973,skewY:-15.0026,scaleY:2.1869,regY:60.6,scaleX:2.8493,rotation:0,x:1159.1,y:549.2,regX:60}}]},5).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:14.999,regX:56.2,x:672.35,y:931.95,scaleY:2.6341,scaleX:1.7727}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:7,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:987.95,y:105.85,rotation:15.0001}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:605.15,y:116.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}},{t:this.instance_41,p:{y:479.85,regX:106.8,scaleX:2.0014,scaleY:3.087,skewX:0,x:817.85}},{t:this.instance_42,p:{y:389.2,regX:39.9,regY:82.5,scaleX:1.7236,scaleY:1.5818,rotation:0,x:1223.65}},{t:this.instance_28,p:{skewX:164.9973,skewY:-15.0026,scaleY:2.1869,regY:60.6,scaleX:2.8493,rotation:0,x:1159.1,y:549.2,regX:60}},{t:this.instance_43,p:{scaleX:1.419,scaleY:1.3298,x:775.45,y:611.75}}]},5).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:14.999,regX:56.2,x:672.35,y:931.95,scaleY:2.6341,scaleX:1.7727}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:12,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:987.95,y:105.85,rotation:15.0001}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:605.15,y:116.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}},{t:this.instance_42,p:{y:389.2,regX:39.9,regY:82.5,scaleX:1.7236,scaleY:1.5818,rotation:0,x:1223.65}},{t:this.instance_28,p:{skewX:164.9973,skewY:-15.0026,scaleY:2.1869,regY:60.6,scaleX:2.8493,rotation:0,x:1159.1,y:549.2,regX:60}},{t:this.instance_44,p:{scaleX:2.4354,scaleY:4.2548,x:733,y:560.05,regX:37.6}}]},5).to({state:[{t:this.instance_36,p:{x:-37,y:-51}},{t:this.instance_31,p:{rotation:14.999,regX:56.2,x:672.35,y:931.95,scaleY:2.6341,scaleX:1.7727}},{t:this.instance_30,p:{scaleX:2.068,scaleY:2.6307,x:978.7,y:954.35,rotation:0,regY:38}},{t:this.instance_37},{t:this.instance_29,p:{regX:152.2,scaleX:1.7942,scaleY:3.1523,rotation:0,x:823.35,y:744.35,regY:53.5}},{t:this.instance_27,p:{scaleX:1.8327,scaleY:1.8431,rotation:0,x:809.65,y:518.5,regX:163.7,regY:136}},{t:this.instance_26,p:{regX:62,regY:59.2,scaleX:1.9507,scaleY:1.8879,rotation:0,x:811.75,y:418.05}},{t:this.instance_25,p:{startPosition:18,regY:27.8,scaleX:2.2379,scaleY:3.2284,skewX:0,skewY:0,x:808.5,y:267.85}},{t:this.instance_23,p:{regY:11.3,scaleX:3.6497,scaleY:3.8008,x:987.95,y:105.85,rotation:15.0001}},{t:this.instance_22,p:{regY:11.3,scaleX:4.2652,scaleY:3.8008,skewX:-29.9991,skewY:150.001,x:605.15,y:116.75,regX:12.8}},{t:this.instance_21,p:{regX:43.8,regY:29.6,scaleX:2.1615,scaleY:3.1771,rotation:0,x:821.95,y:86.1}},{t:this.instance_42,p:{y:389.2,regX:39.9,regY:82.5,scaleX:1.7236,scaleY:1.5818,rotation:0,x:1223.65}},{t:this.instance_28,p:{skewX:164.9973,skewY:-15.0026,scaleY:2.1869,regY:60.6,scaleX:2.8493,rotation:0,x:1159.1,y:549.2,regX:60}},{t:this.instance_44,p:{scaleX:2.4354,scaleY:4.2548,x:733,y:560.05,regX:37.6}}]},56).to({state:[{t:this.instance_36,p:{x:0,y:0}},{t:this.instance_35,p:{x:968.85,y:1018.6}},{t:this.instance_33,p:{x:655.1,y:1022.9,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9977,x:496.25,y:742.1,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:0,regX:56.2,x:167.05,y:985.7,scaleY:2.1015,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1001,x:372.3,y:966.1,rotation:-14.9997,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2874,scaleY:1.9445,rotation:-15.0005,x:250.3,y:830.35,regY:53.6}},{t:this.instance_42,p:{y:857.4,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:420.4}},{t:this.instance_28,p:{skewX:-119.9956,skewY:60.0051,scaleY:1.5431,regY:73.7,scaleX:1.7151,rotation:0,x:367,y:898.75,regX:66.8}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3155,rotation:-5.773,x:207.85,y:705.95,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:-224.2,regY:137.5,scaleX:1.4757,scaleY:1.4553,rotation:-9.6919,x:-191.15,y:809.1}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:0,skewY:2.9946,x:204.8,y:521.45}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4474,scaleY:2.1402,x:306.85,y:438.5,rotation:30.0005}},{t:this.instance_22,p:{regY:0,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:110.85,y:402.1,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:227.7,y:397.7}},{t:this.instance_41,p:{y:710.15,regX:106.7,scaleX:1.3628,scaleY:1.0087,skewX:-7.5103,x:210.85}},{t:this.instance_45,p:{x:317.35,y:717.6}}]},8).to({state:[{t:this.instance_36,p:{x:0,y:0}},{t:this.instance_35,p:{x:968.85,y:1018.6}},{t:this.instance_33,p:{x:655.1,y:1022.9,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9977,x:533.45,y:742.1,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:0,regX:56.2,x:204.25,y:985.7,scaleY:2.1015,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1001,x:409.5,y:966.1,rotation:-14.9997,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2874,scaleY:1.9445,rotation:-15.0005,x:287.5,y:830.35,regY:53.6}},{t:this.instance_42,p:{y:857.4,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:457.6}},{t:this.instance_28,p:{skewX:-119.9956,skewY:60.0051,scaleY:1.5431,regY:73.7,scaleX:1.7151,rotation:0,x:404.2,y:898.75,regX:66.8}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3155,rotation:-5.773,x:245.05,y:705.95,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:-224.2,regY:137.5,scaleX:1.4757,scaleY:1.4553,rotation:-9.6919,x:-153.95,y:809.1}},{t:this.instance_25,p:{startPosition:1,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:0,skewY:2.9946,x:242,y:521.45}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4474,scaleY:2.1402,x:344.05,y:438.5,rotation:30.0005}},{t:this.instance_22,p:{regY:0,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:148.05,y:402.1,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:264.9,y:397.7}},{t:this.instance_41,p:{y:710.15,regX:106.7,scaleX:1.3628,scaleY:1.0087,skewX:-7.5103,x:248.05}},{t:this.instance_45,p:{x:354.55,y:717.6}}]},1).to({state:[{t:this.instance_36,p:{x:0,y:0}},{t:this.instance_35,p:{x:968.85,y:1018.6}},{t:this.instance_33,p:{x:655.1,y:1022.9,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9977,x:552.05,y:742.1,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:0,regX:56.2,x:222.85,y:985.7,scaleY:2.1015,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1001,x:428.1,y:966.1,rotation:-14.9997,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2874,scaleY:1.9445,rotation:-15.0005,x:306.1,y:830.35,regY:53.6}},{t:this.instance_42,p:{y:857.4,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:476.2}},{t:this.instance_28,p:{skewX:-119.9956,skewY:60.0051,scaleY:1.5431,regY:73.7,scaleX:1.7151,rotation:0,x:422.8,y:898.75,regX:66.8}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3155,rotation:-5.773,x:263.65,y:705.95,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:-224.2,regY:137.5,scaleX:1.4757,scaleY:1.4553,rotation:-9.6919,x:-135.35,y:809.1}},{t:this.instance_25,p:{startPosition:2,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:0,skewY:2.9946,x:260.6,y:521.45}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4474,scaleY:2.1402,x:362.65,y:438.5,rotation:30.0005}},{t:this.instance_22,p:{regY:0,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:166.65,y:402.1,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:283.5,y:397.7}},{t:this.instance_41,p:{y:710.15,regX:106.7,scaleX:1.3628,scaleY:1.0087,skewX:-7.5103,x:266.65}},{t:this.instance_45,p:{x:373.15,y:717.6}}]},1).to({state:[{t:this.instance_36,p:{x:0,y:0}},{t:this.instance_35,p:{x:968.85,y:1018.6}},{t:this.instance_33,p:{x:655.1,y:1022.9,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9977,x:567.55,y:742.1,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:0,regX:56.2,x:238.35,y:985.7,scaleY:2.1015,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1001,x:443.6,y:966.05,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2874,scaleY:1.9445,rotation:-15.0005,x:321.6,y:830.35,regY:53.6}},{t:this.instance_42,p:{y:857.4,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:491.7}},{t:this.instance_28,p:{skewX:-119.9956,skewY:60.0051,scaleY:1.5431,regY:73.7,scaleX:1.7151,rotation:0,x:438.3,y:898.75,regX:66.8}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3155,rotation:-5.773,x:279.15,y:705.95,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:-224.2,regY:137.5,scaleX:1.4757,scaleY:1.4553,rotation:-9.6919,x:-119.85,y:809.1}},{t:this.instance_25,p:{startPosition:6,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:0,skewY:2.9946,x:276.1,y:521.45}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4474,scaleY:2.1402,x:378.15,y:438.5,rotation:30.0005}},{t:this.instance_22,p:{regY:0,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:182.15,y:402.1,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:299,y:397.7}},{t:this.instance_41,p:{y:710.15,regX:106.7,scaleX:1.3628,scaleY:1.0087,skewX:-7.5103,x:282.15}},{t:this.instance_45,p:{x:388.65,y:717.6}}]},4).to({state:[{t:this.instance_36,p:{x:0,y:0}},{t:this.instance_35,p:{x:968.85,y:1018.6}},{t:this.instance_33,p:{x:655.1,y:1022.9,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9977,x:567.55,y:742.1,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:0,regX:56.2,x:238.35,y:985.7,scaleY:2.1015,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1001,x:443.6,y:966.05,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2874,scaleY:1.9445,rotation:-15.0005,x:334,y:830.35,regY:53.6}},{t:this.instance_42,p:{y:857.4,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:491.7}},{t:this.instance_28,p:{skewX:-119.9956,skewY:60.0051,scaleY:1.5431,regY:73.7,scaleX:1.7151,rotation:0,x:438.3,y:898.75,regX:66.8}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3155,rotation:-5.773,x:300.85,y:705.95,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:-224.2,regY:137.5,scaleX:1.4757,scaleY:1.4553,rotation:-9.6919,x:-107.45,y:809.1}},{t:this.instance_25,p:{startPosition:20,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:0,skewY:2.9946,x:276.1,y:521.45}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4474,scaleY:2.1402,x:378.15,y:438.5,rotation:30.0005}},{t:this.instance_22,p:{regY:0,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:182.15,y:402.1,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:299,y:397.7}},{t:this.instance_41,p:{y:710.15,regX:106.7,scaleX:1.3628,scaleY:1.0087,skewX:-7.5103,x:297.65}},{t:this.instance_45,p:{x:401.05,y:717.6}}]},14).to({state:[{t:this.instance_36,p:{x:0,y:0}},{t:this.instance_35,p:{x:968.85,y:1018.6}},{t:this.instance_33,p:{x:655.1,y:1022.9,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9977,x:567.55,y:742.1,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:0,regX:56.2,x:238.35,y:985.7,scaleY:2.1015,scaleX:1.4376}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1001,x:443.6,y:966.05,rotation:0,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2874,scaleY:1.9445,rotation:-15.0005,x:334,y:830.35,regY:53.6}},{t:this.instance_42,p:{y:857.4,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:491.7}},{t:this.instance_28,p:{skewX:-119.9956,skewY:60.0051,scaleY:1.5431,regY:73.7,scaleX:1.7151,rotation:0,x:438.3,y:898.75,regX:66.8}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3155,rotation:-5.773,x:300.85,y:705.95,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:-224.2,regY:137.5,scaleX:1.4757,scaleY:1.4553,rotation:-9.6919,x:-104.95,y:811.6}},{t:this.instance_25,p:{startPosition:21,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:0,skewY:2.9946,x:276.1,y:521.45}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4474,scaleY:2.1402,x:378.15,y:438.5,rotation:30.0005}},{t:this.instance_22,p:{regY:0,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:182.15,y:402.1,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:299,y:397.7}},{t:this.instance_41,p:{y:710.15,regX:106.7,scaleX:1.3628,scaleY:1.0087,skewX:-7.5103,x:297.65}},{t:this.instance_45,p:{x:401.05,y:717.6}}]},1).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:656.3,y:1022.9,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9977,x:651.45,y:701.1,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:0,regX:56.2,x:274.75,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1001,x:494.35,y:966.1,rotation:14.9999,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2874,scaleY:1.9445,rotation:-0.0009,x:390,y:830.45,regY:53.6}},{t:this.instance_42,p:{y:857.4,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:605.1}},{t:this.instance_28,p:{skewX:-104.9957,skewY:75.0045,scaleY:1.5431,regY:73.7,scaleX:1.7151,rotation:0,x:551.7,y:862.8,regX:66.8}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3155,rotation:-5.773,x:382.4,y:684.65,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:61.8,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:-9.6919,x:383.85,y:606.05}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:-14.999,skewY:-12.0045,x:357.7,y:502.25}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4474,scaleY:2.1402,x:426.6,y:399.3,rotation:0.0012}},{t:this.instance_22,p:{regY:0,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:243.45,y:420.25,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:362,y:373.1}},{t:this.instance_41,p:{y:695.15,regX:106.7,scaleX:1.3628,scaleY:1.0087,skewX:-7.5103,x:387.35}},{t:this.instance_45,p:{x:483.85,y:703.65}}]},3).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:656.3,y:1022.9,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9977,x:623.1,y:723.15,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:0,regX:56.2,x:274.75,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1001,x:494.35,y:966.1,rotation:14.9999,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2874,scaleY:1.9445,rotation:-0.0009,x:390,y:830.45,regY:53.6}},{t:this.instance_42,p:{y:857.4,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:642.9}},{t:this.instance_28,p:{skewX:-104.9957,skewY:75.0045,scaleY:1.5431,regY:73.7,scaleX:1.7151,rotation:0,x:589.5,y:862.8,regX:66.8}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3155,rotation:-5.773,x:382.4,y:684.65,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:61.8,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:-9.6919,x:383.85,y:606.05}},{t:this.instance_25,p:{startPosition:4,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:-14.999,skewY:-12.0045,x:357.7,y:502.25}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4474,scaleY:2.1402,x:426.6,y:399.3,rotation:0.0012}},{t:this.instance_22,p:{regY:0,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:243.45,y:420.25,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:362,y:373.1}},{t:this.instance_41,p:{y:695.15,regX:106.7,scaleX:1.3628,scaleY:1.0087,skewX:-7.5103,x:387.35}},{t:this.instance_45,p:{x:483.85,y:703.65}}]},4).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:656.3,y:1022.9,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9977,x:629.4,y:779.85,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:0,regX:56.2,x:274.75,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1001,x:494.35,y:966.1,rotation:14.9999,regY:38}},{t:this.instance_29,p:{regX:152.3,scaleX:1.2874,scaleY:1.9445,rotation:-0.0009,x:390,y:830.45,regY:53.6}},{t:this.instance_42,p:{y:870,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:598.8}},{t:this.instance_28,p:{skewX:-104.9957,skewY:75.0045,scaleY:1.5431,regY:73.7,scaleX:1.7151,rotation:0,x:545.4,y:875.4,regX:66.8}},{t:this.instance_27,p:{scaleX:1.3398,scaleY:1.3155,rotation:-5.773,x:382.4,y:684.65,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:61.8,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:-9.6919,x:383.85,y:606.05}},{t:this.instance_25,p:{startPosition:14,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:-14.999,skewY:-12.0045,x:357.7,y:502.25}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4474,scaleY:2.1402,x:426.6,y:399.3,rotation:0.0012}},{t:this.instance_22,p:{regY:0,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:243.45,y:420.25,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:362,y:373.1}},{t:this.instance_41,p:{y:695.15,regX:106.7,scaleX:1.3628,scaleY:1.0087,skewX:-7.5103,x:387.35}},{t:this.instance_45,p:{x:483.85,y:703.65}}]},10).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:656.3,y:1022.9,rotation:0}},{t:this.instance_32,p:{scaleX:1.4243,rotation:-14.998,x:610.45,y:887.9,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:0,regX:56.2,x:274.75,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1001,x:494.35,y:966.1,rotation:14.9999,regY:38}},{t:this.instance_29,p:{regX:152.4,scaleX:1.2874,scaleY:1.9445,rotation:14.9983,x:390.1,y:830.4,regY:53.6}},{t:this.instance_27,p:{scaleX:1.3397,scaleY:1.3155,rotation:24.4058,x:413.8,y:708.1,regX:163.6,regY:136.1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,x:403.7,y:785.65}},{t:this.instance_42,p:{y:888.15,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:466.8}},{t:this.instance_28,p:{skewX:-104.9957,skewY:75.0045,scaleY:1.5431,regY:60.8,scaleX:1.7151,rotation:0,x:384.75,y:871.5,regX:60.1}},{t:this.instance_26,p:{regX:61.9,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:20.306,x:449.15,y:635.05}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:14.9995,skewY:17.9945,x:480.5,y:545.95}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4474,scaleY:2.1402,x:579.15,y:478.45,rotation:0.0012}},{t:this.instance_22,p:{regY:0,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:404.75,y:415,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:510.95,y:407.8}},{t:this.instance_41,p:{y:716.65,regX:106.7,scaleX:1.3628,scaleY:1.0087,skewX:-7.5103,x:449.1}}]},6).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:629.6,y:997,rotation:0}},{t:this.instance_32,p:{scaleX:1.4243,rotation:-14.998,x:605.75,y:920.9,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:0,regX:56.2,x:274.75,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1001,x:494.35,y:966.1,rotation:14.9999,regY:38}},{t:this.instance_29,p:{regX:152.4,scaleX:1.2874,scaleY:1.9445,rotation:14.9983,x:390.1,y:830.4,regY:53.6}},{t:this.instance_27,p:{scaleX:1.3397,scaleY:1.3155,rotation:24.4058,x:413.8,y:708.1,regX:163.6,regY:136.1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,x:403.7,y:785.65}},{t:this.instance_42,p:{y:888.15,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:466.8}},{t:this.instance_28,p:{skewX:-104.9957,skewY:75.0045,scaleY:1.5431,regY:60.8,scaleX:1.7151,rotation:0,x:384.75,y:871.5,regX:60.1}},{t:this.instance_26,p:{regX:61.9,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:20.306,x:449.15,y:635.05}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:14.9995,skewY:17.9945,x:480.5,y:545.95}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4474,scaleY:2.1402,x:579.15,y:478.45,rotation:0.0012}},{t:this.instance_22,p:{regY:0,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:404.75,y:415,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:510.95,y:407.8}},{t:this.instance_41,p:{y:716.65,regX:106.7,scaleX:1.3628,scaleY:1.0087,skewX:-7.5103,x:449.1}}]},24).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:629.6,y:963.4,rotation:0}},{t:this.instance_32,p:{scaleX:1.4243,rotation:-14.998,x:605.75,y:887.3,regX:60.1,regY:60.9,scaleY:1.6464,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:0,regX:56.2,x:274.75,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1001,x:494.35,y:966.1,rotation:14.9999,regY:38}},{t:this.instance_29,p:{regX:152.4,scaleX:1.2874,scaleY:1.9445,rotation:14.9983,x:390.1,y:830.4,regY:53.6}},{t:this.instance_27,p:{scaleX:1.3397,scaleY:1.3155,rotation:24.4058,x:413.8,y:708.1,regX:163.6,regY:136.1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,x:403.7,y:785.65}},{t:this.instance_42,p:{y:888.15,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:466.8}},{t:this.instance_28,p:{skewX:-104.9957,skewY:75.0045,scaleY:1.5431,regY:60.8,scaleX:1.7151,rotation:0,x:384.75,y:871.5,regX:60.1}},{t:this.instance_26,p:{regX:61.9,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:20.306,x:449.15,y:635.05}},{t:this.instance_25,p:{startPosition:5,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:14.9995,skewY:17.9945,x:480.5,y:545.95}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4474,scaleY:2.1402,x:579.15,y:478.45,rotation:0.0012}},{t:this.instance_22,p:{regY:0,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:404.75,y:415,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:510.95,y:407.8}},{t:this.instance_41,p:{y:716.65,regX:106.7,scaleX:1.3628,scaleY:1.0087,skewX:-7.5103,x:449.1}}]},5).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:675.95,y:933.35,rotation:-14.9992}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9973,x:633.3,y:866.15,regX:60.1,regY:61,scaleY:1.6463,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:0,regX:56.2,x:274.75,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1001,x:494.35,y:966.1,rotation:14.9999,regY:38}},{t:this.instance_29,p:{regX:152.4,scaleX:1.2874,scaleY:1.9445,rotation:14.9983,x:390.1,y:830.4,regY:53.6}},{t:this.instance_27,p:{scaleX:1.3397,scaleY:1.3155,rotation:24.4058,x:413.8,y:708.1,regX:163.6,regY:136.1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,x:403.7,y:785.65}},{t:this.instance_42,p:{y:888.15,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:466.8}},{t:this.instance_28,p:{skewX:-104.9957,skewY:75.0045,scaleY:1.5431,regY:60.8,scaleX:1.7151,rotation:0,x:384.75,y:871.5,regX:60.1}},{t:this.instance_26,p:{regX:61.9,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:20.306,x:449.15,y:635.05}},{t:this.instance_25,p:{startPosition:13,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:14.9995,skewY:17.9945,x:480.5,y:545.95}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4474,scaleY:2.1402,x:579.15,y:478.45,rotation:0.0012}},{t:this.instance_22,p:{regY:0,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:404.75,y:415,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:510.95,y:407.8}},{t:this.instance_41,p:{y:716.65,regX:106.7,scaleX:1.3628,scaleY:1.0087,skewX:-7.5103,x:449.1}}]},8).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:726.35,y:933.35,rotation:-14.9992}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-29.9973,x:683.7,y:866.15,regX:60.1,regY:61,scaleY:1.6463,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:0,regX:56.2,x:325.15,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1001,x:544.75,y:966.1,rotation:14.9999,regY:38}},{t:this.instance_29,p:{regX:152.4,scaleX:1.2874,scaleY:1.9445,rotation:14.9983,x:440.5,y:830.4,regY:53.6}},{t:this.instance_27,p:{scaleX:1.3397,scaleY:1.3155,rotation:24.4058,x:464.2,y:708.1,regX:163.6,regY:136.1}},{t:this.instance_43,p:{scaleX:1,scaleY:1,x:454.1,y:785.65}},{t:this.instance_42,p:{y:888.15,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:517.2}},{t:this.instance_28,p:{skewX:-104.9957,skewY:75.0045,scaleY:1.5431,regY:60.8,scaleX:1.7151,rotation:0,x:435.15,y:871.5,regX:60.1}},{t:this.instance_26,p:{regX:61.9,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:20.306,x:499.55,y:635.05}},{t:this.instance_25,p:{startPosition:22,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:14.9995,skewY:17.9945,x:530.9,y:545.95}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4474,scaleY:2.1402,x:629.55,y:478.45,rotation:0.0012}},{t:this.instance_22,p:{regY:0,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:455.15,y:415,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:561.35,y:407.8}},{t:this.instance_41,p:{y:716.65,regX:106.7,scaleX:1.3628,scaleY:1.0087,skewX:-7.5103,x:499.5}}]},9).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:838.65,y:790.1,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:-22.252,x:811.7,y:717.1,regX:60.1,regY:61,scaleY:1.6463,skewX:0,skewY:0}},{t:this.instance_31,p:{rotation:0,regX:56.2,x:347.9,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1,x:609.95,y:981.05,rotation:-14.9992,regY:38.1}},{t:this.instance_29,p:{regX:152.4,scaleX:1.2874,scaleY:1.9445,rotation:14.9983,x:471.55,y:865.9,regY:53.6}},{t:this.instance_42,p:{y:874.5,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:762.05}},{t:this.instance_28,p:{skewX:-119.9946,skewY:60.0052,scaleY:1.543,regY:60.8,scaleX:1.7151,rotation:0,x:689.2,y:892.95,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3397,scaleY:1.3155,rotation:24.4058,x:496.05,y:708.1,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:61.9,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:20.306,x:538.75,y:635.05}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:14.9995,skewY:17.9945,x:566.85,y:545.95}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4473,scaleY:2.1401,x:663.2,y:425.05,rotation:-29.998}},{t:this.instance_22,p:{regY:0,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:477.9,y:380.6,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:604.7,y:407.8}},{t:this.instance_44,p:{scaleX:2.0067,scaleY:2.5659,x:481.15,y:763.8,regX:37.6}}]},3).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:854.45,y:756.9,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:0,x:816.15,y:701.3,regX:60.1,regY:60.9,scaleY:1.6519,skewX:-32.5138,skewY:-37.2521}},{t:this.instance_31,p:{rotation:0,regX:56.2,x:347.9,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1,x:609.95,y:981.05,rotation:-14.9992,regY:38.1}},{t:this.instance_29,p:{regX:152.4,scaleX:1.2874,scaleY:1.9445,rotation:14.9983,x:471.55,y:865.9,regY:53.6}},{t:this.instance_42,p:{y:898.25,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:737.15}},{t:this.instance_28,p:{skewX:-111.0502,skewY:68.9494,scaleY:1.543,regY:60.8,scaleX:1.7151,rotation:0,x:660.1,y:908.1,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3397,scaleY:1.3155,rotation:24.4058,x:496.05,y:708.1,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:61.9,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:20.306,x:538.75,y:635.05}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:14.9995,skewY:17.9945,x:566.85,y:545.95}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4473,scaleY:2.1401,x:648.5,y:462.75,rotation:-29.998}},{t:this.instance_22,p:{regY:0,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:488.95,y:415,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:604.7,y:407.8}},{t:this.instance_44,p:{scaleX:1.6909,scaleY:1.8642,x:481.2,y:760.75,regX:37.6}}]},21).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:827.3,y:771.4,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:0,x:796.85,y:699.2,regX:60.1,regY:61,scaleY:1.6519,skewX:-23.7687,skewY:-28.5066}},{t:this.instance_31,p:{rotation:0,regX:56.2,x:347.9,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1,x:609.95,y:981.05,rotation:-14.9992,regY:38.1}},{t:this.instance_29,p:{regX:152.4,scaleX:1.2874,scaleY:1.9445,rotation:14.9983,x:471.55,y:865.9,regY:53.6}},{t:this.instance_42,p:{y:867.95,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:753.95}},{t:this.instance_28,p:{skewX:-118.7567,skewY:61.2432,scaleY:1.543,regY:60.8,scaleX:1.7151,rotation:0,x:676.45,y:883.05,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3397,scaleY:1.3155,rotation:24.4058,x:496.05,y:708.1,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:61.9,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:20.306,x:538.75,y:635.05}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:14.9995,skewY:17.9945,x:566.85,y:545.95}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4473,scaleY:2.1401,x:648.5,y:462.75,rotation:-29.998}},{t:this.instance_22,p:{regY:0,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:488.95,y:415,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:604.7,y:407.8}},{t:this.instance_44,p:{scaleX:1.0927,scaleY:1.1627,x:489.25,y:757.85,regX:37.7}}]},25).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:827.3,y:771.4,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:0,x:796.85,y:699.2,regX:60.1,regY:61,scaleY:1.6519,skewX:-23.7687,skewY:-28.5066}},{t:this.instance_31,p:{rotation:0,regX:56.2,x:347.9,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1,x:609.95,y:981.05,rotation:-14.9992,regY:38.1}},{t:this.instance_29,p:{regX:152.4,scaleX:1.2874,scaleY:1.9445,rotation:14.9983,x:471.55,y:865.9,regY:53.6}},{t:this.instance_42,p:{y:909.05,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:703.2}},{t:this.instance_28,p:{skewX:-118.7567,skewY:61.2432,scaleY:1.543,regY:60.8,scaleX:1.7151,rotation:0,x:631.25,y:916,regX:60.1}},{t:this.instance_27,p:{scaleX:1.3397,scaleY:1.3155,rotation:24.4058,x:496.05,y:708.1,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:61.9,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:20.306,x:538.75,y:635.05}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:14.9995,skewY:17.9945,x:566.85,y:545.95}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4473,scaleY:2.1401,x:648.5,y:462.75,rotation:-29.998}},{t:this.instance_22,p:{regY:0,scaleX:2.2284,scaleY:2.1402,skewX:-29.9988,skewY:150.0007,x:488.95,y:415,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:604.7,y:407.8}},{t:this.instance_24,p:{scaleX:0.5906,scaleY:1,x:501.95,y:767.9,regX:105.8,regY:20.2,rotation:0}}]},25).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:802.3,y:900.5,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:0,x:781.05,y:752.1,regX:60.1,regY:61,scaleY:1.6519,skewX:-23.7687,skewY:-28.5066}},{t:this.instance_31,p:{rotation:14.9989,regX:56.2,x:347.95,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1,x:609.9,y:981,rotation:0,regY:38.1}},{t:this.instance_29,p:{regX:152.4,scaleX:1.2874,scaleY:1.9445,rotation:14.9983,x:471.55,y:865.9,regY:53.6}},{t:this.instance_27,p:{scaleX:1.3397,scaleY:1.3155,rotation:24.4058,x:496.05,y:708.1,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:61.9,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:20.306,x:538.75,y:635.05}},{t:this.instance_42,p:{y:775.95,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:557}},{t:this.instance_28,p:{skewX:-148.7559,skewY:31.2437,scaleY:1.543,regY:60.8,scaleX:1.715,rotation:0,x:500.9,y:828,regX:60.2}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:14.9995,skewY:17.9945,x:566.85,y:545.95}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4473,scaleY:2.1401,x:607.25,y:462.85,rotation:-59.997}},{t:this.instance_22,p:{regY:0,scaleX:2.2283,scaleY:2.1402,skewX:45.0012,skewY:-135,x:570.85,y:443.95,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:604.7,y:365.65}},{t:this.instance_24,p:{scaleX:1.0617,scaleY:1.7443,x:541.6,y:768,regX:105.9,regY:20.3,rotation:0}}]},22).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:802.3,y:926.75,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:0,x:781.05,y:752.1,regX:60.1,regY:61,scaleY:1.6519,skewX:-23.7687,skewY:-28.5066}},{t:this.instance_31,p:{rotation:14.9989,regX:56.2,x:347.95,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1,x:609.9,y:981,rotation:0,regY:38.1}},{t:this.instance_29,p:{regX:152.4,scaleX:1.2874,scaleY:1.9445,rotation:14.9983,x:471.55,y:865.9,regY:53.6}},{t:this.instance_27,p:{scaleX:1.3397,scaleY:1.3155,rotation:24.4058,x:496.05,y:708.1,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:61.9,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:20.306,x:538.75,y:635.05}},{t:this.instance_42,p:{y:775.95,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:557}},{t:this.instance_28,p:{skewX:-148.7559,skewY:31.2437,scaleY:1.543,regY:60.8,scaleX:1.715,rotation:0,x:500.9,y:828,regX:60.2}},{t:this.instance_25,p:{startPosition:1,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:14.9995,skewY:17.9945,x:566.85,y:545.95}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4473,scaleY:2.1401,x:607.25,y:462.85,rotation:-59.997}},{t:this.instance_22,p:{regY:0,scaleX:2.2283,scaleY:2.1402,skewX:45.0012,skewY:-135,x:570.85,y:443.95,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:604.7,y:365.65}},{t:this.instance_24,p:{scaleX:1.0617,scaleY:1.7443,x:541.6,y:768,regX:105.9,regY:20.3,rotation:0}}]},1).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:771.75,y:961.55,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:0,x:781.05,y:752.1,regX:60.1,regY:61,scaleY:1.6519,skewX:-23.7687,skewY:-28.5066}},{t:this.instance_31,p:{rotation:14.9989,regX:56.2,x:347.95,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1,x:609.9,y:981,rotation:0,regY:38.1}},{t:this.instance_29,p:{regX:152.4,scaleX:1.2874,scaleY:1.9445,rotation:14.9983,x:471.55,y:865.9,regY:53.6}},{t:this.instance_27,p:{scaleX:1.3397,scaleY:1.3155,rotation:24.4058,x:496.05,y:708.1,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:61.9,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:20.306,x:538.75,y:635.05}},{t:this.instance_42,p:{y:775.95,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:557}},{t:this.instance_28,p:{skewX:-148.7559,skewY:31.2437,scaleY:1.543,regY:60.8,scaleX:1.715,rotation:0,x:500.9,y:828,regX:60.2}},{t:this.instance_25,p:{startPosition:2,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:14.9995,skewY:17.9945,x:566.85,y:545.95}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4473,scaleY:2.1401,x:607.25,y:462.85,rotation:-59.997}},{t:this.instance_22,p:{regY:0,scaleX:2.2283,scaleY:2.1402,skewX:45.0012,skewY:-135,x:570.85,y:443.95,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:604.7,y:365.65}},{t:this.instance_24,p:{scaleX:1.0617,scaleY:1.7443,x:541.6,y:768,regX:105.9,regY:20.3,rotation:0}}]},1).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:745.05,y:989.2,rotation:0}},{t:this.instance_32,p:{scaleX:1.4242,rotation:0,x:781.05,y:752.1,regX:60.1,regY:61,scaleY:1.6519,skewX:-23.7687,skewY:-28.5066}},{t:this.instance_31,p:{rotation:14.9989,regX:56.2,x:347.95,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1,x:609.9,y:981,rotation:0,regY:38.1}},{t:this.instance_29,p:{regX:152.4,scaleX:1.2874,scaleY:1.9445,rotation:14.9983,x:471.55,y:865.9,regY:53.6}},{t:this.instance_27,p:{scaleX:1.3397,scaleY:1.3155,rotation:24.4058,x:496.05,y:708.1,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:61.9,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:20.306,x:538.75,y:635.05}},{t:this.instance_42,p:{y:775.95,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:557}},{t:this.instance_28,p:{skewX:-148.7559,skewY:31.2437,scaleY:1.543,regY:60.8,scaleX:1.715,rotation:0,x:500.9,y:828,regX:60.2}},{t:this.instance_25,p:{startPosition:3,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:14.9995,skewY:17.9945,x:566.85,y:545.95}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4473,scaleY:2.1401,x:607.25,y:462.85,rotation:-59.997}},{t:this.instance_22,p:{regY:0,scaleX:2.2283,scaleY:2.1402,skewX:45.0012,skewY:-135,x:570.85,y:443.95,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:604.7,y:365.65}},{t:this.instance_24,p:{scaleX:1.0617,scaleY:1.7443,x:541.6,y:768,regX:105.9,regY:20.3,rotation:0}}]},1).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:745.05,y:989.2,rotation:-14.9992}},{t:this.instance_32,p:{scaleX:1.4242,rotation:0,x:781.05,y:752.1,regX:60.1,regY:61,scaleY:1.6519,skewX:-23.7687,skewY:-28.5066}},{t:this.instance_31,p:{rotation:14.9989,regX:56.2,x:347.95,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1,x:609.9,y:981,rotation:0,regY:38.1}},{t:this.instance_29,p:{regX:152.4,scaleX:1.2874,scaleY:1.9445,rotation:14.9983,x:471.55,y:865.9,regY:53.6}},{t:this.instance_27,p:{scaleX:1.3397,scaleY:1.3155,rotation:24.4058,x:496.05,y:708.1,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:61.9,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:20.306,x:538.75,y:635.05}},{t:this.instance_42,p:{y:775.95,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:557}},{t:this.instance_28,p:{skewX:-148.7559,skewY:31.2437,scaleY:1.543,regY:60.8,scaleX:1.715,rotation:0,x:500.9,y:828,regX:60.2}},{t:this.instance_25,p:{startPosition:4,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:14.9995,skewY:17.9945,x:566.85,y:545.95}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4473,scaleY:2.1401,x:607.25,y:462.85,rotation:-59.997}},{t:this.instance_22,p:{regY:0,scaleX:2.2283,scaleY:2.1402,skewX:45.0012,skewY:-135,x:570.85,y:443.95,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:604.7,y:365.65}},{t:this.instance_24,p:{scaleX:1.0617,scaleY:1.7443,x:541.6,y:768,regX:105.9,regY:20.3,rotation:0}}]},1).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:709.9,y:1017.4,rotation:-14.9992}},{t:this.instance_32,p:{scaleX:1.4242,rotation:0,x:781.05,y:752.1,regX:60.1,regY:61,scaleY:1.6519,skewX:-23.7687,skewY:-28.5066}},{t:this.instance_31,p:{rotation:14.9989,regX:56.2,x:347.95,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1,x:609.9,y:981,rotation:0,regY:38.1}},{t:this.instance_29,p:{regX:152.4,scaleX:1.2874,scaleY:1.9445,rotation:14.9983,x:471.55,y:865.9,regY:53.6}},{t:this.instance_27,p:{scaleX:1.3397,scaleY:1.3155,rotation:24.4058,x:496.05,y:708.1,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:61.9,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:20.306,x:538.75,y:635.05}},{t:this.instance_42,p:{y:775.95,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:557}},{t:this.instance_28,p:{skewX:-148.7559,skewY:31.2437,scaleY:1.543,regY:60.8,scaleX:1.715,rotation:0,x:500.9,y:828,regX:60.2}},{t:this.instance_25,p:{startPosition:5,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:14.9995,skewY:17.9945,x:566.85,y:545.95}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4473,scaleY:2.1401,x:607.25,y:462.85,rotation:-59.997}},{t:this.instance_22,p:{regY:0,scaleX:2.2283,scaleY:2.1402,skewX:45.0012,skewY:-135,x:570.85,y:443.95,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:604.7,y:365.65}},{t:this.instance_24,p:{scaleX:1.0617,scaleY:1.7443,x:541.6,y:768,regX:105.9,regY:20.3,rotation:0}}]},1).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:769.6,y:960.05,rotation:-14.9992}},{t:this.instance_31,p:{rotation:14.9989,regX:56.2,x:347.95,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1,x:609.9,y:981,rotation:0,regY:38.1}},{t:this.instance_29,p:{regX:152.4,scaleX:1.2874,scaleY:1.9445,rotation:14.9983,x:471.55,y:865.9,regY:53.6}},{t:this.instance_38,p:{regX:72.8,regY:43,scaleX:1.5961,scaleY:1.6594,rotation:75,skewX:0,skewY:0,x:755.25,y:800.55}},{t:this.instance_27,p:{scaleX:1.3397,scaleY:1.3155,rotation:24.4058,x:496.05,y:708.1,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:61.9,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:20.306,x:538.75,y:635.05}},{t:this.instance_42,p:{y:702.2,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:557}},{t:this.instance_28,p:{skewX:-148.7559,skewY:31.2437,scaleY:1.543,regY:60.8,scaleX:1.715,rotation:0,x:497,y:770.6,regX:60.2}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:14.9995,skewY:17.9945,x:566.85,y:545.95}},{t:this.instance_23,p:{regY:11.2,scaleX:2.4473,scaleY:2.1401,x:620.45,y:483.75,rotation:-59.997}},{t:this.instance_22,p:{regY:0,scaleX:2.2284,scaleY:2.1402,skewX:60,skewY:-120.0007,x:584.05,y:483.5,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:604.7,y:402.55}},{t:this.instance_24,p:{scaleX:1.2893,scaleY:2.6805,x:529.7,y:734.75,regX:105.9,regY:20.4,rotation:7.4611}}]},8).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:768.55,y:1024.2,rotation:-14.9992}},{t:this.instance_31,p:{rotation:14.9989,regX:56.2,x:347.95,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1,x:609.9,y:981,rotation:0,regY:38.1}},{t:this.instance_29,p:{regX:152.4,scaleX:1.2874,scaleY:1.9445,rotation:14.9983,x:471.55,y:865.9,regY:53.6}},{t:this.instance_38,p:{regX:72.8,regY:43,scaleX:1.5961,scaleY:1.6593,rotation:99.6938,skewX:0,skewY:0,x:723.05,y:841.05}},{t:this.instance_27,p:{scaleX:1.3397,scaleY:1.3155,rotation:24.4058,x:496.05,y:708.1,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:61.9,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:20.306,x:538.75,y:635.05}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:14.9995,skewY:17.9945,x:566.85,y:545.95}},{t:this.instance_23,p:{regY:11.2,scaleX:2.8584,scaleY:2.9844,x:623.4,y:504.15,rotation:-44.9979}},{t:this.instance_22,p:{regY:0,scaleX:2.6879,scaleY:2.1402,skewX:60,skewY:-120.0006,x:573.9,y:498.9,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:604.7,y:423.65}},{t:this.instance_24,p:{scaleX:1.2893,scaleY:2.6805,x:529.7,y:734.75,regX:105.9,regY:20.4,rotation:7.4611}},{t:this.instance_42,p:{y:674.35,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:549.8}},{t:this.instance_28,p:{skewX:-163.7556,skewY:16.2442,scaleY:1.5799,regY:60.7,scaleX:1.841,rotation:0,x:501.05,y:744,regX:60.4}}]},14).to({state:[{t:this.instance_36,p:{x:1,y:0}},{t:this.instance_35,p:{x:970.05,y:1018.6}},{t:this.instance_33,p:{x:768.55,y:1024.2,rotation:-14.9992}},{t:this.instance_31,p:{rotation:14.9989,regX:56.2,x:347.95,y:982.4,scaleY:2.1015,scaleX:1.4375}},{t:this.instance_30,p:{scaleX:1.658,scaleY:2.1,x:609.9,y:981,rotation:0,regY:38.1}},{t:this.instance_29,p:{regX:152.4,scaleX:1.2874,scaleY:1.9445,rotation:14.9983,x:471.55,y:865.9,regY:53.6}},{t:this.instance_38,p:{regX:73,regY:43.1,scaleX:2.1558,scaleY:2.4084,rotation:-24.3573,skewX:0,skewY:0,x:749.25,y:695.05}},{t:this.instance_27,p:{scaleX:1.3397,scaleY:1.3155,rotation:24.4058,x:496.05,y:708.1,regX:163.6,regY:136.1}},{t:this.instance_26,p:{regX:61.9,regY:59.2,scaleX:1.4757,scaleY:1.4553,rotation:20.306,x:538.75,y:635.05}},{t:this.instance_25,p:{startPosition:0,regY:27.9,scaleX:1.7788,scaleY:2.3213,skewX:14.9995,skewY:17.9945,x:566.85,y:545.95}},{t:this.instance_23,p:{regY:11.2,scaleX:2.8584,scaleY:2.9844,x:623.4,y:504.15,rotation:-44.9979}},{t:this.instance_22,p:{regY:0,scaleX:2.6879,scaleY:2.1402,skewX:60,skewY:-120.0006,x:573.9,y:498.9,regX:0}},{t:this.instance_21,p:{regX:43.6,regY:29.7,scaleX:1.7366,scaleY:2.3356,rotation:-5.9828,x:604.7,y:423.65}},{t:this.instance_24,p:{scaleX:1.2893,scaleY:2.6805,x:529.7,y:734.75,regX:105.9,regY:20.4,rotation:7.4611}},{t:this.instance_42,p:{y:674.35,regX:44.3,regY:98.5,scaleX:1,scaleY:1,rotation:14.9992,x:549.8}},{t:this.instance_28,p:{skewX:-163.7556,skewY:16.2442,scaleY:1.5799,regY:60.7,scaleX:1.841,rotation:0,x:501.05,y:744,regX:60.4}}]},21).to({state:[{t:this.shape_2,p:{x:960.9,y:168.55}},{t:this.shape_1,p:{x:960.9,y:928.075}},{t:this.shape_7},{t:this.instance_17,p:{x:1326.35,y:737.85}},{t:this.instance_16,p:{x:277.05,y:894.45}},{t:this.instance_15,p:{x:120.7,y:772.15}},{t:this.instance_14,p:{x:423.55,y:982.5}},{t:this.instance_13,p:{x:225.8,y:893.6}},{t:this.instance_12,p:{x:161.1,y:674.8}},{t:this.instance_11,p:{x:378.85,y:786.8}},{t:this.instance_10,p:{x:209.9,y:644.25}},{t:this.instance_9,p:{x:651.1,y:974.95}},{t:this.instance_8,p:{x:450,y:724.05}},{t:this.instance_7,p:{x:551.3,y:946.8}},{t:this.instance_6,p:{x:466.25,y:793.1}},{t:this.instance_5,p:{x:651.1,y:900.95}},{t:this.instance_4,p:{x:-209.25,y:763.9}},{t:this.instance_3,p:{x:-349,y:920.45}},{t:this.instance_2,p:{x:-280.5,y:879.9}},{t:this.instance_1,p:{x:-328.25,y:1005.55}},{t:this.instance,p:{x:1690.55,y:634}},{t:this.replay}]},23).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.theCaveMan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,23,25,64,101,126,146,247,386,412,481,505];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.start = this.MAIN.start;
		var self = this;
		self.stop()
		
		self.start.addEventListener("click", startPlaying);
		
		function startPlaying(){
			self.gotoAndPlay(2);
		}
		
		createjs.Sound.registerSound("/sounds/_124wav.mp3","ambiant");
	}
	this.frame_1 = function() {
		this.start = undefined;
		createjs.Sound.play("ambiant");
		playSound("ambiant");
	}
	this.frame_23 = function() {
		createjs.Sound.stop("ambiant");
	}
	this.frame_25 = function() {
		playSound("clickShort");
	}
	this.frame_64 = function() {
		playSound("clickShort");
	}
	this.frame_101 = function() {
		playSound("thinking");
	}
	this.frame_126 = function() {
		playSound("we");
	}
	this.frame_146 = function() {
		playSound("divine");
	}
	this.frame_247 = function() {
		playSound("happy");
	}
	this.frame_386 = function() {
		playSound("clickShort");
	}
	this.frame_412 = function() {
		playSound("lose");
	}
	this.frame_481 = function() {
		playSound("angery");
	}
	this.frame_505 = function() {
		this.replay = this.MAIN.replay;
		this.___loopingOver___ = true;
		var self = this;
		self.stop();
		
		self.replay.addEventListener("click", playAgain);
		function playAgain(){
			self.gotoAndPlay(2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(22).call(this.frame_23).wait(2).call(this.frame_25).wait(39).call(this.frame_64).wait(37).call(this.frame_101).wait(25).call(this.frame_126).wait(20).call(this.frame_146).wait(101).call(this.frame_247).wait(139).call(this.frame_386).wait(26).call(this.frame_412).wait(69).call(this.frame_481).wait(24).call(this.frame_505).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(960,540);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(49).to({regX:0.5,regY:0.5,scaleX:0.4343,scaleY:0.4343,x:945.85,y:859.15},0).wait(24).to({regX:0,regY:0,scaleX:1.0225,scaleY:1.0225,x:960,y:539.95,visible:true},0).wait(332).to({regX:0.5,regY:0.4,scaleX:0.5876,scaleY:0.5876,x:575.75,y:650},0).wait(7).to({regX:0.8,regY:0.6,scaleX:0.4117,scaleY:0.4117,x:548.8,y:652},0).wait(93).to({regX:0.9,regY:0.8,scaleX:0.9402,scaleY:0.9402,x:901.05,y:502.55},0).wait(1));

	// pupil_obj_
	this.pupil = new lib.Scene_1_pupil();
	this.pupil.name = "pupil";
	this.pupil.depth = 0;
	this.pupil.isAttachedToCamera = 0
	this.pupil.isAttachedToMask = 0
	this.pupil.layerDepth = 0
	this.pupil.layerIndex = 0
	this.pupil.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.pupil).wait(86).to({regX:-21.5,regY:-12.1,scaleX:0.978,scaleY:0.978},0).wait(319).to({regX:11.3,regY:332.4,scaleX:1.702,scaleY:1.702,x:-0.05,y:-0.05},0).wait(25).to({regX:153.2,regY:429.4,scaleX:2.4291,scaleY:2.4291,x:0.05,y:0},0).wait(73).to({_off:true},2).wait(1));

	// sparks_obj_
	this.sparks = new lib.Scene_1_sparks();
	this.sparks.name = "sparks";
	this.sparks.depth = 0;
	this.sparks.isAttachedToCamera = 0
	this.sparks.isAttachedToMask = 0
	this.sparks.layerDepth = 0
	this.sparks.layerIndex = 1
	this.sparks.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sparks).wait(50).to({regX:528.7,regY:624.4,scaleX:2.3025,scaleY:2.3025},0).wait(23).to({regX:-21.5,regY:-12.1,scaleX:0.978,scaleY:0.978},0).wait(339).to({regX:153.2,regY:429.4,scaleX:2.4291,scaleY:2.4291,x:0.05},0).to({_off:true},91).wait(3));

	// spider_obj_
	this.spider = new lib.Scene_1_spider();
	this.spider.name = "spider";
	this.spider.depth = 0;
	this.spider.isAttachedToCamera = 0
	this.spider.isAttachedToMask = 0
	this.spider.layerDepth = 0
	this.spider.layerIndex = 2
	this.spider.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.spider).wait(101).to({regX:-21.5,regY:-12.1,scaleX:0.978,scaleY:0.978},0).wait(34).to({_off:true},1).wait(370));

	// MAIN_obj_
	this.MAIN = new lib.Scene_1_MAIN();
	this.MAIN.name = "MAIN";
	this.MAIN.setTransform(900.9,431.1,1,1,0,0,0,900.9,431.1);
	this.MAIN.depth = 0;
	this.MAIN.isAttachedToCamera = 0
	this.MAIN.isAttachedToMask = 0
	this.MAIN.layerDepth = 0
	this.MAIN.layerIndex = 3
	this.MAIN.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.MAIN).wait(49).to({regX:920,regY:811.6,scaleX:2.3025,scaleY:2.3025,x:901,y:431.05},0).wait(52).to({regX:899.6,regY:428.6,scaleX:0.978,scaleY:0.978,x:900.85},0).wait(311).to({regX:524,regY:606.9,scaleX:2.4291,scaleY:2.4291,x:900.75,y:431.2},0).wait(93).to({regX:844.6,regY:399.4,scaleX:1.0636,scaleY:1.0636,x:900.85,y:431.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(445.5,99.9,1713.3000000000002,1171.3);
// library properties:
lib.properties = {
	id: 'B96F576583D59344AB764CC451501908',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/theCaveMan_atlas_1.png?1628877538479", id:"theCaveMan_atlas_1"},
		{src:"sounds/ambiant.mp3?1628877539243", id:"ambiant"},
		{src:"sounds/angery.mp3?1628877539243", id:"angery"},
		{src:"sounds/clickShort.mp3?1628877539243", id:"clickShort"},
		{src:"sounds/divine.mp3?1628877539243", id:"divine"},
		{src:"sounds/happy.mp3?1628877539243", id:"happy"},
		{src:"sounds/lose.mp3?1628877539243", id:"lose"},
		{src:"sounds/thinking.mp3?1628877539243", id:"thinking"},
		{src:"sounds/we.mp3?1628877539243", id:"we"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B96F576583D59344AB764CC451501908'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;