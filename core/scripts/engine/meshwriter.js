/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {}, Wrapper;                                                                // +-+
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/  Wrapper = __webpack_require__(__webpack_require__.s = 0);                                          // +-+
/******/  if ( typeof module === 'object' && module.exports ) {                                              // +-+
/******/    module.exports = { MeshWriter : Wrapper }                                                        // +-+
/******/  }                                                                                                  // +-+
/******/  if ( typeof define === 'function' && define.amd ) {                                                // +-+
/******/    define ( 'meshwriter' , [], function() { return MeshWriter } )                                   // +-+
/******/  }                                                                                                  // +-+
/******/  return Wrapper;                                                                                    // +-+
/******/ 	// return __webpack_require__(__webpack_require__.s = 0);                                          // +-+
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Babylon MeshWriter
 * https://github.com/BabylonJS/Babylon.js
 * (c) 2018-2019 Brian Todd Button
 * Released under the MIT license
 */


// *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
// This function loads the specific type-faces and returns the superconstructor
// If BABYLON is loaded, it assigns the superconstructor to BABYLON.MeshWriter
// Otherwise it assigns it to global variable 'BABYLONTYPE'
// 
// Note to developers:  Helvetica Neue Medium is assumed, by the code, to be present
//                      Do NOT remove it during customization

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(3),__webpack_require__(4),__webpack_require__(5),__webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(HPB,HNM,CSN,JUR,WGD){
  // >>>>>  STEP 1 <<<<<

    var scene,FONTS,defaultColor,defaultOpac,naturalLetterHeight,curveSampleSize,Γ=Math.floor,hpb,hnm,csn,jur,wgd,debug;
    var b128back,b128digits;
    var earcut = __webpack_require__(7);
    prepArray();
    // >>>>>  STEP 2 <<<<<
    hpb                          = HPB(codeList);
    hnm                          = HNM(codeList);                         // Do not remove
    csn                          = CSN(codeList);
    jur                          = JUR(codeList);
    wgd                          = WGD(codeList);
    // >>>>>  STEP 2 <<<<<
    FONTS                        = {};
    // >>>>>  STEP 3 <<<<<
    FONTS["HirukoPro-Book"]      = hpb;
    FONTS["HelveticaNeue-Medium"]= hnm;                                   // Do not remove
    FONTS["Helvetica"]           = hnm;
    FONTS["Arial"]               = hnm;
    FONTS["sans-serif"]          = hnm;
    FONTS["Comic"]               = csn;
    FONTS["comic"]               = csn;
    FONTS["ComicSans"]           = csn;
    FONTS["Jura"]                = jur;
    FONTS["jura"]                = jur;
    FONTS["WebGL-Dings"]         = wgd;
    FONTS["Web-dings"]           = wgd;
    // >>>>>  STEP 3 <<<<<
    defaultColor                 = "#808080";
    defaultOpac                  = 1;
    curveSampleSize              = 6;
    naturalLetterHeight          = 1000;

    // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
    //  SUPERCONSTRUCTOR  SUPERCONSTRUCTOR  SUPERCONSTRUCTOR 
    // Parameters:
    //   ~ scene
    //   ~ preferences

    var Wrapper                  = function(){

      var proto,defaultFont,scale,meshOrigin,preferences;

      scene                      = arguments[0];
      preferences                = makePreferences(arguments);

      defaultFont                = isObject(FONTS[preferences.defaultFont]) ? preferences.defaultFont : "HelveticaNeue-Medium";
      meshOrigin                 = preferences.meshOrigin==="fontOrigin" ? preferences.meshOrigin : "letterCenter";
      scale                      = isNumber(preferences.scale) ? preferences.scale : 1;
      debug                      = isBoolean(preferences.debug) ? preferences.debug : false;

      // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
      //  CONSTRUCTOR  CONSTRUCTOR  CONSTRUCTOR  CONSTRUCTOR
      // Called with 'new'
      // Parameters:
      //   ~ letters
      //   ~ options

      function MeshWriter(lttrs,opt){

        var material,meshesAndBoxes,offsetX,meshes,lettersBoxes,lettersOrigins,combo,sps,mesh,xWidth;

        //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  
        // Here we set ALL parameters with incoming value or a default
        // setOption:  applies a test to potential incoming parameters
        //             if the test passes, the parameters are used, else the default is used
        var options              = isObject(opt) ? opt : { } ,
            position             = setOption ( options,  "position", isObject, {} ) ,
            colors               = setOption ( options,  "colors",   isObject, {} ) ,
            fontFamily           = setOption ( options,  "font-family", isSupportedFont, defaultFont ) ,
            anchor               = setOption ( options,  "anchor",   isSupportedAnchor, "left" ) ,
            rawheight            = setOption ( options,  "letter-height", isPositiveNumber, 100 ) ,
            rawThickness         = setOption ( options,  "letter-thickness", isPositiveNumber, 1 ) ,
            basicColor           = setOption ( options,  "color",    isString, defaultColor ) ,
            opac                 = setOption ( options,  "alpha",    isAmplitude, defaultOpac ) ,
            y                    = setOption ( position, "y",        isNumber, 0),
            x                    = setOption ( position, "x",        isNumber, 0),
            z                    = setOption ( position, "z",        isNumber, 0),
            diffuse              = setOption ( colors,   "diffuse",  isString, "#F0F0F0"),
            specular             = setOption ( colors,   "specular", isString, "#000000"),
            ambient              = setOption ( colors,   "ambient",  isString, "#F0F0F0"),
            emissive             = setOption ( colors,   "emissive", isString, basicColor),
            fontSpec             = FONTS[fontFamily],
            letterScale          = round(scale*rawheight/naturalLetterHeight),
            thickness            = round(scale*rawThickness),
            letters              = isString(lttrs) ? lttrs : "" ;

        //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  
        // Now all the parameters are set, let's get to business
        // First create the material
        material                 = makeMaterial(scene, letters, emissive, ambient, specular, diffuse, opac);

        //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  
        // Next, create the meshes
        // This creates an array of meshes, one for each letter
        // It also creates two other arrays, which are used for letter positioning
        meshesAndBoxes           = constructLetterPolygons(letters, fontSpec, 0, 0, 0, letterScale, thickness, material, meshOrigin);
        meshes                   = meshesAndBoxes[0];
        lettersBoxes             = meshesAndBoxes[1];
        lettersOrigins           = meshesAndBoxes[2];
        xWidth                   = meshesAndBoxes.xWidth;           

        //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  
        // The meshes are converted into particles of an SPS
        combo                    = makeSPS(scene, meshesAndBoxes, material);
        sps                      = combo[0];
        mesh                     = combo[1];

        //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  
        // Set the final SPS-mesh position according to parameters
        offsetX                  = anchor==="right" ? (0-xWidth) : ( anchor==="center" ? (0-xWidth/2) : 0 );
        mesh.position.x          = scale*x+offsetX;
        mesh.position.y          = scale*y;
        mesh.position.z          = scale*z;

        this.getSPS              = ()  => sps;
        this.getMesh             = ()  => mesh;
        this.getMaterial         = ()  => material;
        this.getOffsetX          = ()  => offsetX;
        this.getLettersBoxes     = ()  => lettersBoxes;
        this.getLettersOrigins   = ()  => lettersOrigins;
        this.color               = c   => isString(c)?color=c:color;
        this.alpha               = o   => isAmplitude(o)?opac=o:opac;
        this.clearall            = function()  {sps=null;mesh=null;material=null};
      };
      //  CONSTRUCTOR  CONSTRUCTOR  CONSTRUCTOR  CONSTRUCTOR
      // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*

      proto                      = MeshWriter.prototype;

      proto.setColor             = function(color){
        var material             = this.getMaterial();
        if(isString(color)){
          material.emissiveColor = rgb2Bcolor3(this.color(color));
        }
      };
      proto.setAlpha             = function(alpha){
        var material             = this.getMaterial();
        if(isAmplitude(alpha)){
          material.alpha         = this.alpha(alpha)
        }
      };
      proto.overrideAlpha        = function(alpha){
        var material             = this.getMaterial();
        if(isAmplitude(alpha)){
          material.alpha         = alpha
        }
      };
      proto.resetAlpha           = function(){
        var material             = this.getMaterial();
        material.alpha           = this.alpha()
      };
      proto.getLetterCenter      = function(ix){
        return new BABYLON.Vector2(0,0)
      }
      proto.dispose              = function(){
        var mesh                 = this.getMesh(),
            sps                  = this.getSPS(),
            material             = this.getMaterial();
        if(sps){sps.dispose()}
        this.clearall()
      };
      MeshWriter.codeList        = codeList;
      MeshWriter.decodeList      = decodeList;

      return MeshWriter;

    };
    if ( typeof window !== "undefined" ) {
      window.TYPE                = Wrapper;
      window.MeshWriter          = Wrapper
    }
    if ( typeof global !== "undefined" ) {
      global.MeshWriter          = Wrapper
    }
    if ( typeof BABYLON === "object" ) {
      BABYLON.MeshWriter         = Wrapper;
      supplementCurveFunctions();
    };
    if (  true && module.exports ) {
      module.exports             = Wrapper;
    }
    return Wrapper;

    //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =
    // MakeSPS turns the output of constructLetterPolygons into an SPS
    // with the whole string, with appropriate offsets
    function makeSPS(scene,meshesAndBoxes,material){
      var meshes                 = meshesAndBoxes[0],
          lettersOrigins         = meshesAndBoxes[2],sps,spsMesh;
      if(meshes.length){
        sps                      = new BABYLON.SolidParticleSystem("sps"+"test",scene, { } );
        meshes.forEach(function(mesh,ix){
          sps.addShape(mesh, 1, {positionFunction: makePositionParticle(lettersOrigins[ix])});
          mesh.dispose()
        });
        spsMesh                  = sps.buildMesh();
        spsMesh.material         = material;
        sps.setParticles()
      }
      return [sps,spsMesh];

      function makePositionParticle(letterOrigins){
        return function positionParticle(particle,ix,s){
          particle.position.x    = letterOrigins[0]+letterOrigins[1];
          particle.position.z    = letterOrigins[2]
        }
      }
    };

    //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =
    // Takes specifications and returns an array with three elements, each of which
    // is an array (length of each array === the number of incoming characters)
    //   ~ the meshes (not offset by position)
    //   ~ the boxes (to help with positions features) 
    //   ~ the letter origins (providing offset for each letter)
    function constructLetterPolygons(letters, fontSpec, xOffset, yOffset, zOffset, letterScale, thickness, material, meshOrigin){
      var letterOffsetX          = 0,
          lettersOrigins         = new Array(letters.length),
          lettersBoxes           = new Array(letters.length),
          lettersMeshes          = new Array(letters.length),
          ix                     = 0, letter, letterSpec, lists, shapesList, holesList, letterMeshes, letterBox, letterOrigins, meshesAndBoxes, i;

      for(i=0;i<letters.length;i++){
        letter                   = letters[i];
        letterSpec               = makeLetterSpec(fontSpec,letter);
        if(isObject(letterSpec)){
          lists                  = buildLetterMeshes(letter, i, letterSpec, fontSpec.reverseShapes, fontSpec.reverseHoles);
          shapesList             = lists[0];
          holesList              = lists[1];
          letterBox              = lists[2];
          letterOrigins          = lists[3];

          // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
          // This subtracts the holes, if any, from the shapes and merges the shapes
          // (Many glyphs - 'i', '%' - have multiple shapes)
          // At the end, there is one mesh per glyph, as God intended
          letterMeshes           = punchHolesInShapes(shapesList,holesList);
          if(letterMeshes.length){
            lettersMeshes[ix]    = merge(letterMeshes);
            lettersOrigins[ix]   = letterOrigins;
            lettersBoxes[ix]     = letterBox;
            ix++
          }
        }
      };
      meshesAndBoxes             = [lettersMeshes,lettersBoxes,lettersOrigins];
      meshesAndBoxes.xWidth      = round(letterOffsetX);
      meshesAndBoxes.count       = ix;
      return meshesAndBoxes;

      //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =
      // A letter may have one or more shapes and zero or more holes
      // The shapeCmds is an array of shapes
      // The holeCmds is an array of array of holes, the outer array lining up with
      // the shapes array and the inner array permitting more than one hole per shape
      // (Think of the letter 'B', with one shape and two holes, or the symbol
      // '%' which has three shapes and two holes)
      // 
      // For mystifying reasons, the holeCmds (provided by the font) must be reversed
      // from the original order and the shapeCmds must *not* be reversed
      // UNLESS the font is Jura, in which case the holeCmds are not reversed
      // (Possibly because the Jura source is .otf, and the others are .ttf)
      //
      // *WARNING*                                                         *WARNING*
      // buildLetterMeshes performs a lot of arithmetic for offsets to support
      // symbol reference points, BABYLON idiocyncracies, font idiocyncracies,
      // symbol size normalization, the way curves are specified and "relative"
      // coordinates.  (Fonts use fixed coordinates but many other SVG-style
      // symbols use relative coordinates)
      // *WARNING*                                                         *WARNING*
      //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =

      function buildLetterMeshes(letter, index, spec, reverseShapes, reverseHoles){

        // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        // A large number of offsets are created, per warning
        var balanced             = meshOrigin === "letterCenter",
            centerX              = (spec.xMin+spec.xMax)/2,
            centerZ              = (spec.yMin+spec.yMax)/2,
            xFactor              = isNumber(spec.xFactor)?spec.xFactor:1,
            zFactor              = isNumber(spec.yFactor)?spec.yFactor:1,
            xShift               = isNumber(spec.xShift)?spec.xShift:0,
            zShift               = isNumber(spec.yShift)?spec.yShift:0,
            reverseShape         = isBoolean(spec.reverseShape)?spec.reverseShape:reverseShapes,
            reverseHole          = isBoolean(spec.reverseHole)?spec.reverseHole:reverseHoles,
            offX                 = xOffset-(balanced?centerX:0),
            offZ                 = zOffset-(balanced?centerZ:0),
            shapeCmdsLists       = isArray(spec.shapeCmds) ? spec.shapeCmds : [],
            holeCmdsListsArray   = isArray(spec.holeCmds) ? spec.holeCmds : [] , letterBox, letterOrigins;

        // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        // Several scaling functions are created too, per warning
        var adjX                 = makeAdjust(letterScale,xFactor,offX,0,false,true),                     // no shift
            adjZ                 = makeAdjust(letterScale,zFactor,offZ,0,false,false),
            adjXfix              = makeAdjust(letterScale,xFactor,offX,xShift,false,true),                // shifted / fixed
            adjZfix              = makeAdjust(letterScale,zFactor,offZ,zShift,false,false),
            adjXrel              = makeAdjust(letterScale,xFactor,offX,xShift,true,true),                 // shifted / relative
            adjZrel              = makeAdjust(letterScale,zFactor,offZ,zShift,true,false),
            thisX, lastX, thisZ, lastZ, minX=NaN, maxX=NaN, minZ=NaN, maxZ=NaN, minXadj=NaN, maxXadj=NaN, minZadj=NaN, maxZadj=NaN;

        letterBox                = [ adjX(spec.xMin), adjX(spec.xMax), adjZ(spec.yMin), adjZ(spec.yMax) ];
        letterOrigins            = [ round(letterOffsetX), -1*adjX(0), -1*adjZ(0) ];

        // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        // Scope warning:  letterOffsetX belongs to an outer closure
        // and persists through multiple characters
        letterOffsetX            = letterOffsetX+spec.wdth*letterScale;

        if(debug&&spec.show){
          console.log([minX,maxX,minZ,maxZ]);
          console.log([minXadj,maxXadj,minZadj,maxZadj])
        }

        return [ shapeCmdsLists.map(makeCmdsToMesh(reverseShape)) , holeCmdsListsArray.map(meshesFromCmdsListArray) , letterBox , letterOrigins ] ;

        function meshesFromCmdsListArray(cmdsListArray){
          return cmdsListArray.map(makeCmdsToMesh(reverseHole))
        };
        function makeCmdsToMesh(reverse){
          return function cmdsToMesh(cmdsList){
            var cmd              = getCmd(cmdsList,0),
                path             = new BABYLON.Path2(adjXfix(cmd[0]), adjZfix(cmd[1])), array, meshBuilder, j, last, first = 0;

            // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
            // Array length is used to determine curve type in the 'TheLeftover Font Format'  (TLFF)
            // 
            // IDIOCYNCRACY:  Odd-length arrays indicate relative coordinates; the first digit is discarded
            
            for ( j=1 ; j<cmdsList.length ; j++ ) {
              cmd                = getCmd(cmdsList,j);

              // ~  ~  ~  ~  ~  ~  ~  ~
              // Line
              if(cmd.length===2){
                path.addLineTo(adjXfix(cmd[0]),adjZfix(cmd[1])) 
              }
              if(cmd.length===3){
                path.addLineTo(adjXrel(cmd[1]),adjZrel(cmd[2]));
              }

              // ~  ~  ~  ~  ~  ~  ~  ~
              // Quadratic curve
              if(cmd.length===4){
                path.addQuadraticCurveTo(adjXfix(cmd[0]),adjZfix(cmd[1]),adjXfix(cmd[2]),adjZfix(cmd[3]))
              }
              if(cmd.length===5){
                path.addQuadraticCurveTo(adjXrel(cmd[1]),adjZrel(cmd[2]),adjXrel(cmd[3]),adjZrel(cmd[4]));
              }

              // ~  ~  ~  ~  ~  ~  ~  ~
              // Cubic curve
              if(cmd.length===6){
                path.addCubicCurveTo(adjXfix(cmd[0]),adjZfix(cmd[1]),adjXfix(cmd[2]),adjZfix(cmd[3]),adjXfix(cmd[4]),adjZfix(cmd[5]))
              }
              if(cmd.length===7){
                path.addCubicCurveTo(adjXrel(cmd[1]),adjZrel(cmd[2]),adjXrel(cmd[3]),adjZrel(cmd[4]),adjXrel(cmd[5]),adjZrel(cmd[6]))
              }
            }
            // Having created a Path2 instance with BABYLON utilities,
            // we turn it into an array and discard it
            array                = path.getPoints().map(point2Vector);

            // Sometimes redundant coordinates will cause artifacts - delete them!
            last                 = array.length - 1 ;
            if ( array[first].x===array[last].x && array[first].y===array[last].y ) { array = array.slice(1) }
            if ( reverse ) { array.reverse() }

            meshBuilder          = new BABYLON.PolygonMeshBuilder("MeshWriter-"+letter+index+"-"+weeid(), array, scene, earcut);
            return meshBuilder.build(true,thickness)
          }
        };
        function getCmd(list,ix){
          var cmd,len;
          lastX                  = thisX;
          lastZ                  = thisZ;
          cmd                    = list[ix];
          len                    = cmd.length;
          thisX                  = isRelativeLength(len) ? round((cmd[len-2]*xFactor)+thisX) : round(cmd[len-2]*xFactor);
          thisZ                  = isRelativeLength(len) ? round((cmd[len-1]*zFactor)+thisZ) : round(cmd[len-1]*zFactor);
          minX                   = thisX>minX?minX:thisX;
          maxX                   = thisX<maxX?maxX:thisX;
          minXadj                = thisX+xShift>minXadj?minXadj:thisX+xShift;
          maxXadj                = thisX+xShift<maxXadj?maxXadj:thisX+xShift;
          minZ                   = thisZ>minZ?minZ:thisZ;
          maxZ                   = thisZ<maxZ?maxZ:thisZ;
          minZadj                = thisZ+zShift>minZadj?minZadj:thisZ+zShift;
          maxZadj                = thisZ+zShift<maxZadj?maxZadj:thisZ+zShift;
          return cmd
        };

        // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
        // Returns the a scaling function, based on incoming parameters
        function makeAdjust(letterScale,factor,off,shift,relative,xAxis){
          if(relative){
            if(xAxis){
              return val => round(letterScale*((val*factor)+shift+lastX+off))
            }else{
              return val => round(letterScale*((val*factor)+shift+lastZ+off))
            }
          }else{
            return val => round(letterScale*((val*factor)+shift+off))
          }
        }
      };

      // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
      function punchHolesInShapes(shapesList,holesList){
        var letterMeshes         = [],j;
        for ( j=0 ; j<shapesList.length ; j++ ) {
          let shape              = shapesList[j];
          let holes              = holesList[j];
          if(isArray(holes)&&holes.length){
            letterMeshes.push ( punchHolesInShape(shape,holes,letter,i) )
          }else{
            letterMeshes.push ( shape )
          }
        }
        return letterMeshes
      };
      function punchHolesInShape(shape,holes,letter,i){
        var csgShape             = BABYLON.CSG.FromMesh(shape),k;
        for ( k=0; k<holes.length ; k++ ) {
          csgShape               = csgShape.subtract(BABYLON.CSG.FromMesh(holes[k]))
        }
        holes.forEach(h=>h.dispose());
        shape.dispose();
        return csgShape.toMesh("Net-"+letter+i+"-"+weeid())
      };
    };

    function makeMaterial(scene,letters,emissive,ambient,specular,diffuse,opac){
      var cm0                    = new BABYLON.StandardMaterial("mw-matl-"+letters+"-"+weeid(), scene);
      cm0.diffuseColor           = rgb2Bcolor3(diffuse);
      cm0.specularColor          = rgb2Bcolor3(specular);
      cm0.ambientColor           = rgb2Bcolor3(ambient);
      cm0.emissiveColor          = rgb2Bcolor3(emissive);
      cm0.alpha                  = opac;
      return cm0
    };

    // ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~  ~
    // These add two functions to Path2, which are needed for making font curves
    // 
    // Thanks Gijs, wherever you are
    // 
    function supplementCurveFunctions(){

      if ( !BABYLON.Path2.prototype.addQuadraticCurveTo ) {
        BABYLON.Path2.prototype.addQuadraticCurveTo = function(redX, redY, blueX, blueY){
          var points             = this.getPoints();
          var lastPoint          = points[points.length - 1];
          var origin             = new BABYLON.Vector3(lastPoint.x, lastPoint.y, 0);
          var control            = new BABYLON.Vector3(redX, redY, 0);
          var destination        = new BABYLON.Vector3(blueX, blueY, 0);
          var nb_of_points       = curveSampleSize;
          var curve              = BABYLON.Curve3.CreateQuadraticBezier(origin, control, destination, nb_of_points);
          var curvePoints        = curve.getPoints();
          for(var i=1; i<curvePoints.length; i++){
            this.addLineTo(curvePoints[i].x, curvePoints[i].y);
          }
        }
      }
      if ( !BABYLON.Path2.prototype.addCubicCurveTo ) {
        BABYLON.Path2.prototype.addCubicCurveTo = function(redX, redY, greenX, greenY, blueX, blueY){
          var points             = this.getPoints();
          var lastPoint          = points[points.length - 1];
          var origin             = new BABYLON.Vector3(lastPoint.x, lastPoint.y, 0);
          var control1           = new BABYLON.Vector3(redX, redY, 0);
          var control2           = new BABYLON.Vector3(greenX, greenY, 0);
          var destination        = new BABYLON.Vector3(blueX, blueY, 0);
          var nb_of_points       = Math.floor(0.3+curveSampleSize*1.5);
          var curve              = BABYLON.Curve3.CreateCubicBezier(origin, control1, control2, destination, nb_of_points);
          var curvePoints        = curve.getPoints();
          for(var i=1; i<curvePoints.length; i++){
            this.addLineTo(curvePoints[i].x, curvePoints[i].y);
          }
        }
      }
    }

    // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
    //     FONT COMPRESSING AND DECOMPRESSING     FONT COMPRESSING AND DECOMPRESSING 
    //
    // One can reduce file size by 50% with a content-specific compression of font strings
    // Each letter object potentially has two long values, "shapeCmds" and "holeCmds"
    // These may be optionally compressed during construction of the file
    // The compressed versions are placed in "sC" and "hC"
    // The *first* time a letter is used, if it was compressed, it is decompressed
    function makeLetterSpec(fontSpec,letter){
      var letterSpec             = fontSpec[letter],
          singleMap              = cmds      => decodeList(cmds),
          doubleMap              = cmdslists => isArray(cmdslists)?cmdslists.map(singleMap):cmdslists;

      if(isObject(letterSpec)){
        if(!isArray(letterSpec.shapeCmds)&&isArray(letterSpec.sC)){
          letterSpec.shapeCmds   = letterSpec.sC.map(singleMap)
          letterSpec.sC          = null;
        }
        if(!isArray(letterSpec.holeCmds)&&isArray(letterSpec.hC)){
          letterSpec.holeCmds    = letterSpec.hC.map(doubleMap);
          letterSpec.hC          = null;
        }
      }
      return letterSpec;
    };

    function decodeList(str){
      var split    = str.split(" "),
          list     = [];
      split.forEach(function(cmds){
        if(cmds.length===12){list.push(decode6(cmds))}
        if(cmds.length===8) {list.push(decode4(cmds))}
        if(cmds.length===4) {list.push(decode2(cmds))}
      });
      return list
      function decode6(s){return [decode1(s,0,2),decode1(s,2,4),decode1(s,4,6),decode1(s,6,8),decode1(s,8,10),decode1(s,10,12)]};
      function decode4(s){return [decode1(s,0,2),decode1(s,2,4),decode1(s,4,6),decode1(s,6,8)]};
      function decode2(s){return [decode1(s,0,2),decode1(s,2,4)]};
      function decode1(s,start,end){return (frB128(s.substring(start,end))-4000)/2};
    };
    function codeList(list){
      var str   = "",
          xtra  = "";
      if(isArray(list)){
        list.forEach(function(cmds){
          if(cmds.length===6){str+=xtra+code6(cmds);xtra=" "}
          if(cmds.length===4){str+=xtra+code4(cmds);xtra=" "}
          if(cmds.length===2){str+=xtra+code2(cmds);xtra=" "}
        });
      }
      return str;

      function code6(a){return code1(a[0])+code1(a[1])+code1(a[2])+code1(a[3])+code1(a[4])+code1(a[5])};
      function code4(a){return code1(a[0])+code1(a[1])+code1(a[2])+code1(a[3])};
      function code2(a){return code1(a[0])+code1(a[1])};
      function code1(n){return toB128((n+n)+4000)};
    };

    function frB128(s){
      var result=0,i=-1,l=s.length-1;
      while(i++<l){result = result*128+b128back[s.charCodeAt(i)]}
      return result;
    };
    function toB128(i){
      var s                      = b128digits[(i%128)];
      i                          = Γ(i/128);
      while (i>0) {
        s                        = b128digits[(i%128)]+s;
        i                        = Γ(i/128);
      }
      return s;
    };
    function prepArray(){
      var pntr                   = -1,n;
      b128back                   = new Uint8Array(256);
      b128digits                 = new Array(128);
      while(160>pntr++){
        if(pntr<128){
          n                      = fr128to256(pntr);
          b128digits[pntr]       = String.fromCharCode(n);
          b128back[n]            = pntr
        }else{
          if(pntr===128){
            b128back[32]         = pntr
          }else{
            b128back[pntr+71]    = pntr
          }
        }
      };
      function fr128to256(n){if(n<92){return n<58?n<6?n+33:n+34:n+35}else{return n+69}}
    };
    //     FONT COMPRESSING AND DECOMPRESSING     FONT COMPRESSING AND DECOMPRESSING 
    // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*

    // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
    //     PARAMETER QUALIFYING AND DEFAULTING     PARAMETER QUALIFYING AND DEFAULTING 
    // 
    // Screening and defaulting functions for incoming parameters
    function makePreferences(args){
      var prefs = {},p;
      if(isObject(p=args[1])){
        if(p["default-font"]){prefs.defaultFont=p["default-font"]}else{if(p.defaultFont){prefs.defaultFont=p.defaultFont}}
        if(p["mesh-origin"]){prefs.meshOrigin=p["mesh-origin"]}else{if(p.meshOrigin){prefs.meshOrigin=p.meshOrigin}}
        if(p.scale){prefs.scale=p.scale}
        if(isBoolean(p.debug)){prefs.debug=p.debug}
        return prefs
      }else{
        return { defaultFont: args[2] , scale: args[1] , debug: false }
      }
    };

    //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  
    // Applies a test to potential incoming parameters
    // If the test passes, the parameters are used, otherwise the default is used
    function setOption(opts, field, tst, defalt) { return tst(opts[field]) ? opts[field] : defalt };

    //     PARAMETER QUALIFYING AND DEFAULTING     PARAMETER QUALIFYING AND DEFAULTING 
    // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*

    // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
    // Conversion functions
    function rgb2Bcolor3(rgb){
      rgb                        = rgb.replace("#","");
      return new BABYLON.Color3(convert(rgb.substring(0,2)),convert(rgb.substring(2,4)),convert(rgb.substring(4,6)));
      function convert(x){return Γ(1000*Math.max(0,Math.min((isNumber(parseInt(x,16))?parseInt(x,16):0)/255,1)))/1000}
    };
    function point2Vector(point){
      return new BABYLON.Vector2(round(point.x),round(point.y))
    };
    function merge(arrayOfMeshes){
      return arrayOfMeshes.length===1 ? arrayOfMeshes[0] : BABYLON.Mesh.MergeMeshes(arrayOfMeshes, true)
    };

    // *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-* *-*=*  *=*-*
    // Boolean test functions
    function isPositiveNumber(mn) { return typeof mn === "number" && !isNaN(mn) ? 0 < mn : false } ;
    function isNumber(mn)         { return typeof mn === "number" } ;
    function isBoolean(mn)        { return typeof mn === "boolean" } ;
    function isAmplitude(ma)      { return typeof ma === "number" && !isNaN(ma) ? 0 <= ma && ma <= 1 : false } ;
    function isObject(mo)         { return mo != null && typeof mo === "object" || typeof mo === "function" } ;
    function isArray(ma)          { return ma != null && typeof ma === "object" && ma.constructor === Array } ; 
    function isString(ms)         { return typeof ms === "string" ? ms.length>0 : false }  ;
    function isSupportedFont(ff)  { return isObject(FONTS[ff]) } ;
    function isSupportedAnchor(a) { return a==="left"||a==="right"||a==="center" } ;
    function isRelativeLength(l)  { return l===3||l===5||l===7 } ;
    function weeid()              { return Math.floor(Math.random()*1000000) } ;
    function round(n)             { return Γ(0.3+n*1000000)/1000000 }
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//  HIRUKOPRO-BOOK  HIRUKOPRO-BOOK  HIRUKOPRO-BOOK  HIRUKOPRO-BOOK 
//
//

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){

    return function(codeList){

      var hpb={reverseHoles:false,reverseShapes:true},nbsp="\u00A0";
      // Letters seems to go from about -250 to 850
      hpb["A"]                     = {
        sC                         : ["KPB, KPA}K-A[ J­A:JVA: I«A:IkA± IZB< H»CuH§Cw DgCw DVCwDTCk C¥A± C_A:B·A: B_A:B=A` A¿A§A¿B4 A¿BNB4B¥ E¥LR EÃLÃFoLÃ FoLÃ GNLÃGqL: KHBV KPB>KPB,"],
        hC                         : [["FwI} FuI}FsIy FqIu E0Ee E.EcE.E] E.ETE8ET H2ET H<ETH<E_ H<EcH:Ee F{Iu F{I}FwI}"]],
        xMin                       : 45,
        xMax                       : 647,
        yMin                       : -4,
        yMax                       : 751,
        wdth                       : 683
      };
      hpb["B"]                     = {
        sC                         : ["B6BZ B6K} B6LBB_Lq B©LÁCDLÁ E8LÁ FmLÁGdL) HZK4HZI© HZHiGwGo HTG2HªFP I:EoI:D{ I:C>H:B@ G:ABE}AB CDAB B©ABB_An B6A»B6BZ"],
        hC                         : [["CÃFP CÃC8 CÃC*D.C* EyC* FcC*F¼Cn GPD0GPD¥ GPETF¼E» FcF]EyF] D,F] CÃFZCÃFP","CÃK% CÃH> CÃH0D,H0 E6H0 E¹H2FGHq FyI.FyIw FyJ>FFJ{ E·K6E0K6 D.K6 CÃK6CÃK%"]],
        xMin                       : 58,
        xMax                       : 508,
        yMin                       : 0,
        yMax                       : 750,
        wdth                       : 545
      };
      hpb["C"]                     = {
        sC                         : ["H#A2 EiA2C©B¶ B#DuB#G. B#IkC¨KL EgM.H#M. JDM.K¥K­ L@KTL@J¿ L@JkKÁJI K}J(KLJ( JÃJ(JuJN IgKDH!KD F@K@E&J% C±H¯C±G. C±E_E0D? FRBÃH#B½ IkBÁJuC³ K%D8KLD8 K}D8KÁC¹ L@CuL@CD L@B¯K£BT JFA2H#A2"],
        xMin                       : 49,
        xMax                       : 703,
        yMin                       : -8,
        yMax                       : 758,
        wdth                       : 741
      };
      hpb["D"]                     = {
        sC                         : ["EµAB C0AB B£ABB[Ad B6A§B6B4 B6KÃ B6LXBZL| B¡LÁC4LÁ EµLÁ HHLÁJ#KA K£IeK£G0 K£D{J$BÁ HJABEµAB"],
        hC                         : [["E¹K4 D,K4 CÃK4CÃK* CÃC6 CÃC*D,C* EµC* GmC*H¥D@ I»EVI»G0 I»H¯H¨IÃ GsK4E¹K4"]],
        xMin                       : 58,
        xMax                       : 671,
        yMin                       : 0,
        yMax                       : 750,
        wdth                       : 708
      };
      hpb["E"]                     = {
        sC                         : ["HFB6 HFA£GÂAb GyABG@AB C*AB B6ABB6Ba B6K{ B6LÁC(LÁ GTLÁ G£LÁGÂL~ H>L]H>KÁ H>KsGÄKS G§K4GTK4 D,K4 CÃK4CÃK* CÃH2 CÃH(D,H( GTH( G¥H(H#G© HFGeHFG4 HFF¥H$Fa G§F>GTF> D,F> CÃF>CÃF4 CÃC6 CÃC*D,C* GTC* G¥C*H#B« HFBgHFB6"],
        xMin                       : 58,
        xMax                       : 450,
        yMin                       : 0,
        yMax                       : 750,
        wdth                       : 488
      };
      hpb["F"]                     = {
        sC                         : ["HFG4 HFF¥H$Fa G§F>GTF> D,F> CÃF>CÃF2 CÃBV CÃA6C,A6 B6A6B6BV B6L* B6L_BWL¡ ByLÁC%LÁ GTLÁ G¡LÁGÂL¡ H@L_H@L2 H@K4G%K4 D,K4 CÃK4CÃK( CÃH4 CÃH(D,H( GTH( G¥H(H#G© HFGeHFG4"],
        xMin                       : 58,
        xMax                       : 450,
        yMin                       : -6,
        yMax                       : 750,
        wdth                       : 485
      };
      hpb["G"]                     = {
        sC                         : ["L¥FL L¥C¥ L¥C8LHB} K£B0JmAr IXA2H%A2 EiA2C«Bµ B(DsB(G0 B(IoC«KN EiM.H%M. J@M.K±K¡ LDKRLDJ¿ LDJmL!JI K£J%KVJ% K!J%J¡JF IoKDH%KD FJKDE-J( C³H¯C³G0 C³ETE-D7 FJB½H%B½ I:B½J)CK J»C}J»D2 J»ET J·EXJ³EX H@EX G³EXGqE{ GPE¿GPFL GPF¡GqFÂ G³G@H@G@ K]G@ L0G@LYG& L¥F±L¥FL"],
        xMin                       : 51,
        xMax                       : 736,
        yMin                       : -8,
        yMax                       : 758,
        wdth                       : 774
      };
      hpb["H"]                     = {
        sC                         : ["ILA: H¿A:H{AZ HXA{HXB* HXF0 HXF<HLF< D*F< CÁF<CÁF0 CÁB* CÁA{C~AZ C]A:C*A: B{A:BXAZ B6A{B6B* B6L4 B6LeBXL¨ B{M%C*M% C]M%C~L© CÁLgCÁL4 CÁH2 CÁH%D*H% HLH% HXH%HXH2 HXL4 HXLeH{L¨ H¿M%ILM% I¡M%IÂL© J@LgJ@L4 J@B* J@A{IÂAZ I¡A:ILA:"],
        xMin                       : 58,
        xMax                       : 575,
        yMin                       : -4,
        yMax                       : 754,
        wdth                       : 614
      };
      hpb["I"]                     = {
        sC                         : ["C*A: B{A:BXAZ B6A{B6B* B6L4 B6LcBXL§ B{M%C*M% C]M%C~L© CÁLgCÁL4 CÁB* CÁA}C~A[ C]A:C*A:"],
        xMin                       : 58,
        xMax                       : 174,
        yMin                       : -4,
        yMax                       : 754,
        wdth                       : 213
      };
      hpb["J"]                     = {
        xMin                       : 58,
        xMax                       : 174,
        yMin                       : -4,
        yMax                       : 754,
        wdth                       : 213
      };
      hpb["K"]                     = {
        sC                         : ["C*A: B6A:B6BT B6L4 B6L]B]L~ B¥LÁC,LÁ CcLÁC£Ly CÁLRCÁL( CÁG· CÁG¯D!G¯ G#Lo GBM!G¥M! H4M!HWL¢ H{L]H{L0 H{K±HiKu E­GJ E£G>E£G. E£F¿E­F± HiBk H{BNH{B0 H{B( HwA{HSA[ H0A<G¥A< GsA<GgA? GZABGRAE GJAHG?AS G4A_G0Ad G,AiFÂA{ FµA¯F¯Aµ D%FJ CÃFP CÁFPCÁB* CÁA}C~A[ C]A:C*A:"],
        xMin                       : 58,
        xMax                       : 476,
        yMin                       : -4,
        yMax                       : 752,
        wdth                       : 519
      };
      hpb["L"]                     = {
        sC                         : ["H2B6 H2A©G´Ae GqABG@AB C.AB B¡ABBZAa B6A¡B6B2 B6L8 B6LiBWL« ByM(C*M( C]M(C~L¬ CÁLkCÁL8 CÁC< CÁC*D0C* G@C* GsC*GµB¬ H2BiH2B6"],
        xMin                       : 50,
        xMax                       : 440,
        yMin                       : 0,
        yMax                       : 755,
        wdth                       : 474
      };
      hpb["M"]                     = {
        sC                         : ["G§DL J>KV J£M%K«M% MFM%MFJÁ MFB* MFA}M!A[ L¡A:LLA: KÁA:K¡AZ K_A{K_B% K_H£ K_IcK]Iµ KXIµK8I2 JÁHeJMF¢ I}D½I6CX HsA¹ HTA:G¡A: G!A:F©A· D_H£ D:IiD%I» D!I8D!H© D!B0 D!A¡C¤A] CaA:C.A: B¡A:BZA[ B6A}B6B* B6JÁ B6K³BjL[ B¿M%CuM% D.M%D`L¡ D³LVE!K» GuDL GwDDG}DD G¥DDG§DL"],
        xMin                       : 58,
        xMax                       : 770,
        yMin                       : -4,
        yMax                       : 754,
        wdth                       : 808
      };
      hpb["N"]                     = {
        sC                         : ["CRM% D4M#DmLJ IBDk IHD_IND_ IZD_IZDo IZL6 IZLgI|L© I¿M%JNM% J£M%K!L© KDLgKDL4 KDBZ KDA¿J¼Al JoA:J%A: J%A: IBA:H¯A¹ D8Is D2I}D,I} CÁI}CÁIm CÁB* CÁAyC¡AY C_A:C,A: B{A:BXAZ B6A{B6B* B6K§ B6LHBdLx B³M%CRM%"],
        xMin                       : 58,
        xMax                       : 641,
        yMin                       : -4,
        yMax                       : 754,
        wdth                       : 679
      };
      hpb["O"]                     = {
        sC                         : ["C«Bµ B(DsB(G0 B(IoC«KN EiM.H%M. JeM.LDKN N#IoN#G0 N#DsLDBµ JeA2H%A2 EiA2C«Bµ"],
        hC                         : [["E-J( C³H¯C³G0 C³ETE-D7 FJB½H%B½ I¥B½JÁD7 L:ETL:G0 L:H¯JÁJ( I¥KDH%KD FJKDE-J("]],
        xMin                       : 51,
        xMax                       : 817,
        yMin                       : -8,
        yMax                       : 758,
        wdth                       : 854
      };
      hpb["P"]                     = {
        sC                         : ["C(A: ByA:BWA^ B6A£B6B0 B6K§ B6LFB^Ls B§LÁCDLÁ EBLÁ F£LÁG|KÀ HwJ¿HwI] HwG½G|F¸ F£E³EBE³ D*E³ CÁE³CÁE§ CÁB0 CÁA¡C}A] CZA:C(A:"],
        hC                         : [["CÁK% CÁG§ CÁGyD.Gy E*Gy F!GyFXH? F±H©F±I] F±J.FXJs F!K6E*K6 D.K6 CÁK6CÁK%"]],
        xMin                       : 58,
        xMax                       : 474,
        yMin                       : -4,
        yMax                       : 750,
        wdth                       : 509
      };
      hpb["Q"]                     = {
        sC                         : ["LuAP L]AFLFAF L%AFK®AZ KqAoK<B% I§A2H%A2 EiA2C«Bµ B(DsB(G0 B(IoC«KN EiM.H%M. JeM.LDKN N#IoN#G0 N#D¹LmC> M(B§ MBBmMFB8 MFAµM/Av L»AXLuAP"],
        hC                         : [["E-J( C³H¯C³G0 C³ETE-D7 FJB½H%B½ I!B½I¹CT I±C]IyCr IcC©IZC² IRC»ICD) I4D:I-DF I%DRHÄDb H¿DqH¿D¡ H¿E,I@EQ IeEwI³Ew J:EwJ_ER KFDg L:EwL:G0 L:H¯JÁJ( I¥KDH%KD FJKDE-J("]],
        xMin                       : 51,
        xMax                       : 817,
        yMin                       : -8,
        yMax                       : 758,
        wdth                       : 854
      };
      hpb["R"]                     = {
        sC                         : ["HÃAL H¡A8H]A8 H2A8G»AQ G¡AkGaAÃ ENE© EHEµE:Eµ D*Eµ CÁEµCÁE© CÁBX CÁA:C%A: B4A:B4BZ B4K§ B4LFB[Ls B¥LÁC@LÁ EDLÁ G!LÁH#L% I%K.I%IV I%GFGDF8 G>F6G>F0 G>F.G>F. G@F* IJBZ IVBBIVB* IVAmHÃAL"],
        hC                         : [["CÁK% CÁGy CÁGkD,Gk ETGk G@GkG@IV G@J2F­Ju FTK6ETK6 D,K6 CÁK6CÁK%"]],
        xMin                       : 57,
        xMax                       : 522,
        yMin                       : -5,
        yMax                       : 750,
        wdth                       : 563
      };
      hpb["S"]                     = {
        sC                         : ["B%CZ B%C«BDD( BcDHB­DH C.DHCKD6 CiD#C¢C­ C¹CqD/CV DHC<DpC* D¹B»EFB» E³B»FJCT F§C³F§D_ F§D_ F§EDFDE{ E§F0D³FZ C]F¿B¥G¤ B(HgB(I£ B(K:BÃL3 C»M,EPM, FDM,G*Lp G³L2H<KJ HFK0HFJ½ HFJkH#JG G¥J#GRJ# F³J#FmJe F6KBEHKB D£KBDIJ® CµJTCµI¯ CµIsC»I[ CÁIDD$I3 D,I!D>H´ DPH£DYHx DcHoD¡Ha D½HRE#HM E.HHEPH: EsH,E}H( G@GRG¸Fn HkE«HkD_ HkC.GpB0 FuA2ELA2 D#A2C$A­ B%BcB%CZ"],
        xMin                       : 50,
        xMax                       : 468,
        yMin                       : -8,
        yMax                       : 757,
        wdth                       : 505
      };
      hpb["T"]                     = {
        sC                         : ["I%Ly IPLRIPL% IPK{I.KW H¯K4HaK4 FuK4 FgK4FgK! FgB% FgAyFDAY F!A:EsA: E@A:DÁAX D}AwD}B% D}K( D}K4DqK4 B©K4 BZK4B8KW A¹K{A¹L% A¹LNB9Lw B]LÁB©LÁ HaLÁ H}LÁI%Ly"],
        xMin                       : 42,
        xMax                       : 519,
        yMin                       : -4,
        yMax                       : 750,
        wdth                       : 556
      };
      hpb["U"]                     = {
        sC                         : ["B0Dm B0L4 B0LeBRL¨ BuM%C%M% CXM%CzL© C½LgC½L4 C½D­ C½D%DbCc E(BÁE­BÁ FkBÁG/Cb GuD#GuD§ GuL4 GuLeG¹L¨ H8M%HkM% H¿M%I=L© I_LgI_L4 I_Dk I_C2HSB4 GHA6E­A6 DJA6C=B5 B0C4B0Dm"],
        xMin                       : 56,
        xMax                       : 526,
        yMin                       : -6,
        yMax                       : 754,
        wdth                       : 564
      };
      hpb["V"]                     = {
        sC                         : ["JµL2 JµKÃJ­K« GHA¯ G,A>F_A> E¡A>EcA¯ B!K« A½KÃA½L2 A½LcB<L§ B_M%BµM% C8M%CVL± CuLwC£LP FPDe FRDc FRDaFSD` FTD_FVD_ FZD_FZDe I,LP I6LwITL± IsM%I»M% JLM%JpL§ JµLcJµL2"],
        xMin                       : 44,
        xMax                       : 616,
        yMin                       : -2,
        yMax                       : 754,
        wdth                       : 652
      };
      hpb["W"]                     = {
        sC                         : ["KBA: JoA>JPA¹ J@BV HsH³HeH³ F¥A¹ FgA:E±A: E2A>D¿A¹ BNKo B:L:BZLj B{L»C@L» C³L»D(LB D4K³ E¥E0E±E0 EµE0FDF| FwHFG0J5 GkL#GwLR G¯M#HiM# IDM#IaL8 I³J{JMH« J­F¹K%F! KDE0 KFE0KHE6 M*L< MBL»M»L» NRL»NwLk N½L<N«K{ L6A¹ KÁA:KBA:"],
        xMin                       : 70,
        xMax                       : 867,
        yMin                       : -4,
        yMax                       : 753,
        wdth                       : 903
      };
      hpb["X"]                     = {
        xMin                       : 51,
        xMax                       : 525,
        yMin                       : 0,
        yMax                       : 750,
        wdth                       : 563
      };
      hpb["Y"]                     = {
        xMin                       : 51,
        xMax                       : 525,
        yMin                       : 0,
        yMax                       : 750,
        wdth                       : 563
      };
      hpb["Z"]                     = {
        sC                         : ["B,BT B,B{BHC( G.JÁ G2K%G2K* G2K4F¿K4 CLK4 B(K4B(L( B(LÁCNLÁ H>LÁ HyLÁI$Ls IRLFIRK¯ IRKiI<K@ DTCF DLC6 DLC*DcC* H6C* I]C*I]B8 I]A©I;Ae H½ABHkAB CsAB BÃABBgAf B,A«B,BT"],
        xMin                       : 51,
        xMax                       : 525,
        yMin                       : 0,
        yMax                       : 750,
        wdth                       : 563
      };
      hpb["a"]                     = {
        sC                         : ['H@HR HLHqHRH| HXH©HrH¸ H­I#I2I# IµI#IµG£ IµBk IµADI4AD H§ADHmAW HTAkH@A» G6A2E±A2 D8A2BÃBI A«CaA«E6 A«F¯BÃH" D8I:E±I: G4I:H@HR'],
        hC                         : [['D<F« CgF2CgE6 CgD:D<Ce DµB±E±B± F­B±G`Ce H4D:H4E6 H4F2G`F« F­G_E±G_ DµG_D<F«']],
        xMin                       : 35,
        xMax                       : 552,
        yMin                       : -8,
        yMax                       : 508,
        wdth                       : 584
      };
      hpb["b"]                     = {
        sC                         : ['C{A» CaA:B¹A: BgA<BGA_ B(A£B(B4 B(KF B(K¡BFKÃ BeLBB¹LB CFLBCfKÄ C§K£C§KF C§KF C§HX D­I:F,I: G¥I:H½H" J2F¯J2E6 J2CaH½BI G¥A2F,A2 D£A2C{A»'],
        hC                         : [['G¡Ce HTD:HTE6 HTF2G¡F« G(G_F,G_ E0G_D[F« C©F2C©E6 C©D:D[Ce E0B±F,B± G(B±G¡Ce']],
        xMin                       : 51,
        xMax                       : 568,
        yMin                       : -8,
        yMax                       : 704,
        wdth                       : 597
      };
      hpb["c"]                     = {
        sC                         : ["E½B³ FÃB³G¥C¥ HTDaH©Da I2DaIND@ IkCÃIkCw IkCgIcCN I!BLH&A¢ G,A2E»A2 D@A2C)BI AµCaAµE8 AµF±C)H# D@I:E»I: F·I:G¥H~ HqH@I:Ga IRGBIRF» IRFoI4FR H¹F6HmF6 HNF6G¿FZ G*G]E½G] DÁG]DHFª CsF2CsE8 CsD<DHCg DÁB³E½B³"],
        xMin                       : 40,
        xMax                       : 532,
        yMin                       : -8,
        yMax                       : 508,
        wdth                       : 559
      };
      hpb["d"]                     = {
        sC                         : ['I%A: HXA:HBA» G>A2E³A2 D:A2C"BI A¯CaA¯E6 A¯F¯C"H" D:I:E³I: G6I:H8HX H8KF H8K£HWKÄ HwLBI%LB IZLBIyKÃ I¹K¡I¹KF I¹B4 I¹A£IwA^ IVA:I%A:'],
        hC                         : [['D>F« CiF2CiE6 CiD:D>Ce D·B±E³B± F¯B±GcCe H8D:H8E6 H8F2GcF« F¯G_E³G_ D·G_D>F«']],
        xMin                       : 37,
        xMax                       : 554,
        yMin                       : -8,
        yMax                       : 704,
        wdth                       : 585
      };
      hpb["e"]                     = {
        sC                         : ["E³A2 D8A2BÄBI A­CaA­E8 A­F±BÄH# D8I:E³I: GVI:HsH, I±FÁI±E] I±E.IoD¯ INDkI!Di D:Di D!DiCwDe C³C§D_CE E,B©E³B© F#B©F8B« FLB­F[B° FkB³F¡Bº FµBÁF¾BÄ G#C#G8C/ GLC:GRC= GXC@GoCM G§CZG©C] H%CqH8Cq HcCqH~CT H»C8H»Bµ H»B2G´As F­A2E³A2"],
        hC                         : [['E³G] E0G]D^G" C­FkC{E¹ D!EµD6Eµ GiEµ GuEµGªE¶ G½E·H#E· G·FiGAG! FoG]E³G]']],
        xMin                       : 36,
        xMax                       : 561,
        yMin                       : -234,
        yMax                       : 508,
        wdth                       : 594
      };
      hpb["f"]                     = {
        sC                         : ["B¹I! CaI! CaIµ CaJÁD3Ks D©LFE§LF EµLF F©LFGVK¤ H%K<H%Jw H%JRG®J8 GqIÁGLIÁ G!IÃFuJR FFJ§EÁJ© EµJ© E>J©E>I© E>I! F£I! G­I!G­H: G­GZF£GZ E>GZ E>BZ E>A6DPA6 CaA6CaBZ CaGZ B¹GZ A£GZA£H@ A£I!B¹I!"],
        xMin                       : 31,
        xMax                       : 434,
        yMin                       : -6,
        yMax                       : 706,
        wdth                       : 450
      };
      hpb["g"]                     = {
        sC                         : ['B³>± Bo?0Bo?_ Bo?©B¯@# C*@BCV@B C£@BD(?½ D«?:E±?: F¹?:Gp?Ã HH@©HHA· GDA4EÃA4 DJA4C2BK A½CcA½E6 A½F¯C2H" DJI:EÃI: GLI:HRHT H_HsH§H± I*I*IJI* IsI*IªH¯ I¿HoIÃHO J#H0J#G£ J#A« J#@*Hª>¯ Gk=oE­=o D*=oB³>±'],
        hC                         : [['DVF« C£F2C£E6 C£D:DVCe E,B±F(B± G#B±G{Ce HPD:HPE6 HPF2G{F« G#G_F(G_ E,G_DVF«']],
        xMin                       : 36,
        xMax                       : 550,
        yMin                       : -8,
        yMax                       : 508,
        wdth                       : 577
      };
      hpb["h"]                     = {
        sC                         : ["B(B. B(K% B(LBB»LB C§LBC§K( C§H¡ DkI:E_I: FÃI:G¿HD H»GNH»E³ H»BV H»AµH}Ag HaA:H,A: G<A:G<Bu G<Ee G<FLF£F¸ FDG_EaG_ D¥G_DCG& C§FqC§E© C§B4 C§A¥CgA_ CHA:B·A: B¥A:BwA@ BsA@ B]A@BJAV BDA] B(AyB(B."],
        xMin                       : 51,
        xMax                       : 491,
        yMin                       : -4,
        yMax                       : 704,
        wdth                       : 524
      };
      hpb["i"]                     = {
        sC                         : ["B!B4 B!H6 B!HoBBH³ BcI2BµI2 C@I2CaH³ C£HoC£H6 C£B4 C£A}CaA[ C@A:BµA: BcA:BBA[ B!A}B!B4","BµI¹ BeI¹BCJ7 B!JXB!J© B!K2BCKR BeKsBµKs C>KsC`KQ C£K0C£J© C£JXC`J7 C>I¹BµI¹"],
        xMin                       : 48,
        xMax                       : 159,
        yMin                       : -4,
        yMax                       : 664,
        wdth                       : 191
      };
      hpb["j"]                     = {
        sC                         : ["C:I¹ B¯I¹BlJ7 BJJXBJJ© BJK2BlKR B¯KsC:Ks CeKsC©KQ D(K0D(J© D(JXCªJ7 CgI¹C:I¹","D%H8 D%?L D%>]Cd>$ BÃ=oB@=o B:=o A«=oAh=° AF>,AF>_ AF>£A[>º Aq?.A«?9 AÃ?DB5?_ BJ?yBJ?Á BJH8 BJHqBkHµ B­I4C:I4 CiI4CªHµ D%HqD%H8"],
        xMin                       : 2,
        xMax                       : 179,
        yMin                       : -234,
        yMax                       : 664,
        wdth                       : 211
      };
      hpb["k"]                     = {
        sC                         : ["C±E· EqHk EÁI2F_I2 F¯I2G*Hµ GHHsGHHJ GHH.G8Gµ EVEB EZE:E¡D¥ G:B_ GJBBGJB% GJA{G+A] F¯A>F_A> F!A>E§Am C³Dk C­DuC«Du C§DuC§Dm C§BZ C§A·CiAh CLA:B»A: BZA:BAAc B(A­B(BZ B(K! B(LBB»LB C§LBC§K! C§E¯C«E¯ C­E¯C±E·"],
        xMin                       : 51,
        xMax                       : 388,
        yMin                       : -4,
        yMax                       : 704,
        wdth                       : 417
      };
      hpb["l"]                     = {
        // shapeCmds                  : [[[51,57],[51,642],[51,671,67,687.5],[83,704,107,704],[130,704,145.5,687.5],[161,671,161,642],[161,57],[161,29,145.5,12.5],[130,-4,107,-4],[83,-4,67,12.5],[51,29,51,57]]],
        sC                         : ['B(B4 B(KF B(K£BHKÄ BiLBB»LB CFLBCfKÄ C§K£C§KF C§B4 C§A}CfA[ CFA:B»A: BiA:BHA[ B(A}B(B4'],
        xMin                       : 51,
        xMax                       : 161,
        yMin                       : -4,
        yMax                       : 704,
        wdth                       : 194
      };
      hpb["m"]                     = {
        sC                         : ['G<B4 G<E¥ G<FZF{F¿ F8G_EaG_ D¥G_DCG* C§FwC§E± C§Bi C§A:B»A: BVA:BAAd B,A¯B%Bk B%G« B%I6B¹I6 C6I6CQI" CmH³CwHu DTI:E_I: G*I:H*H4 I%I:JuI: L6I:M2HD N.GNN.E³ N.Bk N.A:M@A: LPA:LPBi LPE¥ LPFZK²F¿ KNG_JuG_ IÁG_I[G! H»FgH¹Eµ H¹Bk H¹A:H,A: G}A:G]A[ G<A}G<B4'],
        xMin                       : 50,
        xMax                       : 822,
        yMin                       : -4,
        yMax                       : 508,
        wdth                       : 854
      };
      hpb["n"]                     = {
        sC                         : ['G<B4 G<E¥ G<FZF{F¿ F8G_EaG_ EaG_ D§G_DDG) C§FuC§E¯ C§Bi C§A:B»A: BVA:BAAd B,A¯B%Bk B%G« B%I6B¹I6 C6I6CQI" CmH³CwHu DTI:E_I: FÃI:G¿HD H»GNH»E³ H»Bk H»A·H¤Ah HkA:H,A: G}A:G]A[ G<A}G<B4'],
        xMin                       : 50,
        xMax                       : 491,
        yMin                       : -4,
        yMax                       : 508,
        wdth                       : 523
      };
      hpb["o"]                     = {
        // shapeCmds                  : [[[40,251],[40,358,115.5,433],[191,508,299,508],[406,508,481,433],[556,358,556,251],[556,143,481,67.5],[406,-8,299,-8],[191,-8,115.5,67.5],[40,143,40,251]]],
        sC                         : ['AµE8 AµF±C)H# D@I:E»I: GoI:H§H# I½F±I½E8 I½CaH§BI GoA2E»A2 D@A2C)BI AµCaAµE8'],
        // holeCmds                   : [[[[151,251],[151,189,194,146],[237,103,299,103],[360,103,402.5,146],[445,189,445,251],[445,312,402.5,354.5],[360,397,299,397],[237,397,194,354.5],[151,312,151,251]]]],
        hC                         : [['CqE8 CqD<DFCg D¿B³E»B³ FµB³GhCg H<D<H<E8 H<F2GhFª FµG]E»G] D¿G]DFFª CqF2CqE8']],
        xMin                       : 40,
        xMax                       : 556,
        yMin                       : -8,
        yMax                       : 508,
        wdth                       : 581
      };
      hpb["p"]                     = {
        // shapeCmds                  : [[[106,504],[147,504,156,457],[223,508,309,508],[416,508,492,432.5],[568,357,568,250],[568,144,492,68.5],[416,-7,309,-7],[227,-7,161,41],[161,-142],[161,-170,145,-187],[129,-204,106,-204],[81,-204,66,-186.5],[51,-169,51,-142],[51,443],[51,469,67,486.5],[83,504,106,504]]],
        sC                         : ['B¹I2 CiI2C{HT D£I:F,I: G¥I:H½H" J2F¯J2E6 J2CcH½BK G¥A4F,A4 D«A4C§A· C§?% C§>oCe>L CD>*B¹>* Be>*BF>M B(>qB(?% B(H8 B(HmBHH² BiI2B¹I2'],
        // holeCmds                   : [[[[414,145],[457,188,457,250],[457,312,414,355],[371,398,309,398],[247,398,204.5,355],[162,312,162,250],[162,188,204.5,145],[247,102,309,102],[371,102,414,145]]]],
        hC                         : [['G¡Ce HTD:HTE6 HTF2G¡F« G(G_F,G_ E0G_D[F« C©F2C©E6 C©D:D[Ce E0B±F,B± G(B±G¡Ce']],
        xMin                       : 51,
        xMax                       : 568,
        yMin                       : -204,
        yMax                       : 508,
        wdth                       : 597
      };
      hpb["q"]                     = {
        // shapeCmds                  : [[[448,457],[461,504,499,504],[499,504],[522,504,538,486.5],[554,469,554,443],[554,-142],[554,-170,539,-187],[524,-204,498,-204],[475,-204,459,-187],[443,-170,443,-142],[443,41],[379,-7,295,-7],[188,-7,112.5,68],[37,143,37,250],[37,357,112.5,432.5],[188,508,295,508],[382,508,448,457]]],
        sC                         : ['HBHT H]I2I(I2 I(I2 IVI2IwH² I¹HmI¹H8 I¹?% I¹>oIy>L IZ>*I%>* Hy>*HX>L H8>oH8?% H8A· G8A4E³A4 D:A4C"BJ A¯CaA¯E6 A¯F¯C"H" D:I:E³I: G>I:HBHT'],
        // holeCmds                   : [[[[190,355],[147,312,147,250],[147,188,190,145],[233,102,295,102],[357,102,400,145],[443,188,443,250],[443,312,400,355],[357,398,295,398],[233,398,190,355]]]],
        hC                         : [['D>F« CiF2CiE6 CiD:D>Ce D·B±E³B± F¯B±GcCe H8D:H8E6 H8F2GcF« F¯G_E³G_ D·G_D>F«']],
        xMin                       : 37,
        xMax                       : 554,
        yMin                       : -204,
        yMax                       : 508,
        wdth                       : 585
      };
      hpb["r"]                     = {
        // shapeCmds                  : [[[351,454],[351,394,290,394],[284,394,277,395],[270,396,259,396],[218,396,189.5,369.5],[161,343,161,291],[161,90],[161,-4,107,-4],[50,-4,50,74],[50,429],[50,504,104,504],[145,504,157,451],[215,506,278,506],[310,506,330.5,490],[351,474,351,454]]],
        sC                         : ['F£HN F£GVE©GV E{GVEmGX E_GZEHGZ DwGZD=G$ C§FqC§E« C§Bw C§A:B»A: B%A:B%BV B%G¿ B%I2BµI2 CeI2C}HH DqI6EoI6 F.I6FWH¹ F£HwF£HN'],
        xMin                       : 50,
        xMax                       : 351,
        yMin                       : -4,
        yMax                       : 506,
        wdth                       : 372
      };
      hpb["s"]                     = {
        sC                         : ["G4CP G4B]FYAª E¡A2DZA2 CPA2BtAp A¹B,A¹B{ A¹C!B2C= BNCXB{CX C#CXCgC+ D(B¡DcB¡ D»B¡E4B¹ EPC.EPCN EPC³DLDT CoD§ B¡E<BOE¤ AÃFFAÃG! AÃGµB~Hf CZI8DoI8 E¡I8FMHw F¿H4F¿Gy F¿GRF¤G8 FgFÁF:FÁ E·FÁEOGA D­GeDVGe D2GeCÀGO C«G:C«FÃ C«F£CÀFk D2FTDuF. D¯EÃ D¿E¹EAE§ EgEsEwEi G4D¥G4CP"],
        xMin                       : 50,
        xMax                       : 351,
        yMin                       : -4,
        yMax                       : 506,
        wdth                       : 372
      };
      hpb["t"]                     = {
        // shapeCmds                  : [[[102,496],[160,496],[160,563],[160,644,216,644],[270,644,270,563],[270,496],[327,496],[400,496,400,447],[400,396,327,396],[270,396],[270,81],[270,-4,216,-4],[216,-4],[184,-4,172,17],[160,38,160,81],[160,396],[102,396],[67,396,49,406.5],[31,417,31,443],[31,472,48.5,484],[66,496,102,496]]],
        sC                         : ['B±I! C¥I! C¥J( C¥KJDsKJ E_KJE_J( E_I! FPI! GcI!GcH@ GcGZFPGZ E_GZ E_Be E_A:DsA: DsA: D2A:C½Ae C¥A±C¥Be C¥GZ B±GZ BHGZB#Gp A£G§A£H8 A£HsB"H­ BFI!B±I!'],
        xMin                       : 31,
        xMax                       : 400,
        yMin                       : -4,
        yMax                       : 644,
        wdth                       : 425
      };
      hpb["u"]                     = {
        // shapeCmds                  : [[[158,442],[158,213],[158,168,191,135.5],[224,103,268,103],[315,103,346.5,129],[378,155,378,207],[378,417],[378,504,432,504],[465,504,475.5,483],[486,462,489,416],[489,81],[489,-5,433,-5],[397,-5,385,28],[337,-8,269,-8],[172,-8,110,51.5],[48,111,48,206],[48,416],[48,458,59.5,481],[71,504,102,504],[126,504,142,487.5],[158,471,158,442]]],
        sC                         : ['C¡H6 C¡Dm C¡CµD@CQ D¥B³EZB³ F8B³FxCD G6CyG6Da G6G§ G6I2H!I2 HeI2HzH« H±H_H·G¥ H·Be H·A8H#A8 G]A8GDA{ FeA2E]A2 C½A2BÁB) B!BÃB!D_ B!G¥ B!HVB9H§ BPI2B±I2 C>I2C_H´ C¡HqC¡H6'],
        xMin                       : 48,
        xMax                       : 489,
        yMin                       : -8,
        yMax                       : 504,
        wdth                       : 521
      };
      hpb["v"]                     = {
        // shapeCmds                  : [[[182,34],[43,431],[39,443,39,450],[39,473,55.5,489],[72,505,95,505],[119,505,132,489],[145,473,155,443],[223,226],[232,196,238,181],[252,219,265.5,262.5],[279,306,295.5,361],[312,416,320,443],[330,473,343,489],[356,505,380,505],[380,505],[403,505,420,488.5],[437,472,437,450],[437,443,433,431],[294,34],[280,-4,238,-4],[195,-4,182,34]]],
        sC                         : ['D.A© A»GÃ A³H8A³HF A³HuB1H· BRI4B£I4 C0I4CJH· CeHuCyH8 D£D© DµDJDÁD, E:DyEUEO EqF%E´F· F2G¥FBH8 FVHuFqH· F­I4G:I4 G:I4 GiI4G­H¶ H,HsH,HF H,H8H#GÃ E±A© EsA:DÁA: DHA:D.A©'],
        xMin                       : 39,
        xMax                       : 437,
        yMin                       : -4,
        yMax                       : 505,
        wdth                       : 465
      };
      hpb["w"]                     = {
        sC                         : ["C§A³ AµH* A±H.A±H@ A±HiB,H¬ BJI*B}I* CPI*CgHk CyH0 DeD»D±C» F<H_ FTI2G(I2 GLI2GkHÀ G«H«GµHg H#H, I(DoIDCÁ IFCÁIFCÃ JiHk JqH©J¯H» K(I*KNI* K§I*L!H° L@HqL@HB L@H:L<H* JHA± J.A:IXA: H{A:H]A³ HNB8G¨C¸ G<EsG%F. G#F, EsA± ERA:DuA: CÁA:C§A³"],
        xMin                       : 38,
        xMax                       : 703,
        yMin                       : -4,
        yMax                       : 504,
        wdth                       : 730
      };
      hpb["x"]                     = {
        sC                         : ["D©Cu D¡CmDsCX CyA§ CRA:B¯A: B]A:B<A[ A¿A}A¿B( A¿BBB>B{ C§E4 B>Go A¿GÃA¿H@ A¿HoB=H² B_I0B¯I0 C:I0CZH³ CyHe DsF³ D¡F}D©Fu D±F}D½F³ E¹He FDI0F¥I0 G4I0GRH¯ GqHiGqH8 GmH#GiG¿ GPGo EÁEV E½EPE¯E4 E±E0E·E$ E½D½EÁD· GeBa GuBDGuB* GuA{GRAZ G0A:F§A: FBA:E¹A§ D¯Cs D­CuD©Cu"],
        xMin                       : 45,
        xMax                       : 409,
        yMin                       : -4,
        yMax                       : 503,
        wdth                       : 435
      };
      hpb["y"]                     = {
        sC                         : ["G·GÃ D§?! De>JDJ>4 D2>!C±>! C_>!C>>B BÁ>cBÁ>µ BÁ?#C%?8 C·Aq C¯A·C©B% C©B. A£GÃ AyH8AyHF AyHuA»H· B8I4BiI4 B½I4C2H¶ CJHsC_H6 DkD¥ D§D4D­D% D³D4E*D¥ F6H6 FBH_FMHv FXH¯FrHÃ F­I4G,I4 G_I4G~H¶ G¿HsG¿HF G¿H8G·GÃ"],
        xMin                       : 27,
        xMax                       : 429,
        yMin                       : -208,
        yMax                       : 505,
        wdth                       : 457
      };
      hpb["z"]                     = {
        // shapeCmds                  : [[[342,0],[130,0],[48,0,48,58],[48,58],[48,82,60,99],[226,347],[254,389],[231,393,196,393],[102,393],[82,393,65,409],[48,425,48,447],[48,469,64,484.5],[80,500,102,500],[312,500],[350,500,373,484],[396,468,396,439],[396,426,390,415],[372,384],[358,360,283,251.5],[208,143,190,110],[206,107,247,107],[342,107],[362,107,379,91],[396,75,396,54],[396,32,380,16],[364,0,342,0]]],
        sC                         : ['FoAB CFAB B!ABB!B6 B!B6 B!BgB:B« D©Fy E>GL D³GTDJGT B±GT BgGTBDGu B!G·B!H@ B!HmBBH® BcI*B±I* F2I* F¡I*G,H­ GZHkGZH0 GZG¹GNG£ G*GB F±FµEyE9 DcCaD>BÁ D_B»E0B» FoB» F¹B»G8By GZBXGZB. GZA¥G:Ac F½ABFoAB'],
        xMin                       : 48,
        xMax                       : 396,
        yMin                       : 0,
        yMax                       : 500,
        wdth                       : 426
      };
      hpb["0"]                     = {
        // shapeCmds                  : [[[475,66.5],[401,-8,300,-8],[199,-8,124.5,65],[50,138,50,241],[50,508],[50,608,124,682.5],[198,757,300,757],[399,757,474,685],[549,613,549,508],[549,241],[549,141,475,66.5]]],
        sC                         : ['HyBG GeA2E½A2 DPA2C;BD B%CVB%E# B%I: B%J¥C:Kº DNM,E½M, GaM,HwK¿ I¯J¯I¯I: I¯E# I¯C]HyBG'],
        // holeCmds                   : [[[[300,639],[245,639,205,598.5],[165,558,165,506],[165,243],[165,190,205,149.5],[245,109,300,109],[354,109,393,149],[432,189,432,243],[432,506],[432,560,393,599.5],[354,639,300,639]]]],
        hC                         : [['E½K@ E,K@D]Jp C¯IÁC¯I6 C¯E( C¯D>D]Cn E,B¿E½B¿ F©B¿GTCm H!D<H!E( H!I6 H!J!GTJr F©K@E½K@']],
        xMin                       : 50,
        xMax                       : 549,
        yMin                       : -8,
        yMax                       : 757,
        wdth                       : 600
      };
      hpb["1"]                     = {
        // shapeCmds                  : [[[390,12.5],[373,-4,348,-4],[323,-4,306.5,12.5],[290,29,290,53],[290,633],[290,643,281,643],[228,643],[205,643,189.5,658.5],[174,674,174,696],[174,719,189.5,734.5],[205,750,227,750],[361,750],[381,750,394,736],[407,722,407,701],[407,53],[407,29,390,12.5]]],
        sC                         : ['GNA[ G,A:F{A: FHA:F&A[ E©A}E©B, E©K4 E©KHEuKH D­KH D]KHD=Kh CÁK©CÁL2 CÁLaD=L¢ D]LÁD«LÁ F·LÁ G<LÁGVL¥ GqLgGqL< GqB, GqA}GNA['],
        xMin                       : 174,
        xMax                       : 407,
        yMin                       : -4,
        yMax                       : 750,
        wdth                       : 600
      };
      hpb["2"]                     = {
        sC                         : ["HµAB C_AB B¹ABBeAn B2A»B2Ba B2C!BeCX BuCkC¡Dh D«EeE¸Fl G!GsGPH4 G¹H«G¹IT G¹J6GPJ} F­KBF(KB EXKBD¾J· D_JgDDI¿ D8I{C»Ie CyINCTIN C%INB§Iq BcIµBcJB BcJVBiJi B¹KwCµLP D±M*F(M* GkM*HuKÃ I¡J¹I¡IT I¡H³I_HD I>GyHºG> HqF§H!F4 GTEeG$E: FwD³E¼D? E<CoDÃCV D«C@ D{C4D{C0 D{C*D¥C* HµC* I2C*I]B§ I©B_I©B4 I©A©IdAe I@ABHµAB"],
        xMin                       : 56,
        xMax                       : 546,
        yMin                       : 0,
        yMax                       : 756,
        wdth                       : 600
      };
      hpb["3"]                     = {
        sC                         : ["BBD> BBDqB`D· B}E8C.E8 CTE8CvDÂ C¹D©CÃD_ D6C«DxCP E8B»EµB» FwB»G?Ce G«D0G«D¿ G«E§GFFY F§G.F#G6 EwG>EWG^ E8G}E8H% E8HREUHp EsH¯E¹H¾ F:I*FWIR FuI{FuJ: FuJwFYJ¾ F>K@E­K@ ENK@D®J¥ DHJDC¿JD CwJDCUJl C4JµC4K< C4KgCBK¡ D6M.E©M. F±M.GsLI HVKeHVJL HVI@GwHB H%H! IqFµIqDµ IqCLHeB? GXA2EµA2 DgA2CXB& BJB¿BBD>"],
        xMin                       : 64,
        xMax                       : 535,
        yMin                       : -8,
        yMax                       : 758,
        wdth                       : 600
      };
      hpb["4"]                     = {
        // shapeCmds                  : [[[561,181],[561,154,542.5,141],[524,128,505.5,125.5],[487,123,487,119],[487,67],[487,36,472,16.5],[457,-3,428,-3],[400,-3,385,17.5],[370,38,370,67],[370,119],[370,125,364,125],[124,125],[39,125,39,193],[39,214,52,238],[341,690],[353,709,362,720],[371,731,386.5,741.5],[402,752,420,752],[487,752,487,667],[487,243],[487,237,493,237],[500,237],[561,230,561,181]]],
        sC                         : ['J#D, J#CwI¢C] IZCBI5C= H³C8H³C0 H³BH H³A­HsAd HTA<G½A< GcA<GDAf G%A±G%BH G%C0 G%C<F½C< C:C< A³C<A³DD A³DoB*DÁ FmL% F§LLF¹Lc G(LyGGL° GgM!G­M! H³M!H³Ky H³E( H³D¿H¿D¿ I*D¿ J#D±J#D,'],
        // holeCmds                   : [[[[184,237],[364,237],[370,237,370,244],[370,539],[369,542],[368,542,366,540],[182,243],[181,242,181,240],[181,237,184,237]]]],
        hC                         : [['D2D¿ F½D¿ G%D¿G%E* G%Iy G#I¡ G!I¡FÁI{ D.E( D,E%D,E! D,D¿D2D¿']],
        xMin                       : 39,
        xMax                       : 561,
        yMin                       : -3,
        yMax                       : 752,
        wdth                       : 600
      };
      hpb["5"]                     = {
        sC                         : ['E©A2 DsA2CvA¢ ByBLB:CN B(CwB(C­ B(D4BLDX BqD}BÁD} CeD}C­D, D,CiDpC@ E2B»E©B» F¡B»GPCl H!D>H!E6 H!F,GOF¡ F}GPE©GP E@GPDlG/ C¹F±CwF± C@F±B¶G7 BgGaBgG» BgH,BiH8 CNL# CTLPC¢Lw D*L¿D_LÁ GÃLÁ H>LÁHjLz H·LTH·L, H·K©HqK` HLK8GÃK8 D¿K8 D­K8D©K* DyJRDlI´ D_IPDYI: DTI#DTHÃ DXI!DtI( D±I.E:I4 EgI:E©I: G]I:HtH" I­F¯I­E6 I­CaHtBI G]A2E©A2'],
        xMin                       : 51,
        xMax                       : 548,
        yMin                       : -8,
        yMax                       : 750,
        wdth                       : 600
      };
      hpb["6"]                     = {
        // shapeCmds                  : [[[308,509],[414,504,487.5,433.5],[561,363,561,253],[561,144,485,68],[409,-8,301,-8],[190,-8,114,67.5],[38,143,38,253],[38,329,73,384],[288,722],[309,754,341,754],[366,754,382.5,737],[399,720,399,695],[399,676,388,660],[304,532],[295,520,289,508],[294,509,308,509]]],
        sC                         : ['F*I< G¡I2H´H$ J#F»J#E< J#CcH¯BJ GuA2E¿A2 D>A2C%BI A±CaA±E< A±FTBTGB E¥Lg F,M%FmM% FÁM%G?L§ GaLcGaL0 GaK­GJKk F!Ik E³IRE§I: E±I<F*I<'],
        // holeCmds                   : [[[[300,398],[238,398,196.5,356.5],[155,315,155,253],[155,191,196.5,149.5],[238,108,300,108],[362,108,403,149.5],[444,191,444,253],[444,314,402.5,356],[361,398,300,398]]]],
        hC                         : [['E½G_ DÁG_DKF® CyF8CyE< CyD@DKCn DÁB½E½B½ F¹B½GiCn H:D@H:E< H:F6GhF­ F·G_E½G_']],
        xMin                       : 38,
        xMax                       : 561,
        yMin                       : -8,
        yMax                       : 754,
        wdth                       : 600
      };
      hpb["7"]                     = {
        // shapeCmds                  : [[[193,-4],[170,-4,152,13.5],[134,31,134,54],[134,67,136,70],[381,628],[382,632,382,633],[382,636,378,636],[141,636],[119,636,103,653],[87,670,87,693],[87,716,103,733],[119,750,141,750],[421,750],[463,750,487,724],[511,698,511,660],[511,651,506,631],[245,31],[230,-4,193,-4]]],
        sC                         : ['DDA: C¹A:CsA^ CNA£CNB. CNBHCRBN G<K* G>K2G>K4 G>K:G6K: C]K: C0K:B³K] BqK¡BqL, BqLZB³L} C0LÁC]LÁ G¯LÁ HaLÁH³Lk I@L6I@Kk I@KXI6K0 E,A£ D±A:DDA:'],
        xMin                       : 87,
        xMax                       : 511,
        yMin                       : -4,
        yMax                       : 750,
        wdth                       : 600
      };
      hpb["8"]                     = {
        sC                         : ["E½A2 DPA2CDB? B8CLB8Dµ B8EkBdFE B±FÃCVG] C­G« B§H±B§I» B§K>C|L5 DsM,E½M, G>M,H7L5 I0K>I0IÁ I0I*HTH< H(G« HÃF¿INFB I{EmI{Dµ I{CNHnB@ GaA2E½A2"],
        hC                         : [["GJFC F¥F¯E½F¯ E2F¯DiFC CÁE{CÁDµ CÁD*DiCa E2B¹E½B¹ F¡B¹GHCa GµD*GµDµ GµE{GJFC","F¹Jµ FcKFE½KF ERKFDÀJ´ DiJ]DiI¹ DiILD¿Hº EPHcE½Hc FcHcF¹H» GJINGJI¹ GJJ_F¹Jµ"]],
        xMin                       : 59,
        xMax                       : 540,
        yMin                       : -8,
        yMax                       : 757,
        wdth                       : 600
      };
      hpb["9"]                     = {
        sC                         : ["E«D¿ D4E%BÄF3 A±G@A±H¿ A±JwC%K± D>M%E¹M% GuM%H¯K² J#JyJ#H¿ J#G§I_F¹ F0As E©A2EFA2 D·A2DtAT DRAwDRB( DRBNDiBo E³Do E¹DwE¾D¡ EÃD©F$D² F*D»F.DÁ F#D¿E«D¿"],
        hC                         : [["E»F{ F·F{GhGM H:GÃH:H¿ H:I»GhJl F·K>E»K> D¿K>DJJl CyI»CyH¿ CyH!DKGN DÁF{E»F{"]],
        xMin                       : 38,
        xMax                       : 561,
        yMin                       : -8,
        yMax                       : 754,
        wdth                       : 600
      };
      hpb["%"]                     = {
        shapeCmds                  : [
                                       [[278,4],[271,-3,264,-3],[251,-3,243,5],[235,13,235,26],[235,36,239,43],[604,735],[608,743,617,743],[618,743,620,742],[627,749,637,749],[648,749,655,741.5],[662,734,662,723],[662,712,657,705],[641,676],[294,17],[288,4,278,4]],
                                       [[548,53],[495,106,495,180],[495,254,548,307],[601,360,675,360],[749,360,802,307],[855,254,855,180],[855,106,802,53],[749,0,675,0],[601,0,548,53]],
                                       [[101,443],[48,496,48,570],[48,644,101,697],[154,750,228,750],[302,750,355,697],[408,644,408,570],[408,496,355,443],[302,390,228,390],[154,390,101,443]]
                                     ],  

        holeCmds                   : [
                                      [],
                                      [[[607.5,247.5],[580,220,580,180],[580,140,607.5,112.5],[635,85,675,85],[715,85,742.5,112.5],[770,140,770,180],[770,220,742.5,247.5],[715,275,675,275],[635,275,607.5,247.5]]],
                                      [[[160.5,637.5],[133,610,133,570],[133,530,160.5,502.5],[188,475,228,475],[268,475,295.5,502.5],[323,530,323,570],[323,610,295.5,637.5],[268,665,228,665],[188,665,160.5,637.5]]]
                                    ],
        xMin                       : 48,
        xMax                       : 855,
        yMin                       : -3,
        yMax                       : 750,
        wdth                       : 892
      };
      hpb["#"]                     = {
        sC                         : ['BwEu DHEu DsH% C2H% BTH%BTHi BTH©BgH¼ ByI,B»I, D©I, E#J¡E4K¡ E@L:ENLN E]LcE¥Lc EÁLcF0LS FBLDFBL* FBK·E±I, G»I, H6J¡HFK¡ HPL6H`LL HoLcHµLc I*LcI>LR IRLBIRL, IRL*IQKÃ IPK¹IPKµ HÃI, JaI, K<I,K<Hi K<H%J{H% H¯H% HaEu IÃEu J¡EuJ¡E0 J¡DoIÁDo HLDo HFD0H5C< H#BHGÁA¿ G¹AcGªAM GyA8GRA8 G4A8G"AI FµAZFµAq F·A¥ G#C%GFDo E:Do D¿B¿D¯A¿ D£AaDtAL DgA8D@A8 D#A8CµAH C£AXC£Aq C§A¯C§A» D2Do BuDo A¹DoA¹E0 A¹EuBwEu'],
        hC                         : [["G§H% E{H% EPEu GZEu G§H%"]],
        xMin                       : 42,
        xMax                       : 637,
        yMin                       : -5,
        yMax                       : 720,
        wdth                       : 673
      };
      hpb["$"]                     = {
        sC                         : ["EB?¯ D]?¯D]@« D]A< CXARB£AÁ B(BkAÃCV AÃC§B@D( BaDLB±DL CTDLC¡C{ D0B»E6B» E«B»FACS F{C±F{D_ F{D¹FeEB FNEoF#E® E{F(ETF9 E.FJDwF] AÁGLAÁI³ AÁK#BxK³ CPL}D]LÁ D]MV D]NTEBNT EqNTE¯N7 F(M½F(Mm F(LÁ F¥L«GLLM G¹KµH4K@ H:JÃH:J· H:JmG¸JR GqJ8G>J8 FwJ8F_Je F*KBE>KB DwKBDAJ® C¯JTC¯I¯ C¯IgCÀID D.I!D@H± DRH{D¢Ha E,HFE>H> EPH6E©GÁ G<GNG±Fj HaE§HaD_ HaCLGªBY G.AgF(AB F(@s F(@FE¯@) Eq?¯EB?¯"],
        xMin                       : 46,
        xMax                       : 463,
        yMin                       : -91,
        yMax                       : 841,
        wdth                       : 499
      };
      hpb["&"]                     = {
        xMin                       : 46,
        xMax                       : 463,
        yMin                       : -91,
        yMax                       : 841,
        wdth                       : 499
      };
      hpb["&"]                     = {
        xMin                       : 200,
        xMax                       : 200,
        yMin                       : 200,
        yMax                       : 200,
        wdth                       : 290
      };
      hpb["?"]                     = {
        xMin                       : 200,
        xMax                       : 200,
        yMin                       : 200,
        yMax                       : 200,
        wdth                       : 290
      };
      hpb["!"]                     = {
        xMin                       : 200,
        xMax                       : 200,
        yMin                       : 200,
        yMax                       : 200,
        wdth                       : 290
      };
      hpb["|"]                     = {
        xMin                       : 200,
        xMax                       : 200,
        yMin                       : 200,
        yMax                       : 200,
        wdth                       : 290
      };
      hpb["("]                     = {
        // shapeCmds                 : [[[51,541],[51,701,170,793],[185,805,205,805],[228,805,243.5,789.5],[259,774,259,751],[259,729,244,714],[196,667,181.5,623],[167,579,167,505],[167,198],[167,123,181.5,80],[196,37,244,-10],[259,-25,259,-48],[259,-70,243.5,-86],[228,-102,205,-102],[187,-102,170,-90],[51,4,51,162]]],
        sC                         : ['B(I} B(L<C¹Mu D4M¯D]M¯ D­M¯E)Mn EHMNEHLÃ EHLuE*LV DJKyD-JÃ C³JHC³I4 C³DN C³C8D-Bc DJA¯E*A. EH@³EH@c EH@6E)?¹ D­?wD]?w D8?wC¹?± B(AJB(C©'],
        xMin                       : 51,
        xMax                       : 259,
        yMin                       : -102,
        yMax                       : 805,
        wdth                       : 297
      };
      hpb[")"]                     = {
        // shapeCmds                 : [[[257,162],[257,2,139,-90],[124,-102,104,-102],[81,-102,65.5,-86.5],[50,-71,50,-48],[50,-24,64,-10],[112,38,126.5,80.5],[141,123,141,198],[141,505],[141,580,126.5,623.5],[112,667,64,714],[50,728,50,751],[50,774,65.5,789.5],[81,805,104,805],[122,805,139,793],[257,701,257,541]]],
        sC                         : ['EDC© EDAFCX?± C:?wBµ?w Be?wBE?¸ B%@4B%@c B%@µBBA. C!A±C?Bd C]C8C]DN C]I4 C]JJC?JÄ C!KyBBLV B%LsB%LÃ B%MNBEMn BeM¯BµM¯ C6M¯CXMu EDL<EDI}'],
        xMin                       : 50,
        xMax                       : 257,
        yMin                       : -102,
        yMax                       : 805,
        wdth                       : 295
      };
      hpb["-"]                     = {
        shapeCmds                  : [[[106,332],[308,332],[374,332,374,287],[374,242,308,242],[123,242],[57,242,57,287],[57,308,70,320],[83,332,106,332]]],
        xMin                       : 57,
        xMax                       : 374,
        yMin                       : 242,
        yMax                       : 332,
        wdth                       : 412
      };
      hpb["_"]                     = {
        shapeCmds                  : [[[57,-127],[57,-64],[613,-64],[613,-127],[57,-127]]],
        xMin                       : 57,
        xMax                       : 613,
        yMin                       : -127,
        yMax                       : -64,
        wdth                       : 651
      };
      hpb["="]                     = {
        fullPath                   : "M 107 306 L 107 306 L 465 306 Q 514 306 514 261 L 514 261 Q 514 255 513 253 L 513 253 Q 514 250 514 245 L 514 245 Q 514 200 465 200 L 465 200 L 107 200 Q 58 200 58 245 L 58 245 L 58 253 L 58 261 Q 58 306 107 306 Z",
        shapeCmdsOrig              : [[[107,306],[465,306],[514,306,514,261],[514,255,513,253],[514,250,514,245],[514,200,465,200],[107,200],[58,200,58,245],[58,253],[58,261],[58,306,107,306]]],
        shapeCmds                  : [
                                      [[107,306-60 ],[465,306-60 ],[514,306-60 ,514,261-60 ],[514,255-60 ,513,253-60 ],[514,250-60 ,514,245-60 ],[514,200-60 ,465,200-60 ],[107,200-60 ],[58,200-60 ,58,245-60 ],[58,253-60 ],[58,261-60 ],[58,306-60 ,107,306-60 ]],
                                      [[107,306+130],[465,306+130],[514,306+130,514,261+130],[514,255+130,513,253+130],[514,250+130,514,245+130],[514,200+130,465,200+130],[107,200+130],[58,200+130,58,245+130],[58,253+130],[58,261+130],[58,306+130,107,306+130]]
                                     ],
        xMin                       : 58,
        xMax                       : 514,
        yMin                       : 200,
        yMax                       : 306,
        wdth                       : 553
      };
      hpb["+"]                     = {
        sC                         : ["B¯E¹ E(E¹ E(H0 E(H{E=H¹ ERI2E£I2 F.I2FCH¸ FXHyFXH0 FXE¹ HqE¹ IuE¹IuE> IuDgHqDg FXDg FXBN FXA§FCAh F.AJE£AJ ERAJE=Ah E(A§E(BN E(Dg B±Dg A¯DgA¯E> A¯EsB-E§ BNE¹B¯E¹"],
        xMin                       : 37,
        xMax                       : 537,
        yMin                       : 4,
        yMax                       : 504,
        wdth                       : 572
      };
      hpb[","]                     = {
        // fullPath                   : "M 43 65 Q 43 88 57 103 Q 71 118 91 118 Q 115 118 128.5 101 Q 142 84 142 59 L 142 -51 Q 142 -61 133 -69 Q 124 -77 114 -77 Q 96 -77 74.5 -30.5 Q 53 16 43 65 Z",
        // shapeCmds                  : [[[43,65],[43,88,57,103],[71,118,91,118],[115,118,128.5,101],[142,84,142,59],[142,-51],[142,-61,133,-69],[124,-77,114,-77],[96,-77,74.5,-30.5],[53,16,43,65]]],
        sC                         : ['A»BD A»BsB4B³ BPC.ByC. C(C.CCB¯ C_BkC_B8 C_@] C_@HCL@8 C:@(C%@( B¥@(BW@¨ B,AcA»BD'],
        xMin                       : 43,
        xMax                       : 142,
        yMin                       : -77,
        yMax                       : 118,
        wdth                       : 180
      };
      hpb["."]                     = {
        // shapeCmds                  : [[[66,10.5],[51,25,51,45],[51,65,66.5,80.5],[82,96,103,96],[122,96,137,80.5],[152,65,152,45],[152,25,137.5,10.5],[123,-4,103,-4],[81,-4,66,10.5]]],
        sC                         : ['BFAW B(AuB(A¿ B(BDBGBd BgB¥B³B¥ C6B¥CTBd CsBDCsA¿ CsAuCUAW C8A:B³A: BeA:BFAW'],
        xMin                       : 51,
        xMax                       : 152,
        yMin                       : -4,
        yMax                       : 96,
        wdth                       : 190
      };
      hpb[nbsp]                    = {
        xMin                       : 200,
        xMax                       : 200,
        yMin                       : 200,
        yMax                       : 200,
        wdth                       : 290
      };
      hpb[" "]                     = hpb[nbsp];

  /*
// https://opentype.js.org/glyph-inspector.html
function coordinates(cmd){
  if(cmd.x1){
    return " "+cmd.x1+" "+(0-cmd.y1)+" "+cmd.x+" "+(0-cmd.y)
  }else{
    if(cmd.x){
      return " "+cmd.x+" "+(0-cmd.y)
    }else{
      return ""
    }
  }
};
function makeD(path){
  var d  = "";
  path.commands.forEach(function(cmd){d+=" "+cmd.type+coordinates(cmd)});
  return d.slice(1)
}
*/

      return hpb;
    }
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//  HELVETICANEUE  HELVETICANEUE  HELVETICANEUE
// 

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){

    return function(codeList){

      var font={reverseHoles:false,reverseShapes:true},nbsp=' ';

      font["0"]        = {
        sC      : [
                           'EoLV G¡LVHwJc IRI*IRF¡ IRDRHwB½ G¡A%EoA% C_A%BgB½ A­DRA­F¡ A­I*BgJc C_LVEoLV'
                         ],
        hC       : [
                           ['EoBe GoBeGoF¡ GoJ»EoJ» CoJ»CoF¡ CoBeEoBe']
                         ],
        xMin           : 36,
        xMax           : 520,
        yMin           : -14,
        yMax           : 714,
        wdth           : 556
      };
      font["1"]        = {
        sC      : [
                           'D§HÁ B,HÁ B,JR CHJPD4J© E,KDEDL: F¡L: F¡AB D§AB D§HÁ'
                         ],
        xMin           : 53,
        xMax           : 350,
        yMin           : 0,
        yMax           : 700,
        wdth           : 556
      };
      font["2"]        = {
        sC      : [
                           'D!B± ILB± ILAB A³AB AµC£DDET E#E·E¥FT FoFÃG#Ge GiH<GkHÃ GmI£G>JB F¥J»E¡J» C»J»C±H: B*H: B*J*C%K< D(LVE¯LV GuLVHoKB INJLINI( ING*F¹EP F!D¥E.D4 D<C]D!B±'
                         ],
        xMin           : 39,
        xMax           : 518,
        yMin           : 0,
        yMax           : 714,
        wdth           : 556
      };
      font["3"]        = {
        sC      : [
                           'D­FL D­Gw E¯GqF_H! G@HZG@IR G@J*F¦Jb FFJ»EgJ» DwJ»D8JC C{IoC¡H{ A½H{ B#JLB¿KN C¿LVEkLV F¿LVG»Ky I#J³I#Ia I#G{G_G4 G_G0 HTF»H»F9 I]EZI]DR I]BµHHA½ G<A%EmA% C£A%B¡B, A§C,A£D± CeD± CaC­D#C: DkBeEmBe FcBeG-C& GyCkGyD_ GyF]D­FL'
                         ],
        xMin           : 31,
        xMax           : 525,
        yMin           : -14,
        yMax           : 714,
        wdth           : 556
      };
      font["4"]        = {
        sC      : [
                           'H!EB IVEB IVC± H!C± H!AB FJAB FJC± AsC± AsEq FJL: H!L: H!EB'
                         ],
        hC       : [
                           ['FJJ* FFJ* C!EB FJEB FJJ*']
                         ],
        xMin           : 24,
        xMax           : 522,
        yMin           : 0,
        yMax           : 700,
        wdth           : 556
      };
      font["5"]        = {
        sC      : [
                           'C©F< B!F< C8L: H¯L: H¯Jo DcJo C½G­ CÁG© D¡HqEÃHq GmHqHeGk IVFkIVD¿ IVCZHgBN GaA%EsA% CÃA%B¿Aµ A³B§A«DP CmDP CwCaD:C! D¡BeEoBe GsBeGsD» GsE·G2Fe FkG<EiG< D6G<C©F<'
                         ],
        xMin           : 35,
        xMax           : 522,
        yMin           : -14,
        yMax           : 700,
        wdth           : 556
      };
      font["6"]        = {
        sC      : [
                           'I<IX GXIX GPJ.F½Jd FeJ»E¯J» DkJ»D#Io C{H«CkG8 CoG4 DLHZE¿HZ GiHZHcGT IVFRIVD§ IVC6HUB. GTA%E§A% CgA%BkB} A©D*A©F¥ A©I%B{Jk C©LVE¹LV G@LVH:Kl I4J£I<IX'
                         ],
        hC       : [
                           ['E}Be FqBeG4C> GsC³GsD« GsE£G2FS FsG%E}G% D§G%D@FP C£E¥C£D« C£C±D@C> D©BeE}Be']
                         ],
        xMin           : 34,
        xMax           : 522,
        yMin           : -14,
        yMax           : 714,
        wdth           : 556
      };
      font["7"]        = {
        sC      : [
                           'G_Jo A«Jo A«L: IFL: IFJ} EmFeE<AB CBAB CXC£DqFD E}HoG_Jo'
                         ],
        xMin           : 35,
        xMax           : 514,
        yMin           : 0,
        yMax           : 700,
        wdth           : 556
      };
      font["8"]        = {
        sC             : [
                           'EoA% C·A%B­AÀ A£B·A£D_ A£EaBEF; B­F¹C£G4 C£G6 B:G§B:IX B:J¯C,Kr CÁLVEoLV G>LVH0Kr I!J¯I!IX I!G§G]G6 G]G4 HRF¹HºF; I]EaI]D_ I]B·HRAÀ GHA%EoA%'
                         ],
        hC             : [
                           ['EoBZ FcBZG-BÃ GyCgGyD_ GyEPG-Eµ FcFTEoFT D{FTD/Eµ CeEPCeD_ CeCgD/BÃ D{BZEoBZ','EoK! D±K!DPJj CµJ0CµIL CµHmDOH5 D¯G¡EoG¡ FPG¡F°H5 GJHmGJIL GJJ0F¯Jj FNK!EoK!']
                         ],
        xMin           : 31,
        xMax           : 525,
        yMin           : -14,
        yMax           : 714,
        wdth           : 556
      };
      font["9"]        = {
        sC             : [
                           'AÃD# C§D# C¯CNDBB¼ DyBeEPBe FsBeG8C³ GcDuGsFD GoFH F³DÃE@DÃ C{DÃB£EÄ A©G!A©Hy A©JJBªKP C«LVEiLV G}LVHuJ¥ IVIRIVF{ IVDVHcBµ GVA%EFA% C¿A%C!A´ B(B}AÃD#'
                         ],
        hC             : [
                           ['E_J» DiJ»D%JB CkIuCkH{ CkG¡D%G. DiFTE_FT FXFTF¿G. G]G¡G]H{ G]IsF½JE FXJ»E_J»']
                         ],
        xMin           : 34,
        xMax           : 522,
        yMin           : -14,
        yMax           : 714,
        wdth           : 556
      };
      font["a"]        = {
        sC             : [
                           'H¿G< H¿C( H¿BZIRBZ IsBZI­B_ I­A@ I@A%H{A% GcA%GJB# FJA%DeA% CNA%BoAs A¥BDA¥CT A¥D£B¥EL CPE{D³E¹ FiF6FiF6 GFFRGFG( GFH4EqH4 C½H4C¯F³ B(F³ B<IiE¡Ii G(IiG»I# H¿HTH¿G<'
                         ],
        hC             : [
                           ['G8CÁ G8EH F¯E,F8DÁ EmD·DÃD­ CgDkCgC_ CgB½D2Bw DmBZE8BZ E·BZF_B© G8C<G8CÁ']
                         ],
        xMin           : 32,
        xMax           : 548,
        yMin           : -14,
        yMax           : 531,
        wdth           : 556
      };
      font["á"]        = supplement(font.a,"acute",158,0);
      font["à"]        = supplement(font.a,"grave",158,0);
      font["ä"]        = supplement(font.a,"dieresis",158,0);
      font["â"]        = supplement(font.a,"circumflex",158,0);
      font["å"]        = supplement(font.a,"ring",158,0);
      font["æ"]        = {
        sC             : [
                           'LµC« NwC« NJBeMLA¨ LNA%K!A% HµA%H%Be G%A%DyA% CVA%BqAs A¥BBA¥CT A¥D£B¥EL CPE{D³E¹ F]F4FcF6 G:FPG:G( G:H4EqH4 C½H4C¯F³ B(F³ B4HHCBHÃ D8IiEyIi GyIiHVH] I@IiJÁIi L¯IiM­HP N£GBN£EL N£E,N¡D¯ H³D¯ H±C¯IPC8 I»BZJÁBZ LTBZLµC«'
                         ],
        hC             : [
                           ['G8D* G8ED F½E(FBD¿ EsD·E!D­ CgDmCgC_ CgBZE6BZ E¿BZFgB³ G8CJG8D*','H³F! L½F! L¿FÁLVGj K³H4J·H4 IÃH4IZGc H»F»H³F!']
                         ],
        xMin           : 32,
        xMax           : 863,
        yMin           : -14,
        yMax           : 531,
        wdth           : 889
      };
      font["b"]        = {
        sC             : [
                           'C»AB B@AB B@LV D#LV D#HF D(HF DVH³E,I< E¥IiF]Ii HFIiIHHF J@G2J@EB J@CaITBL HZA%F¥A% DsA%C¿BP C»BP C»AB'
                         ],
        hC             : [
                           ['H]EF H]F]G·GD GDH4F>H4 E2H4DhGR C¿FqC¿EF C¿D%DkC@ E8BZF>BZ GNBZG¿CL H]D.H]EF']
                         ],
        xMin           : 63,
        xMax           : 575,
        yMin           : -14,
        yMax           : 714,
        wdth           : 611
      };
      font["c"]        = {
        sC             : [
                           'IXFs GuFs GXH4E«H4 D¹H4DNGo CmF±CmE< CmD*D*CJ DuBZE¡BZ FcBZG"B¼ GeCXGuDF IXDF H¹A%E¡A% CµA%B­B@ A«CPA«E< A«G2B«HH C³IiE©Ii GDIiH@H¯ IHH(IXFs'
                         ],
        xMin           : 35,
        xMax           : 523,
        yMin           : -14,
        yMax           : 531,
        wdth           : 556
      };
      font["ç"]        = {
        sC             : [
                           'GuDF IXDF H½A<F(A* Ec@N Ec@J Es@PF#@P Fg@PF¹@, GN?¥GN?< GN>_F£>. F@=«E]=« DV=«C±>2 D2>¥ Dµ>cE4>c F.>cF.?4 F.?XEµ?m Ew?£ER?£ E%?£D§?m DX?µ EJA* CuA:B}BP A«C_A«E< A«G2B«HH C³IiE©Ii GDIiH@H¯ IHH(IXFs GuFs GXH4E«H4 D¹H4DNGo CmF±CmE< CmD*D*CJ DuBZE¡BZ FcBZG"B¼ GeCXGuDF'
                         ],
        xMin           : 35,
        xMax           : 523,
        yMin           : -221,
        yMax           : 531,
        wdth           : 556
      };
      font["č"]        = supplement(font.c,"caron",158,0);
      font["d"]        = {
        sC             : [
                           'H#LV I«LV I«AB H0AB H0BN H,BN GVA%EmA% C£A%B£BF A«CZA«EN A«GVB·Hi C±IiEHIi G<IiGÃHF H#HF H#LV'
                         ],
        hC             : [
                           ['CmE< CmD*D0CH D¡BZE­BZ F»BZGiCN H,D2H,EH H,FsG`GS FµH4E±H4 D{H4D,G> CmFZCmE<']
                         ],
        xMin           : 35,
        xMax           : 547,
        yMin           : -14,
        yMax           : 714,
        wdth           : 611
      };
      font["e"]        = {
        sC             : [
                           'IeD¯ CmD¯ CmC­D0C6 D{BZE¥BZ GBBZG¡C© IVC© I2BaH1A¦ G0A%E¥A% C·A%B±B< A«CRA«EF A«G*B±HF C¿IiE}Ii GVIiHcHH IiG2IiEX IiE2IeD¯'
                         ],
        hC             : [
                           ['CmF! G£F! G{F·G3Ge FmH4E}H4 D«H4D<Gg CqF»CmF!']
                         ],
        xMin           : 35,
        xMax           : 531,
        yMin           : -14,
        yMax           : 531,
        wdth           : 556
      };
      font["é"]        = supplement(font.e,"acute",158,0);
      font["è"]        = supplement(font.e,"grave",158,0);
      font["ë"]        = supplement(font.e,"dieresis",158,0);
      font["ê"]        = supplement(font.e,"circumflex",158,0);
      font["f"]        = {
        sC      : [
                           'B¡H! ATH! ATIL B¡IL B¡J! B¡KVCVKÃ C»LVD¿LV E­LVF<LH F<J¹ E³K!ERK! DcK!DcJ6 DcIL F#IL F#H! DcH! DcAB B¡AB B¡H!'
                         ],
        xMin           : 9,
        xMax           : 317,
        yMin           : 0,
        yMax           : 714,
        wdth           : 315
      };
      font["g"]        = {
        sC             : [
                           'GµIL IwIL IwAy Iw>(E{>( DF>(CL>o B:?BB,@k C³@k D0?RE«?R Gµ?RGµAZ GµBy G±By G(ABEXAB CoABBwBe A«CsA«Ec A«G<B§HN C©IiE]Ii G:IiG±H> GµH> GµIL'
                         ],
        hC             : [
                           ['E}Bw F«BwGRCi GµDJGµE_ GµFqGRGL F«H4E}H4 DqH4D(G@ CmFaCmEL CmD@D,Cc DwBwE}Bw']
                         ],
        xMin           : 35,
        xMax           : 538,
        yMin           : -205,
        yMax           : 531,
        wdth           : 593
      };
      font["h"]        = {
        sC             : [
                           'CÁAB B:AB B:LV CÁLV CÁHD D!HD DNH¯DÄI: EuIiFXIi G§IiHfH± IFH4IFF« IFAB GcAB GcFL GcH4E»H4 E(H4DdGg CÁF»CÁF# CÁAB'
                         ],
        xMin           : 60,
        xMax           : 514,
        yMin           : 0,
        yMax           : 714,
        wdth           : 574
      };
      font["i"]        = {
        sC             : [
                           'D#J¡ B@J¡ B@LV D#LV D#J¡',
                           'D#AB B@AB B@IL D#IL D#AB'
                         ],
        xMin           : 63,
        xMax           : 177,
        yMin           : 0,
        yMax           : 714,
        wdth           : 241
      };
      font["ı"]        = {
        sC             : [
                           'D#AB B@AB B@IL D#IL D#AB'
                         ],
        xMin           : 63,
        xMax           : 177,
        yMin           : 0,
        yMax           : 500,
        wdth           : 241
      };
      font["í"]        = supplement(font["ı"],"acute",0,0);
      font["ì"]        = supplement(font["ı"],"grave",0,0);
      font["ï"]        = supplement(font["ı"],"dieresis",0,0);
      font["î"]        = supplement(font["ı"],"circumflex",0,0);
      font["j"]        = {
        sC      : [
                           'D#J¡ B@J¡ B@LV D#LV D#J¡',
                           'B@@u B@IL D#IL D#@k D#>(A}>( AR>(@¹>0 @¹?e AR?]Ae?] AÁ?]B2?¥ B@?ÃB@@u'
                         ],
        xMin           : -22,
        xMax           : 177,
        yMin           : -205,
        yMax           : 714,
        wdth           : 241
      };
      font["k"]        = {
        sC      : [
                           'D#AB B@AB B@LV D#LV D#F* G@IL IXIL FLFP I¡AB GiAB E,E8 D#D4 D#AB'
                         ],
        xMin           : 63,
        xMax           : 542,
        yMin           : 0,
        yMax           : 714,
        wdth           : 537
      };
      font["l"]        = {
        sC             : [
                           'D#AB B@AB B@LV D#LV D#AB'
                         ],
        xMin           : 63,
        xMax           : 177,
        yMin           : 0,
        yMax           : 714,
        wdth           : 241
      };
      font["m"]        = {
        sC             : [
                           'CÁAB B:AB B:IL CµIL CµH< C»H< D­IiFVIi H4IiHyH< IuIiK<Ii M¹IiM¹F¯ M¹AB L2AB L2EÁ L2G0K¹Gg KqH4JwH4 H½H4H½EÃ H½AB G6AB G6FZ G6GJF°G¢ FeH4E£H4 E!H4DaGm CÁG#CÁF( CÁAB'
                         ],
        xMin           : 60,
        xMax           : 810,
        yMin           : 0,
        yMax           : 531,
        wdth           : 870
      };
      font["n"]        = {
        sC             : [
                           'CÁAB B:AB B:IL CµIL CµH4 C¹H0 D§IiFXIi G§IiHfH± IFH4IFF« IFAB GcAB GcFL GcH4E»H4 E(H4DdGg CÁF»CÁF# CÁAB'
                         ],
        xMin           : 60,
        xMax           : 514,
        yMin           : 0,
        yMax           : 531,
        wdth           : 574
      };
      font["ñ"]        = supplement(font.n,"tilde",167,0);
      font["ń"]        = supplement(font.n,"acute",167,0);
      font["o"]        = {
        sC             : [
                           'E·A% CÃA%BµB@ A­CTA­EH A­G:B¸HQ CÃIiE·Ii G«IiH¹HN IÁG:IÁEH IÁCTH¹B@ G«A%E·A%'
                         ],
        hC             : [
                           ['E·BZ G#BZGuCN H:D2H:EH H:F]GuG@ G#H4E·H4 D§H4D4G@ CoF]CoEH CoD2D4CN D§BZE·BZ']
                         ],
        xMin           : 36,
        xMax           : 558,
        yMin           : -14,
        yMax           : 531,
        wdth           : 593
      };
      font["ô"]        = supplement(font.o,"circumflex",176,0);
      font["ò"]        = supplement(font.o,"grave",176,0);
      font["ó"]        = supplement(font.o,"acute",176,0);
      font["ö"]        = supplement(font.o,"dieresis",176,0);
      font["p"]        = {
        sC             : [
                           'D#>D B@>D B@IL C»IL C»H@ C¿H@ DyIiF]Ii HFIiIHHF J@G2J@EB J@CaITBL HZA%F¥A% D±A%D(BH D#BH D#>D'
                         ],
        hC             : [
                           ['H]EF H]F]G·GD GDH4F>H4 E2H4DhGR C¿FqC¿EF C¿D%DkC@ E8BZF>BZ GNBZG¿CL H]D.H]EF']
                         ],
        xMin           : 63,
        xMax           : 575,
        yMin           : -191,
        yMax           : 531,
        wdth           : 611
      };
      font["q"]        = {
        sC             : [
                           'H0IL I«IL I«>D H#>D H#BH GÃBH G:A%EFA% CoA%BuBL A«CaA«EB A«G2B£HF C¥IiEmIi GPIiH,H@ H0H@ H0IL'
                         ],
        hC             : [
                           ['CmEF CmD.D.CL D{BZE­BZ F½BZGgC@ H,CÁH,EF H,FqGbGR F¹H4E­H4 D§H4D4GD CmF]CmEF']
                         ],
        xMin           : 35,
        xMax           : 547,
        yMin           : -191,
        yMax           : 531,
        wdth           : 611
      };
      font["r"]        = {
        sC             : [
                           'CÁAB B:AB B:IL C³IL C³G§ C·G§ D(HZD¥HÄ E]IiFBIi F]IiF»Ic F»G© FHG³F6G³ E<G³DqG4 CÁFTCÁE. CÁAB'
                         ],
        xMin           : 60,
        xMax           : 363,
        yMin           : 0,
        yMax           : 531,
        wdth           : 352
      };
      font["s"]        = {
        sC             : [
                           'A¥C± CgC± CwBZEPBZ G<BZG6Cc G2DBE¥Dm C]E4CDE@ A»E¯A»G@ A»HZC*I( CÁIiEHIi FwIiGgHÃ HeHLHyG* F­G* FqH4E8H4 C}H4C}GJ C}F¥DgF] D{FTFLF# GiE£H2EL H½D£H½Cw H½BLG§As F©A%ELA% C£A%B«A¡ A§B_A¥C±'
                         ],
        xMin           : 32,
        xMax           : 492,
        yMin           : -14,
        yMax           : 531,
        wdth           : 519
      };
      font["t"]        = {
        sC             : [
                           'B¡H! ARH! ARIL B¡IL B¡K¥ DcK¥ DcIL F0IL F0H! DcH! DcC{ DcC*DsB³ D«BmEPBm E³BmF0Bu F0AD D½A8D¿A8 CuA8C4A} B¡B4B¡C@ B¡H!'
                         ],
        xMin           : 8,
        xMax           : 311,
        yMin           : -5,
        yMax           : 672,
        wdth           : 333
      };
      font["u"]        = {
        sC             : [
                           'GcIL IFIL IFAB GgAB GgBR GcBR G8A©FfAV EµA%E<A% B:A%B:D< B:IL CÁIL CÁDR CÁBZEeBZ GcBZGcDu GcIL'
                         ],
        xMin           : 60,
        xMax           : 514,
        yMin           : -14,
        yMax           : 517,
        wdth           : 574
      };
      font["ú"]        = supplement(font.u,"acute",167,0);
      font["ù"]        = supplement(font.u,"grave",167,0);
      font["ü"]        = supplement(font.u,"dieresis",167,0);
      font["û"]        = supplement(font.u,"circumflex",167,0);
      font["v"]        = {
        sC      : [
                           'FLAB DLAB ATIL CLIL ERC2 EVC2 GRIL I>IL FLAB'
                         ],
        xMin           : 9,
        xMax           : 510,
        yMin           : 0,
        yMax           : 517,
        wdth           : 519
      };
      font["w"]        = {
        sC      : [
                           'E¯AB C¿AB A]IL CNIL D»CH D¿CH F_IL HDIL I¡CH I¥CH KTIL M<IL JyAB H±AB GNGB GJGB E¯AB'
                         ],
        xMin           : 13,
        xMax           : 765,
        yMin           : 0,
        yMax           : 517,
        wdth           : 778
      };
      font["x"]        = {
        sC      : [
                           'CVAB AJAB DPEc AkIL C¡IL EVF± G8IL I@IL FaEo ImAB GZAB ETD@ CVAB'
                         ],
        xMin           : 4,
        xMax           : 533,
        yMin           : 0,
        yMax           : 517,
        wdth           : 537
      };
      font["y"]        = {
        sC      : [
                           'D6@w DPAF AHIL CBIL EPCH ETCH GZIL IHIL F6@­ Es?RE>>µ Di>(CH>( By>(B*>4 B*?u B¡?gB¹?g C_?gC§?± CÁ@*D6@w'
                         ],
        xMin           : 3,
        xMax           : 515,
        yMin           : -205,
        yMax           : 517,
        wdth           : 519
      };
      font["ÿ"]        = supplement(font.y,"dieresis",139,0);
      font["z"]        = {
        sC      : [
                           'F*G» A¹G» A¹IL H_IL H_H, C±Bw H}Bw H}AB AoAB AoBc F*G»'
                         ],
        xMin           : 22,
        xMax           : 477,
        yMin           : 0,
        yMax           : 517,
        wdth           : 500
      };
      font["A"]        = {
        sC      : [
                           'C6AB A4AB EXLV GcLV K«AB I}AB HwD< D<D< C6AB'
                         ],
        hC       : [
                           ['F_Ja FXJa D£E{ H4E{ F_Ja']
                         ],
        xMin           : -7,
        xMax           : 675,
        yMin           : 0,
        yMax           : 714,
        wdth           : 667
      };
      font["Á"]        = supplement(font.A,"acute",197,213);
      font["À"]        = supplement(font.A,"grave",197,213);
      font["Ã"]        = supplement(font.A,"tilde",197,213);
      font["Â"]        = supplement(font.A,"circumflex",197,213);
      font["Ä"]        = supplement(font.A,"dieresis",197,213);
      font["Å"]        = supplement(font.A,"ring",197,213);
      font["Æ"]        = {
        sC             : [
                           'CJAB A4AB F{LV O{LV O{J¡ JBJ¡ JBG« ONG« ONF< JBF< JBB½ O©B½ O©AB HTAB HTD0 DwD0 CJAB'
                         ],
        hC             : [
                           ['HTJ¡ G¯J¡ EREo HTEo HTJ¡']
                         ],
        xMin           : -7,
        xMax           : 930,
        yMin           : 0,
        yMax           : 714,
        wdth           : 963
      };
      font["B"]        = {
        sC      : [
                           'GkAB BZAB BZLV G³LV IVLVJGK} K8K!K8Iu K8G¿ImGD ImG@ KyF©KyDP KyBÁJ}B6 IsABGkAB'
                         ],
        hC       : [
                           ['G±FL DTFL DTB± G±B± I¡B±I¡Dq I¡FLG±FL','GmJ­ DTJ­ DTG£ GmG£ HHG£H¦H4 I>HiI>IF I>J­GmJ­']
                         ],
        xMin           : 76,
        xMax           : 667,
        yMin           : 0,
        yMax           : 714,
        wdth           : 704
      };
      font["C"]        = {
        sC      : [
                           'K»H³ IÁH³ IVK,G:K, EeK,DoI¥ C«HoC«F¯ C«E*DoC¹ EeBmG:Bm HZBmI<CZ I¹D>J%Ec K½Ec K­CaJdB@ I<@ÃG:@Ã D¥@ÃCDB¡ A±DPA±F¯ A±IJCDJ¿ D¥LyG:Ly I0LyJVKy K¥JsK»H³'
                         ],
        xMin           : 38,
        xMax           : 684,
        yMin           : -17,
        yMax           : 731,
        wdth           : 722
      };
      font["D"]        = {
        sC      : [
                           'G*AB BZAB BZLV G*LV IeLVJ­J§ KÃIHKÃF¯ KÃDPJ­B· IeABG*AB'
                         ],
        hC       : [
                           ['FJJ­ DTJ­ DTB± FJB± HZB±ILD! J%D½J%F¯ J%H¡ILIw HZJ­FJJ­']
                         ],
        xMin           : 76,
        xMax           : 687,
        yMin           : 0,
        yMax           : 714,
        wdth           : 722
      };
      font["E"]        = {
        sC      : [
                           'JmAB BZAB BZLV J_LV J_J¡ DTJ¡ DTG« J#G« J#F< DTF< DTB½ JmB½ JmAB'
                         ],
        xMin           : 76,
        xMax           : 597,
        yMin           : 0,
        yMax           : 714,
        wdth           : 630
      };
      font["É"]        = supplement(font.E,"acute",195,197);
      font["È"]        = supplement(font.E,"grave",195,197);
      font["Ê"]        = supplement(font.E,"circumflex",195,197);
      font["Ë"]        = supplement(font.E,"dieresis",195,197);
      font["F"]        = {
        sC      : [
                           'DTAB BZAB BZLV J4LV J4J¡ DTJ¡ DTG« IZG« IZF< DTF< DTAB'
                         ],
        xMin           : 76,
        xMax           : 569,
        yMin           : 0,
        yMax           : 714,
        wdth           : 593
      };
      font["G"]        = {
        sC      : [
                           'GXG2 L8G2 L8AB J»AB JsBk I³A{I-AM HJ@ÃGD@Ã D¯@ÃCNB¡ A»DPA»F¯ A»IHCNJ¿ D¯LyGDLy I8LyJ]K} K¯J{L(H³ J4H³ J!I»I6Je HRK,GDK, EoK,DyI¥ CµHoCµF¯ CµE*DyC¹ EmBoGDBm H¥BkIjCS JPD<JTEu GXEu GXG2'
                         ],
        xMin           : 43,
        xMax           : 699,
        yMin           : -17,
        yMax           : 731,
        wdth           : 759
      };
      font["H"]        = {
        sC      : [
                           'DNAB BTAB BTLV DNLV DNGÁ IXGÁ IXLV KRLV KRAB IXAB IXFF DNFF DNAB'
                         ],
        xMin           : 73,
        xMax           : 648,
        yMin           : 0,
        yMax           : 714,
        wdth           : 722
      };
      font["I"]        = {
        sC      : [
                           'DTAB BZAB BZLV DTLV DTAB'
                         ],
        xMin           : 76,
        xMax           : 201,
        yMin           : 0,
        yMax           : 714,
        wdth           : 278
      };
      font["J"]        = {
        sC      : [
                           'FcLV H]LV H]D± H]C,G­B: F¿@ÃD©@Ã C.@ÃB@B# A]B½A]Dk A]E6 CVE6 CVDm CVCmC£C0 D.BmD½Bm E±BmF:C4 FcCqFcD£ FcLV'
                         ],
        xMin           : 13,
        xMax           : 461,
        yMin           : -17,
        yMax           : 714,
        wdth           : 537
      };
      font["K"]        = {
        sC      : [
                           'DTAB BZAB BZLV DTLV DTGL IPLV K§LV GJG¿ L,AB IuAB EÃFm DTE! DTAB'
                         ],
        xMin           : 76,
        xMax           : 693,
        yMin           : 0,
        yMax           : 714,
        wdth           : 685
      };
      font["L"]        = {
        sC      : [
                           'J*AB BZAB BZLV DTLV DTB½ J*B½ J*AB'
                         ],
        xMin           : 76,
        xMax           : 564,
        yMin           : 0,
        yMax           : 714,
        wdth           : 574
      };
      font["M"]        = {
        sC             : [
                           'DDAB BVAB BVLV E6LV H@Cy HDCy KDLV MÃLV MÃAB L2AB L2I³ L.I³ I!AB GTAB DHI³ DDI³ DDAB'
                         ],
        xMin           : 74,
        xMax           : 815,
        yMin           : 0,
        yMax           : 714,
        wdth           : 889
      };
      font["N"]        = {
        sC             : [
                           'D>AB BPAB BPLV DXLV IeD: IiD: IiLV KVLV KVAB INAB DDI] D>I] D>AB'
                         ],
        xMin           : 71,
        xMax           : 650,
        yMin           : 0,
        yMax           : 714,
        wdth           : 722
      };
      font["Ñ"]        = supplement(font.N,"tilde",197,241);
      font["O"]        = {
        sC             : [
                           'G:Ly IsLyK0J¿ LgIHLgF¯ LgDPK0B¡ Is@ÃG:@Ã D¥@ÃCDB¡ A±DPA±F¯ A±IHCDJ¿ D¥LyG:Ly'
                         ],
        hC             : [
                           ['G:K, EeK,DoI¥ C«HoC«F¯ C«E*DoC¹ EeBmG:Bm H³BmI©C¹ JmE*JmF¯ JmHoI©I¥ H³K,G:K,']
                         ],
        xMin           : 38,
        xMax           : 722,
        yMin           : -17,
        yMax           : 731,
        wdth           : 760
      };
      font["Ó"]        = supplement(font.O,"acute",260,197);
      font["Ò"]        = supplement(font.O,"grave",260,197);
      font["Ô"]        = supplement(font.O,"circumflex",260,197);
      font["Ö"]        = supplement(font.O,"dieresis",260,197);
      font["Õ"]        = supplement(font.O,"tilde",260,197);
      font["P"]        = {
        sC             : [
                           'DTAB BZAB BZLV GPLV IaLVJ]K< K6JLK6H¿ K6GoJ]F£ IaEgGPEg DTEg DTAB'
                         ],
        hC             : [
                           ['GFJ­ DTJ­ DTG2 GBG2 H%G2HkGe I<H!I<HÁ I<J­GFJ­']
                         ],
        xMin           : 76,
        xMax           : 634,
        yMin           : 0,
        yMax           : 714,
        wdth           : 667
      };
      font["Q"]        = {
        sC             : [
                           'J¿Bi LTAH KZ@@ I­Aw Hs@ÃG:@Ã D¥@ÃCDB¡ A±DPA±F¯ A±IHCDJ¿ D¥LyG:Ly IsLyK0J¿ LgIHLgF¯ LgD*J¿Bi'
                         ],
        hC             : [
                           ['HZB± GJC¯ HBD¹ IqC¡ JmDµJmF¯ JmHoI©I¥ H³K,G:K, EeK,DoI¥ C«HoC«F¯ C«E*DoC¹ EeBmG:Bm G·BmHZB±']
                         ],
        xMin           : 38,
        xMax           : 722,
        yMin           : -65,
        yMax           : 731,
        wdth           : 760
      };
      font["R"]        = {
        sC             : [
                           'DTAB BZAB BZLV G§LV ImLVJeKr K]J¯K]IT K]G>IqFm IqFi KDFJKDD: KDA¹KµAB I©AB IaA£IaB· IaDcI(E4 HkE±GDE± DTE± DTAB'
                         ],
        hC             : [
                           ['GkJ­ DTJ­ DTGL GoGL IcGLIcI0 IcJ­GkJ­']
                         ],
        xMin           : 76,
        xMax           : 680,
        yMin           : 0,
        yMax           : 714,
        wdth           : 704
      };
      font["S"]        = {
        sC             : [
                           'A§DÁ C¡DÁ C¡C¥DiC2 EFBmFiBm G¥BmHRC0 H¹CkH¹DD H¹EHGÃEu G³E{DwFk B:G@B:IT B:JÁC_Kµ DqLyFDLy H.LyIFK§ JiJ©JiI0 HoI0 H_K,F:K, ERK,D¯J© D4JTD4Is D4HiE_H; F«G±H{GL I£G#JLF8 J³EVJ³Da J³B£I_A« HD@ÃFX@Ã DT@ÃC6A½ A«BÃA§DÁ'
                         ],
        xMin           : 33,
        xMax           : 615,
        yMin           : -17,
        yMax           : 731,
        wdth           : 648
      };
      font["T"]        = {
        sC             : [
                           'D¹J¡ ARJ¡ ARLV JVLV JVJ¡ F³J¡ F³AB D¹AB D¹J¡'
                         ],
        xMin           : 8,
        xMax           : 586,
        yMin           : 0,
        yMax           : 714,
        wdth           : 593
      };
      font["U"]        = {
        sC             : [
                           'BJED BJLV DDLV DDE¹ DDDTDsC£ E<ByF·By HmByI6C£ IeDTIeE¹ IeLV K_LV K_ED K_C8J>B( I#@ÃF·@Ã D§@ÃCmB( BJC8BJED'
                         ],
        xMin           : 68,
        xMax           : 654,
        yMin           : -17,
        yMax           : 714,
        wdth           : 722
      };
      font["Ú"]        = supplement(font.U,"acute",241,197);
      font["Ù"]        = supplement(font.U,"grave",241,197);
      font["Û"]        = supplement(font.U,"circumflex",241,197);
      font["Ü"]        = supplement(font.U,"dieresis",241,197);
      font["V"]        = {
        sC             : [
                           'G*AB D·AB A8LV C<LV F!Cm F%Cm H·LV JµLV G*AB'
                         ],
        xMin           : -5,
        xMax           : 616,
        yMin           : 0,
        yMax           : 714,
        wdth           : 611
      };
      font["W"]        = {
        sC             : [
                           'FHAB DFAB ANLV CLLV ENCµ ERCµ GsLV IsLV K­Cµ K±Cµ M»LV O¹LV L¯AB J±AB HqI© HmI© FHAB'
                         ],
        xMin           : 6,
        xMax           : 938,
        yMin           : 0,
        yMax           : 714,
        wdth           : 944
      };
      font["X"]        = {
        sC             : [
                           'A<AB E6G% A_LV C«LV FLH_ HÁLV K6LV G_G% KXAB I(AB FDEe CZAB A<AB'
                         ],
        xMin           : -3,
        xMax           : 651,
        yMin           : 0,
        yMax           : 714,
        wdth           : 648
      };
      font["Y"]        = {
        sC             : [
                           'GHAB ENAB ENEs A6LV CXLV FRGV IFLV K_LV GHEs GHAB'
                         ],
        xMin           : -6,
        xMax           : 654,
        yMin           : 0,
        yMax           : 714,
        wdth           : 648
      };
      font["Z"]        = {
        sC             : [
                           'H0J¡ B0J¡ B0LV JoLV JoJ» D.B½ J¥B½ J¥AB AqAB AqB± H0J¡'
                         ],
        xMin           : 23,
        xMax           : 608,
        yMin           : 0,
        yMax           : 714,
        wdth           : 630
      };
      font["¡"]        = {
        sC             : [
                           'BRIi D_Ii D_Go BRGo BRIi',
                           'C·FZ DVAm DV>T B]>T B]Am BÁFZ C·FZ'
                         ],
        xMin           : 72,
        xMax           : 206,
        yMin           : -183,
        yMax           : 531,
        wdth           : 278
      };
      font["!"]        = {
        sC             : [
                           'D_AB BRAB BRC< D_C< D_AB',
                           'BÁDP B]I: B]LV DVLV DVI: C·DP BÁDP'
                         ],
        xMin           : 72,
        xMax           : 206,
        yMin           : 0,
        yMax           : 714,
        wdth           : 278
      };
      font["|"]        = {
        sC             : [
                           'C©@Ã B:@Ã B:Ly C©Ly C©@Ã'
                         ],
        xMin           : 60,
        xMax           : 162,
        yMin           : -17,
        yMax           : 731,
        wdth           : 222
      };
      font['"']        = {
        sC             : [
                           'F·H! EHH! EHLV F·LV F·H!',
                           'D4H! BiH! BiLV D4LV D4H!'
                         ],
        xMin           : 83,
        xMax           : 361,
        yMin           : 432,
        yMax           : 714,
        wdth           : 444
      };
      font["'"]        = {
        sC             : [
                           'D>H! BsH! BsLV D>LV D>H!'
                         ],
        xMin           : 88,
        xMax           : 190,
        yMin           : 432,
        yMax           : 714,
        wdth           : 278
      };
      font["#"]        = {
        sC             : [
                           'GwE} HÃE} HÃDg GcDg G%AB E©AB F@Dg DeDg D(AB B«AB CBDg A©Dg A©E} CXE} C}G£ B@G£ B@H¹ C³H¹ DJL: EmL: E0H¹ F±H¹ GHL: HkL: H.H¹ IZH¹ IZG£ G½G£ GwE}'
                         ],
        hC             : [
                           ['FVE} F{G£ D¿G£ DyE} FVE}']
                         ],
        xMin           : 34,
        xMax           : 524,
        yMin           : 0,
        yMax           : 700,
        wdth           : 556
      };
      font["$"]        = {
        sC             : [
                           'AeDu CHDu CDB]EHBT EHF8 CwFsB·G> A¥H,A¥Iq A¥K%B¯K· C¯LyEHLy EHM· EÁM· EÁLy G]LyHTK» ITK0ITIs GqIs GgKDEÁKD EÁGÁ G¡GcHgF· IyF%IyDc IyB¯HoA¹ GsA*EÁ@Ã EÁ?§ EH?§ EH@Ã CkA#BgAÂ AcB½AeDu'
                         ],
        hC             : [
                           ['EÁF% EÁBT G·BgG·DB G·E(GHEa FµE«EÁF%','EHH4 EHKD CgKDCgI£ CgHmEHH4']
                         ],
        xMin           : 17,
        xMax           : 539,
        yMin           : -95,
        yMax           : 809,
        wdth           : 556
      };
      font["%"]        = {
        sC             : [
                           'E4F: C«F:C2G0 BgG¹BgIH BgJwC6Ka C±LVE4LV FZLVG2Ka G¥JwG¥IH G¥G¹G6G0 FaF:E4F:',
                           'LÃA% KuA%JÁA¿ JRB¥JRD4 JREcK!FL K{GBLÃGB NFGBNÁFL OoEcOoD4 OoB¥O!A¿ NLA%LÃA%',
                           'Fg@µ EJ@µ KTLk LmLk Fg@µ'
                         ],
        hC             : [
                           ['C½IH C½G<E2G< FNG<FNIH FNKTE2KT C½KTC½IH'],
                           ['K©D4 K©B(LÁB( N:B(N:D4 N:F@LÁF@ K©F@K©D4'],
                           []
                         ],
        xMin           : 82,
        xMax           : 918,
        yMin           : -24,
        yMax           : 724,
        wdth           : 1000
      };
      font["&"]        = {
        sC             : [
                           'KoAB IVAB HTBc G:A%EDA% C}A%B¢Aº A¥B«A¥DN A¥FDDJGm C:I!C:J# C:K<CÂK½ D§LyE»Ly G,LyG³L! H}KDH}J! H}HBF{G8 HXE, HyE©H§Fm JLFm J4D»I]C± KoAB'
                         ],
        hC             : [
                           ['GZC{ EBFV D<E§D4E} CgE8CgDJ CgCZD%B½ DgBZELBZ F8BZF£B· FÃC,GZC{','EÁKN E_KNE2K! D©JwD©J0 D©IuE4I0 E_H{E«HB FZH{F}I! G0I_G0J* G0JsF«JÃ FaKNEÁKN']
                         ],
        xMin           : 32,
        xMax           : 662,
        yMin           : -14,
        yMax           : 731,
        wdth           : 648
      };
      font["{"]        = {
        sC             : [
                           'A:D§ A:F8 AyF8B.FV BwF¡BwGJ BwJg BwKeCVL6 D#LyDwLy F,Ly F,KD E>KD DNKDDNJ8 DNG2 DNFHC¡E³ CHEkB¡Ea B¡E] DNEHDNC¡ DN@§ DN?yE>?y F,?y F,>D Dw>D D#>DCV>© Bw?XBw@V BwCc BwD8B.De AyD§A:D§'
                         ],
        xMin           : -4,
        xMax           : 309,
        yMin           : -191,
        yMax           : 731,
        wdth           : 296
      };
      font["}"]        = {
        sC             : [
                           'E½F8 E½D§ E]D§E(Dg D_D>D_Cs D_@V D_?XC¡>© C0>DB_>D A(>D A(?y A¹?y B©?yB©@§ B©C­ B©DuCVE, C¯ERDVE] DVEa B©EuB©G> B©J8 B©KDA¹KD A(KD A(Ly B_Ly C0LyC¡L6 D_KeD_Jg D_GZ D_F§E(FX E]F8E½F8'
                         ],
        xMin           : -13,
        xMax           : 300,
        yMin           : -191,
        yMax           : 731,
        wdth           : 296
      };
      font["("]        = {
        sC             : [
                           'E¡>D DD>D B#A±B#E_ B#I<DDLy E¡Ly C«I@C«E_ C«AeE¡>D'
                         ],
        xMin           : 49,
        xMax           : 286,
        yMin           : -191,
        yMax           : 731,
        wdth           : 278
      };
      font[")"]        = {
        sC             : [
                           'A2Ly BmLy D¯I,D¯E] D¯A}Bm>D A2>D C(AyC(E] C(IVA2Ly'
                         ],
        xMin           : -8,
        xMax           : 229,
        yMin           : -191,
        yMax           : 731,
        wdth           : 278
      };
      font["*"]        = {
        sC             : [
                           'B:H2 CFIo AiJ: A·K< CqJg CqLV DyLV DyJg FRK< F¥J: DÁIo F*H2 E@Ge D2I( C*Ge B:H2'
                         ],
        xMin           : 19,
        xMax           : 352,
        yMin           : 401,
        yMax           : 714,
        wdth           : 370
      };
      font["+"]        = {
        sC             : [
                           'B!F! E4F! E4I6 F£I6 F£F! IµF! IµDV F£DV F£AB E4AB E4DV B!DV B!F!'
                         ],
        xMin           : 48,
        xMax           : 552,
        yMin           : 0,
        yMax           : 506,
        wdth           : 600
      };
      font[","]        = {
        sC             : [
                           'CVAB BLAB BLCP DcCP DcAB Dc@HCº?t CL>ÁBT>© BT?£ B·?³C6@G CX@¡CVAB'
                         ],
        xMin           : 69,
        xMax           : 208,
        yMin           : -158,
        yMax           : 135,
        wdth           : 278
      };
      font["-"]        = {
        sC             : [
                           'FkDw B#Dw B#FN FkFN FkDw'
                         ],
        xMin           : 49,
        xMax           : 340,
        yMin           : 218,
        yMax           : 326,
        wdth           : 389
      };
      font["."]        = {
        sC             : [
                           'DcAB BLAB BLCP DcCP DcAB'
                         ],
        xMin           : 69,
        xMax           : 208,
        yMin           : 0,
        yMax           : 135,
        wdth           : 278
      };
      font["/"]        = {
        sC             : [
                           'Bq@Ã @¹@Ã ETLy G.Ly Bq@Ã'
                         ],
        xMin           : -22,
        xMax           : 374,
        yMin           : -17,
        yMax           : 731,
        wdth           : 352
      };
      font[":"]        = {
        sC             : [
                           'DcAB BLAB BLCP DcCP DcAB',
                           'DcG( BLG( BLI6 DcI6 DcG('
                         ],
        xMin           : 69,
        xMax           : 208,
        yMin           : 0,
        yMax           : 506,
        wdth           : 278
      };
      font[";"]        = {
        sC             : [
                           'DcG( BLG( BLI6 DcI6 DcG(',
                           'CVAB BLAB BLCP DcCP DcAB Dc@HCº?t CL>ÁBT>© BT?£ B·?³C6@G CX@¡CVAB'
                         ],
        xMin           : 69,
        xMax           : 208,
        yMin           : -158,
        yMax           : 506,
        wdth           : 278
      };
      font["<"]        = {
        sC             : [
                           'D*E< I¹B¡ I¹A2 AÁDu AÁE§ I¹IF I¹G{ D*E<'
                         ],
        xMin           : 46,
        xMax           : 554,
        yMin           : -8,
        yMax           : 514,
        wdth           : 600
      };
      font["="]        = {
        sC             : [
                           'B!DX IµDX IµB¯ B!B¯ B!DX',
                           'B!Gm IµGm IµEÃ B!EÃ B!Gm'
                         ],
        xMin           : 48,
        xMax           : 552,
        yMin           : 101,
        yMax           : 405,
        wdth           : 600
      };
      font[">"]        = {
        sC             : [
                           'AÁA2 AÁB¡ G­E< AÁG{ AÁIF I¹E§ I¹Du AÁA2'
                         ],
        xMin           : 46,
        xMax           : 554,
        yMin           : -8,
        yMax           : 514,
        wdth           : 600
      };
      font["¿"]        = {
        sC             : [
                           'DgGo DgIi FsIi FsGo DgGo',
                           'GTA³ I8A³ I:@:H7?6 G4>2EX>2 C¿>2BÃ>¿ B#?©B#A< B#B8B]B¯ B{C<CWC­ D4DXDRD­ D§EXD§FZ F]FZ F]E4F6DZ E¹C±E@CD DcBsDNBZ CÁA¿CÁAD CÁ@_Dg?Ã DÁ?qEc?q FZ?qFº@> GT@¯GTA³'
                         ],
        xMin           : 49,
        xMax           : 507,
        yMin           : -200,
        yMax           : 531,
        wdth           : 556
      };
      font["?"]        = {
        sC             : [
                           'FoAB DcAB DcC< FoC< FoAB',
                           'C«H³ B#H³ B!JoC$Kt D(LyE§Ly GBLyH=K¯ I8JÃI8Ie I8HiH£G· HcGeG«F» G(FHF­E¹ FXEHFXDF D£DF D£EmE%FF EFFµE¿G] F{H.F±HF G>H§G>I] G>JJFyJ« F>K:E{K: C«K:C«H³'
                         ],
        xMin           : 49,
        xMax           : 507,
        yMin           : 0,
        yMax           : 731,
        wdth           : 556
      };
      font["@"]        = {
        sC      : [
                           'I§I¡ J³I¡ I£Eq IqE2IqD¹ IqDgI·Dg JuDgKDEc K»FgK»G¹ K»IqJ{Jw IeKwG¥Kw E©KwDfJI CDH¿CDFÁ CDD¡DoCN EµB!G·B! J*B!KVCi LcCi K¥BNJdAx ID@ÃG¯@Ã ER@ÃC¡By B#DTB#G% B#IRC~K$ EVLyG¥Ly I·LyKVKT LÃJ*LÃH. LÃEÁKqDo J_CZIHCZ HXCZHRDN HNDN GiC]FoC] EsC]DÁD8 DJD·DJE¹ DJG_EBHy FDI¿G£I¿ H½I¿IaH¯ I§I¡'
                         ],
        hC       : [
                           ['F·Ds G§DsHXEo I%F_I%GV I%G¿HxHQ HHH©G«H© F·H©F@G³ EuG#EuF( EuEXEÃE$ FLDsF·Ds']
                         ],
        xMin           : 49,
        xMax           : 751,
        yMin           : -17,
        yMax           : 731,
        wdth           : 800
      };
      font["["]        = {
        sC      : [
                           'E³>D BR>D BRLy E³Ly E³KD D*KD D*?y E³?y E³>D'
                         ],
        xMin           : 72,
        xMax           : 295,
        yMin           : -191,
        yMax           : 731,
        wdth           : 296
      };
      font["]"]        = {
        sC      : [
                           'ADLy D¥Ly D¥>D AD>D AD?y C*?y C*KD ADKD ADLy'
                         ],
        xMin           : 1,
        xMax           : 224,
        yMin           : -191,
        yMax           : 731,
        wdth           : 296
      };
      font["^"]        = {
        sC      : [
                           'E½JN D6Fa BkFa ERL: FcL: IJFa G¡Fa E½JN'
                         ],
        xMin           : 84,
        xMax           : 516,
        yMin           : 335,
        yMax           : 700,
        wdth           : 600
      };
      font["_"]        = {
        sC      : [
                           'I*@, I*?H AB?H AB@, I*@,'
                         ],
        xMin           : 0,
        xMax           : 500,
        yMin           : -125,
        yMax           : -75,
        wdth           : 500
      };
      font[" "]        = {
        sC      : [
                         ],
        xMin           : 0,
        xMax           : 500,
        yMin           : -125,
        yMax           : -75,
        wdth           : 278
      };
      font[" "]        = {
        sC      : [
                         ],
        xMin           : 0,
        xMax           : 500,
        yMin           : -125,
        yMax           : -75,
        wdth           : 278
      };

      return font;


      function supplement(basis,extra,offsetX,offsetY){
        var glyph      = {
              xMin     : basis.xMin,
              xMax     : basis.xMax,
              yMin     : basis.yMin,
              yMax     : basis.yMax,
              wdth     : basis.wdth
            },
            shapes     = basis.sC.map(shape=>shape),
            holes      = typeof basis.hC === "object" ? basis.hC.map(hole=>hole) : undefined ,
            extraShapes= extra === "dieresis" ? 2 : 1 , 
            extraHoles = extra === "ring" ? 1 : 0 ;

        if ( extraShapes === 2 ) {
          if ( holes ) { holes.unshift([]) }
          if ( extra === "dieresis" ) { shapes.unshift(dieresisRightCoded(offsetX,offsetY)) }
        }
        if ( extraHoles ) {
          if ( typeof holes !== "object" ) {
            holes      = basis.sC.map(shape=>[])
          }
          if ( extra === "ring" ) {
            holes.unshift(ringHoleCoded(offsetX,offsetY)) 
          }
        } else {
          if ( holes ) { holes.unshift([]) }
        }

        if ( extra === "dieresis" )   { 
          glyph.yMax   = dieresisYmax(offsetY);
          shapes.unshift(dieresisLeftCoded(offsetX,offsetY))
        }
        if ( extra === "circumflex" ) {
          glyph.yMax   = circumflexYmax(offsetY);
          shapes.unshift(circumflexCoded(offsetX,offsetY)) 
        }
        if ( extra === "acute" )      { 
          glyph.yMax   = acuteYmax(offsetY);
          shapes.unshift(acuteCoded(offsetX,offsetY)) 
        }
        if ( extra === "grave" )      { 
          glyph.yMax   = graveYmax(offsetY);
          shapes.unshift(graveCoded(offsetX,offsetY)) 
        }
        if ( extra === "tilde" )      { 
          glyph.yMax   = tildeYmax(offsetY);
          shapes.unshift(tildeCoded(offsetX,offsetY))
        }
        if ( extra === "ring" )       { 
          glyph.yMax   = ringYmax(offsetY);
          shapes.unshift(ringCoded(offsetX,offsetY))
        }
        glyph.sC       = shapes;
        if ( holes ) {
          glyph.hC     = holes
        }
        return glyph     
      };

      //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  
      // To support non-english letters, we need a variety of new symbols: acute, dieresis, etc.
      // It turns out that these symbols can be re-used, with some placement changes
      // To save space and code, that's what we do
      // These functions return the special symbols in compressed or raw forms
      function acuteRaw(dx,dy){
        return [[128+dx,588+dy],[45+dx,588+dy],[135+dx,731+dy],[270+dx,731+dy]]
      };
      function acuteCoded(dx,dy){
        return codeList(acuteRaw(dx,dy))
      };
      function acuteYmax(y){return 731+y};

      function graveRaw(dx,dy){
        return [[113+dx,588+dy],[-29+dx,731+dy],[105+dx,731+dy],[196+dx,588+dy]]
      };
      function graveCoded(dx,dy){
        return codeList(graveRaw(dx,dy))
      };
      function graveYmax(y){return 731+y};

      function circumflexRaw(dx,dy){
        return [[120+dx,678+dy],[50+dx,588+dy],[-42+dx,588+dy],[65+dx,731+dy],[176+dx,731+dy],[284+dx,588+dy],[191+dx,588+dy]]
      };
      function circumflexCoded(dx,dy){
        return codeList(circumflexRaw(dx,dy))
      };
      function circumflexYmax(y){return 731+y};

      function caronRaw(dx,dy){
        return [[284+dx,731+dy],[176+dx,588+dy],[65+dx,588+dy],[-42+dx,731+dy],[50+dx,731+dy],[120+dx,642+dy],[191+dx,731+dy]]
      };
      function caronCoded(dx,dy){
        return codeList(caronRaw(dx,dy))
      };
      function caronYmax(y){return 731+y};

      function dieresisLeftRaw(dx,dy){
        return [[92+dx,599+dy],[-22+dx,599+dy],[-22+dx,707+dy],[92+dx,707+dy]]
      };
      function dieresisLeftCoded(dx,dy){
        return codeList(dieresisLeftRaw(dx,dy))
      };
      function dieresisRightRaw(dx,dy){
        return [[150+dx,707+dy],[264+dx,707+dy],[264+dx,599+dy],[150+dx,599+dy]]
      };
      function dieresisRightCoded(dx,dy){
        return codeList(dieresisRightRaw(dx,dy))
      };
      function dieresisYmax(y){return 707+y};

      function tildeRaw(dx,dy){
        return [[297+dx,714+dy],[279+dx,599+dy,186+dx,599+dy],[163+dx,599+dy,113.5+dx,617.5+dy],[64+dx,636+dy,43+dx,636+dy],[26+dx,636+dy,13.5+dx,623+dy],[1+dx,610+dy,1+dx,595+dy],[-56+dx,595+dy],[-49+dx,639+dy,-24+dx,671+dy],[6+dx,708+dy,48+dx,708+dy],[81+dx,708+dy,127.5+dx,689+dy],[174+dx,670+dy,191+dx,670+dy],[229+dx,670+dy,241+dx,714+dy]]
      };
      function tildeCoded(dx,dy){
        return codeList(tildeRaw(dx,dy))
      };
      function tildeYmax(y){return 714+y};

      function ringHoleRaw(dx,dy){
        return [[
          [60+dx,652+dy],[60+dx,628+dy,78.5+dx,609.5+dy],[97+dx,591+dy,121+dx,591+dy],[146+dx,591+dy,164+dx,609.5+dy],[182+dx,628+dy,182+dx,652+dy],[182+dx,677+dy,164+dx,695+dy],[146+dx,713+dy,121+dx,713+dy],[97+dx,713+dy,78.5+dx,695+dy],[60+dx,677+dy,60+dx,652+dy]
        ]]
      };
      function ringHoleCoded(dx,dy){
        return [codeList(ringHoleRaw(dx,dy)[0])]
      };
      function ringRaw(dx,dy){
        return [[121+dx,549+dy],[80+dx,549+dy,49+dx,580+dy],[18+dx,611+dy,18+dx,652+dy],[18+dx,694+dy,49+dx,724.5+dy],[80+dx,755+dy,121+dx,755+dy],[163+dx,755+dy,193.5+dx,724.5+dy],[224+dx,694+dy,224+dx,652+dy],[224+dx,611+dy,193.5+dx,580+dy],[163+dx,549+dy,121+dx,549+dy]]
      };
      function ringCoded(dx,dy){
        return codeList(ringRaw(dx,dy))
      };
      function ringYmax(y){return 755+y};


      function dotlessiRaw(){
        return [[177,517],[177,0],[63,0],[63,517]]
      };
      function dotlessiCoded(){
        return codeList(dotlessiRaw())
      };
    }
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//  COMIC SANS MS  COMIC SANS MS  COMIC SANS MS
// 

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){

    return function(codeList){

      var font={reverseHoles:false,reverseShapes:true},nbsp=' ';

      font["a"]        = {
        sC             : [
                           'HD@¤ H1@¤G¤A, GUATG?At FbAAE½A& ES@°E"@° C>@°BVA± AtBªAtD¤ AtFnB¹G¸ D8I=E½I= FpI=GYH´ H^HZH^G° H^GtHJG_ H@G9H;Fe H5E²H4D® H3C´HECK HOBÃH¥AÂ H¬A±H¼Al HÂA[ HÂA4H¦@½ Hi@¤HD@¤'
                         ],
        hC             : [
                           ['FzF( FzFRF¡F¦ F§G4F±Gm FkG¢FPGª F6G³F&G³ D²G³D!F¸ C4E¼C4Dy C4CXCmB« D$B8D¹B8 EuB8F5BZ FYBmF»C# FzE&FzF(']
                         ],
        xMin           : 24.5,
        xMax           : 494.5,
        yMin           : -32.5,
        yMax           : 509.5,
        wdth           : 511.5
      };
      font["á"]        = supplement(font.a,"acute",100,0);
      font["à"]        = supplement(font.a,"grave",130,-17);
      font["ä"]        = supplement(font.a,"dieresis",-24,8);
      font["â"]        = supplement(font.a,"circumflex",-9,0);
      font["å"]        = supplement(font.a,"ring",-10,-10);
      font["æ"]        = {
        sC             : [
                           'GUAw G,AOFfA1 E¾@µEa@µ C°@µB©AÄ A¦C-A¦D¦ A¦FiC2G± D^I1FDI1 G)I1H0H¤ HPHxHVG¶ H°HdIpHµ JKI>K,I> LII>M/H­ N3HFN3G8 N3FUMAE§ L¶EdKwD¼ H£Ci IoBEKGBE K¹BELmBa MRB¢MzC3 MÃChNACh NdChN¡CN N»C4N»Bµ N»AÃMbAS LK@¸KG@¸ Ie@¸H}A¦ H£ApH¨AA H¬@»H:@» G©@»GrA2 GeAAGUAw'
                         ],
        hC             : [
                           ['K,G± I=G±HqD¿ J°EÁ L6FoL»G@ LDG±K,G±','GEGk F¤G¯ FoG¶F5G¶ D¾G¶D,F³ CBE·CBDx CBC}C¹B» DpB0EiB0 F*B0FbBI F»BcGEB¶ G/C²G/D8 G/FJGEGk']
                         ],
        xMin           : 32.5,
        xMax           : 875,
        yMin           : -24,
        yMax           : 510,
        wdth           : 911.5
      };
      font["b"]        = {
        sC             : [
                           'E´@» D}@»C¥AS CdA#C6A# B´A#BxA> B^AXB^A¢ B^A»B`BJ BcB}BcB¸ BcC~B]EK BWF½BWG¥ BWHIBXI³ BYKVBYKÂ BYLYBrL« BµMDCJMD C¶MDC¶Lp C¶LbC²LG C­L,C­KÂ CªJI C¨HP DZH¬E%I% EtICF6IC G«ICH®H! I©F­I©E. I©COHxB4 Gh@»E´@»'
                         ],
        hC             : [
                           ['F6G­ EgG­DµG^ DjGGC©F~ C§ET C¨D; C©B¾ D5B©D­Bf EFBRE´BR FÂBRG{C6 HUC¼HUE. HUF?G®FÄ G<G­F6G­']
                         ],
        xMin           : 74.5,
        xMax           : 546,
        yMin           : -21,
        yMax           : 769,
        wdth           : 593
      };
      font["c"]        = {
        sC             : [
                           'E¦@§ D:@§C5A~ B(B}B(DL B(EµC,Gf D>IPEwIP FVIPGLI" HbHjHbG¹ HbGrHIGT H0G7G¯G7 GqG7G[GH GFGYG2Gk FzG»EwG» DµG»D1Fg CXECCXDL CXCKD0B¤ D¥B<E¦B< F=B<F£B[ GrBº G±C&G¾C& H?C&HYB­ HuBnHuBH HuA¤G^A? FZ@§E¦@§'
                         ],
        xMin           : 51,
        xMax           : 473,
        yMin           : -31,
        yMax           : 519,
        wdth           : 513.5
      };
      font["ç"]        = {
        sC             : [
                           'G1?¥ G1>¬Fw>L F;=²EE=² Ds=²D(>. CJ>WCJ>Á CJ?SC°?S D0?SD]?; D¬?"E:?" Ek?#E¥?; E¼?QE¼?~ E¼@,Eu@Q EP@wD©@¶ CkA6B°B& B(BÂB(DL B(EµC,Gf D>IPEwIP FVIPGLI" HbHjHbG¹ HbGrHIGT H0G7G¯G7 GqG7G[GH GFGYG2Gk FzG»EwG» DµG»D1Fg CXECCXDL CXCKD0B¤ D¥B<E¦B< F=B<F£B[ GrBº G±C&G¾C& H?C&HYB­ HuBnHuBH HuAeF{@½ F¹@vG#@O G1@)G1?¥'
                         ],
        xMin           : 51,
        xMax           : 473,
        yMin           : -217.5,
        yMax           : 519,
        wdth           : 513.5
      };
      font["d"]        = {
        sC             : [
                           'IMGÃ IAF³IAE¤ IAC;I`A¸ IbA«IbA¢ IbAXIFA? I*A$H©A$ HJA$H-A~ GhAIF¾A/ FP@¸E¡@¸ D4@¸C/A¾ B%C$B%D~ B%F¥C0GÂ D:I<EºI< F«I<GFH¼ H!HV H/KrHBL¢ HOMVH¾MV IuMVIuLx IuKqIMGÃ'
                         ],
        hC             : [
                           ['E¾G© DxG©D$G$ CSFDCSD¤ CSC¦D,C( D©BME¡BM FPBMF«Bl G*B~GvC< G¦CIG´C[ G±D§ G²Ev G´Fi GmG7G/G` FrG©E¾G©']
                         ],
        xMin           : 50,
        xMax           : 537,
        yMin           : -22.5,
        yMax           : 778,
        wdth           : 587
      };
      font["e"]        = {
        sC             : [
                           'E´@¸ D5@¸C,A¦ A¹B~A¹DY A¹FWBµG¦ CºI>ExI> F¼I>G£Hª H¡HDH¡G8 H¡FWG²Eª G_EdF@D¼ CKCi C¥BºDSBo E$BEE´BE FUBEG/B` H"B¢HDC3 HfChH®Ch I-ChIHCN IdC4IdBµ IdB$H4AW FÂ@¸E´@¸'
                         ],
        hC             : [
                           ['ExG± D£G±D1G2 CcFVC;D¿ EgF+ FºF¤GcG@ F±G±ExG±']
                         ],
        xMin           : 42,
        xMax           : 528.5,
        yMin           : -22.5,
        yMax           : 510,
        wdth           : 547.5
      };
      font["é"]        = supplement(font.e,"acute",100,0);
      font["è"]        = supplement(font.e,"grave",130,0);
      font["ë"]        = supplement(font.e,"dieresis",24,0);
      font["ê"]        = supplement(font.e,"circumflex",0,0);
      font["f"]        = {
        sC             : [
                           'GYKÂ EnKÂEQIV ENH½ FuI%G$I% H@I%H@HD H@G~GuGp GSGjG%Gl F{GmEEG^ E=E¢ E=EBEADI EECPEEB· EEA[E0@t DÂ@$DU@$ D-@$C³@? Cu@YCu@£ Cu@«Cw@· C®A¶C®C( C«E3 C«GN B±GDBnGD A®GDA®H" A®H¦C6H« C¶H® C¹IBD!IÃ D;KyD²L` EvM[GMM[ HXM[HXL} HXKÂGYKÂ'
                         ],
        xMin           : 36.5,
        xMax           : 459,
        yMin           : -78.5,
        yMax           : 780.5,
        wdth           : 508
      };
      font["g"]        = {
        sC             : [
                           'HnDg HVAÁ HQ@[H.?` G¦>AG!=w F-<¾DO<¾ CM<¾Bv=, A{=EA{=µ A{>jBO>j Bs>jCD>X C¹>GD{>I F5>KF~?¡ G,@vG/Bm F{A®F1AZ EiA)D®A) CZA)BlB! A}B½A}D[ A}FcB¶G¦ D0I)F=I) F»I)GVHµ G¶H|H3HL H¿HIH¿GX H¿FµHªEÁ HrDºHnDg'
                         ],
        hC             : [
                           ['F3G° D{G°C·F° C:E½C:Di C:C[CpB¶ D$BLD³BL EtBLFPC; G#D!G/Dª GDEqG[GR G4GqF­G¢ FaG°F3G°']
                         ],
        xMin           : 28,
        xMax           : 493,
        yMin           : -275.5,
        yMax           : 499.5,
        wdth           : 530.5
      };
      font["h"]        = {
        sC             : [
                           'H|@¨ H5@¨GÃAO G¬AÂGxC3 GfD@GfD¾ GfE5GiEi GkE¿GkF5 GkGnF±Gn EµGnE1F~ D¢FCD(DÄ D(B-C¬Aj CnA,C4A, B¯A,BnAG BOAdBOA­ BOAºBXB5 BaBMBdCC BgDT BiJ! BpJ¾BpKE BpKxBgL" B^LOB^L¢ B^M(BzMC B¸M_C>M_ C²M_C¿L« D,L)D,K^ D,JxD$Iª CÂHÀCÃH1 CÄG[ DrHGELH} F(I1F±I1 H0I1HnHH H»G¡HÁFN I%D¶ I9CH IGBVIZA¢ I_AoI_Ad I_A;IA@Ã I#@¨H|@¨'
                         ],
        xMin           : 70.5,
        xMax           : 526,
        yMin           : -30.5,
        yMax           : 782,
        wdth           : 577.5
      };
      font["i"]        = {
        sC             : [
                           'D0D~ D0DBD3CN D7BYD7AÁ D7AtC¿AX C¥A=CWA= C-A=BµAX BxAtBxAÁ BxBYBuCN BqDBBqD~ BqEYB{Fc B§GlB§HG B§HtBÂH± C:I)CeI) C±I)D(H± DCHtDCHG DCGlD9Fc D0EYD0D~',
                           'C§J¹ CUJ¹C3K7 B´KXB´Kª B´L6C3LW CULyC§Ly D3LyDTLW DwL6DwKª DwKXDTK7 D3J¹C§J¹'
                         ],
        xMin           : 87,
        xMax           : 218,
        yMin           : -2.5,
        yMax           : 731,
        wdth           : 280
      };
      font["ı"]        = {
        sC             : [
                           'D0D~ D0DBD3CN D7BYD7AÁ D7AtC¿AX C¥A=CWA= C-A=BµAX BxAtBxAÁ BxBYBuCN BqDBBqD~ BqEYB{Fc B§GlB§HG B§HtBÂH± C:I)CeI) C±I)D(H± DCHtDCHG DCGlD9Fc D0EYD0D~'
                         ],
        xMin           : 87,
        xMax           : 218,
        yMin           : -2.5,
        yMax           : 730,
        wdth           : 280
      };
      font["í"]        = supplement(font["ı"],"acute",-20,0);
      font["ì"]        = supplement(font["ı"],"grave",-20,0);
      font["ï"]        = supplement(font["ı"],"dieresis",-120,0);
      font["î"]        = supplement(font["ı"],"circumflex",-60,0);
      font["j"]        = {
        sC             : [
                           'D¥?` D¦@QDbD( D?HB D?HtD[H¼ DxI?E!I? ECI?EeI& E©H±E«Hv F(DB FB?j FB>bEr=t D¼<{C¾<{ BI<{A<?> A0?XA0?n A0?·AO@0 An@LA¸@L BN@LB°?M B¿?,CC>o Cj>=C¾>= DF>=De>~ D}?.D¥?`',
                           'D­J¸ D[J¸D9K6 CºKWCºK¨ CºL4D9LU D[LwD­Lw E8LwE[LU E~L4E~K¨ E~KWE[K6 E8J¸D­J¸'
                         ],
        xMin           : -9,
        xMax           : 320,
        yMin           : -292,
        yMax           : 730,
        wdth           : 403
      };
      font["k"]        = {
        sC             : [
                           'Hx@¼ HA@¼H#AR GrB5F­C; E_E& E$D{D.D) D"BµD"A¥ D"AVC«A; Cn@ÂCC@Â Bb@ÂBbB# BbBvBmCº BxE8BxE¬ BxFÁB}H^ B£I¿B£K. B£KZB}K¹ BxLQBxL~ BxM)BµME C-MaCWMa C¤MaC¿ME D7M)D7L~ D7LPD;K¶ D@KVD@K) D9Hp D5GED7E¾ E;F¤F6G{ G°IW H-IzHSIz HzIzHºIZ I6I<I6H· I6HtH½HS H!GFFsF$ HGC¦ I]B7I]Az I]ARI>A6 HÂ@¼Hx@¼'
                         ],
        xMin           : 79.5,
        xMax           : 525,
        yMin           : -20.5,
        yMax           : 783,
        wdth           : 540
      };
      font["l"]        = {
        sC             : [
                           'DAGA D3C] D3B²D+Az CÄ@»CK@» Bl@»BlA| BlBrBwD_ B¤FKB¤GA B¤H[B©J! B®KjB®L¦ B®MfCkMf DKMfDKL¦ DKKjDFJ! DAH[DAGA'
                         ],
        xMin           : 84.5,
        xMax           : 196.5,
        yMin           : -21,
        yMax           : 785.5,
        wdth           : 273.5
      };
      font["m"]        = {
        sC             : [
                           'KÄ@q KQ@qKDAE K2B1JÄCu J¢F" JwFgJ_G& J=G¢I¹G¢ IsG¢H²GA H1F«G·Fg G¶E­G¼E/ H6C* HIA³HIA+ HI@£H.@e G¶@HGj@H G?@HG#@e F¬@£F¬A+ F¬AÄFrC« FZEpFZFf FZGMF<G© EyGhE2FÄ D>EÃ D/E¬C°Ec C°E(C¥D6 CxCCCxB° CxBpC£B; C­A©C­Ao C­AFCmA+ CN@³C%@³ B8@³B8B® B8CEBBD9 BME.BMEi BME¿BDF§ B;GlB;GÃ B;I~BÁI~ CDI~CeI] C§I;C§H· C§H¤C¢HZ C{H3C{GÂ C}G8 D/GÄD´Hv EuIJF9IJ GSIJG¯H1 HBHzH¯H¿ IVI@J6I@ KYI@K¸G³ KÃGnL=E¡ LXDVL¦AN L©A&Lj@¯ LK@qKÄ@q'
                         ],
        xMin           : 59,
        xMax           : 736.5,
        yMin           : -61,
        yMax           : 541.5,
        wdth           : 776.5
      };
      font["n"]        = {
        sC             : [
                           'H6@} Gc@}GXAX G<C. G/CÃG/D§ G/DÂG2Ea G5F!G5F= G5G³FhG³ E{G³D¹F± D<E»C­Dd C«D=C¤C§ C|CSC|C$ C|B«C¤BM CªA¶CªAv CªAICmA. CQ@¶C&@¶ B}@¶BcA. BGAIBGAv BGA¶BABM B;B«B;C$ B;C­BIE< BWFoBWGS BWGsBSH/ BPHnBPH¯ BPI6BmIQ B«ImC1Im C®ImC¶Hn C¹G| E:IUFhIU G¦IUHAHL HlGqHpF< HpEZ HoD¢ HoD.H¦C- H»B-H»A^ H»A2H}@º Ha@}H6@}'
                         ],
        xMin           : 60.5,
        xMax           : 491,
        yMin           : -35,
        yMax           : 533,
        wdth           : 523
      };
      font["ñ"]        = supplement(font.n,"tilde",-32,0);
      font["o"]        = {
        sC             : [
                           'E7@« C¶@«BÀA¤ A¼B«A¶Dl A°FHB¥Gq C®I6E¢I6 GBI6H&G¦ HxFtHuE( HrCOG¦B6 F©@«E7@«'
                         ],
        hC             : [
                           ['EsGq DcGrCµFh CSEzCSDl CSC_CÃB² DbBME7BM EÀBMFgBº G9CjG>Dv GLGpEsGq']
                         ],
        xMin           : 40.5,
        xMax           : 473,
        yMin           : -29,
        yMax           : 506,
        wdth           : 525.5
      };
      font["ô"]        = supplement(font.o,"circumflex",-32,0);
      font["ò"]        = supplement(font.o,"grave",120,0);
      font["ó"]        = supplement(font.o,"acute",90,0);
      font["ö"]        = supplement(font.o,"dieresis",-40,0);
      font["p"]        = {
        sC             : [
                           'Ei@Â Dª@ÂC´A? C²=m C²=ACv=$ CZ<­C0<­ B©<­Bl=$ BP=ABP=m BS@s BSCy BPENBDF¡ B6HD B6H¬BOI9 BmItC#It CJItCeIX C¡I=C¡H¹ C¡H°C|Hw CwHWCuH> DHHyD¹H¸ EeI1F,I1 GuI1HQG£ H½FtH½D¯ H½C9H)B0 G0@ÂEi@Â'
                         ],
        hC             : [
                           ['F,Go ERGoD­GF DVG*CªF_ C¶D¤C¶B° D¡BeEiBe FcBeG"C> GZC±GZD¯ GZF=G/F¹ F§GoF,Go']
                         ],
        xMin           : 58,
        xMax           : 492,
        yMin           : -284,
        yMax           : 536.5,
        wdth           : 534.5
      };
      font["q"]        = {
        sC             : [
                           'H9Cv G¯@¡ Gu?-Gu=§ Gu=YGY=> G?="F·=" F:="F4=¨ F2>0F9>s FF?_ FYA6 E¨@ÂEc@Â C±@ÂB­A± A}B§A}DU A}FtBÀGÃ DBIRF_IP F·IPG/I% GYIKG{IK GÄIKH>I+ HZH¯HZHe HZFDH9Cv'
                         ],
        hC             : [
                           ['E¼H& DfG©C­Fq C?EwC?DQ C?C_C©B¸ DSBEE]BI F8BLFdC. FµC¾F¸F! G"H& F²GÃF_H# F)H*E¼H&']
                         ],
        xMin           : 29,
        xMax           : 460,
        yMin           : -271.5,
        yMax           : 519,
        wdth           : 520
      };
      font["r"]        = {
        sC             : [
                           'HAF¶ H:E¼G`E¼ F®E¼F®F{ F®F¯F«G> F©G³ ElG¡D±G9 D8F{C¡E{ C£Ad C£@£BÂ@£ BI@£BIAd BIF³ BIG0BLGr BNH1BNHR BNI4C#I4 C§I4C¨Gµ E@IGG$IG GuIGG¾H® HBHPHBGX HBG$HAF¶'
                         ],
        xMin           : 67.5,
        xMax           : 448,
        yMin           : -33,
        yMax           : 514.5,
        wdth           : 480
      };
      font["s"]        = {
        sC             : [
                           'G]G1 G&G1F´GV F¦GpFyH? F/H,D¹G| CzG<CyFa C¸FVD2FQ EµF)F£Ec GÂD}GÂC: GÂA½F¸AI F"@ªDu@ª Cu@ªB£A2 AkAjAkBJ AkBrA«B² B&C,BNC, BmC,B¿B~ C4BhC©BX DGBLDuBL EFBLE¨Ba F`B}F`C: F`D>E%Dn D@D§ C>DÃB«EF B9E~B9Fl B9H7CzH± D4I)E5IM F5IsFnI® F¸IÀGDIÀ GoIÀG¬I¤ H#IgH#I: H#HÁH0Hh H<H0H<G· H<GiGÄGM G©G1G]G1'
                         ],
        xMin           : 20,
        xMax           : 445,
        yMin           : -29.5,
        yMax           : 557.5,
        wdth           : 486.5
      };
      font["t"]        = {
        sC             : [
                           'GWG¥ GBG¥G%G¦ F­G¨FwG¨ F`G¨ErGx E§C6 E¨B® E©BY E¬@¦DÂ@¦ Dy@¦D[@¿ D>A6D>A] D>A¤DABK DDB¸DDC; D1Gv CjGyBXG¨ A¤G´A¤Hg A¤H´A¾I- B6IJB`IJ D,I9 D,IlD&J> D"JµD"K7 D"KaD?K| D]K¹D¨K¹ E^K¹ElJ© EoJcEoJ/ EmIx ElI: FeIJFwIJ G[IJG|I@ H6I,H6He H6H9G¾GÀ G¤G¥GWG¥'
                         ],
        xMin           : 31.5,
        xMax           : 442,
        yMin           : -31.5,
        yMax           : 682,
        wdth           : 471
      };
      font["u"]        = {
        sC             : [
                           'HyHn HgE} HgE5HhD) HiB¿HiBV HiB@HlA¸ HpAjHpAS HpA)HS@± H6@tG°@t GB@tG.AP F3@´D·@´ C·@´C@AI BeA«BRB£ B,D¦B,FM B,GSBIH¡ BWISC%IS CPISCmI8 C¬HÀC¬Ht C¬HFC{Gd CmF¤CmFM CmE*CxD6 C¥CACºB| D8BjDWBa DwBWD·BW EºBWG)B¤ G(DG G%E¨ G%GXG8Ht GCIMGºIM HAIMH^I1 H{H¹HyHn'
                         ],
        xMin           : 53,
        xMax           : 475,
        yMin           : -39.5,
        yMax           : 520.5,
        wdth           : 520
      };
      font["ú"]        = supplement(font.u,"acute",90,0);
      font["ù"]        = supplement(font.u,"grave",120,0);
      font["ü"]        = supplement(font.u,"dieresis",-40,0);
      font["û"]        = supplement(font.u,"circumflex",0,0);
      font["v"]        = {
        sC             : [
                           'GTEA E®Au E¬@½E3@½ Dl@½DKAo C6D| A«H; A¡HUA¡Hi A¡H³A¿I, B;IIBdII BÀIIC7H° E/Cd EyD¢FhG( F¥GwG:H§ GYICG³IC H8ICHVI& HvH­HvHd HvH>GTEA'
                         ],
        xMin           : 30,
        xMax           : 473.5,
        yMin           : -20,
        yMax           : 515.5,
        wdth           : 486
      };
      font["w"]        = {
        sC             : [
                           'KZH, J±EnI¶B] IyA¦I8A$ H¹@rH[@s Gr@uG5B| G!COF°Da FnF9 EÀD¢ D¬Al D}AFDdA3 DF@{C©@y C;@vBwB¾ BSD3B0F5 A»GH A¯GÃA¯H[ A¯H§B)HÂ BEI:BoI: C9I:CJHj CWH/C`GZ CnFK D&B· D¶EAE«HJ F(I6FyI6 GEI6GaH= G{GKGÃE_ HGChHfB_ I,Dh J*H} J9I7J¡I7 K&I7KFH¾ KeH£KeHX KeHTKZH,'
                         ],
        xMin           : 37,
        xMax           : 657,
        yMin           : -40,
        yMax           : 508,
        wdth           : 684
      };
      font["x"]        = {
        sC             : [
                           'IKGª H<F¥ F±EU IMB5 IfA¸IfAx IfAQIHA4 I*@ºH¨@º Ha@ºHBA; GiB"E©DM DGB¬ C±BUBÂAi B£ADB]AD B7ADA½Ac A~A¢A~B$ A~BCA¸Bd B1BªBkC: C.CvCCC¯ D¶Ef C¶FÁ CFG¯B°H? BiHaBiHª BiI.B¦IM BÂIlCCIl C~IlDrHU E½Fl GYG¾ HQH®H|IK H½IzIEIz IlIzI«I] J%I@J%H¾ J%HfIKGª'
                         ],
        xMin           : 29.5,
        xMax           : 562,
        yMin           : -21.5,
        yMax           : 539.5,
        wdth           : 590
      };
      font["y"]        = {
        sC             : [
                           'HÀH) FKBN EN@DD¯>³ DK=R D2<¯Ct<¯ CJ<¯C,=& B²=BB²=k B²>KDcAÂ A§G@ AXGª A>H4A>HS A>H|A]H¼ A|I7AÄI7 BNI7BhH¸ C°G/EKC¨ F]FV G*G§GsH¥ G´I9HDI9 HmI9H®HÀ I)H£I)HY I)HDHÀH)'
                         ],
        xMin           : -2,
        xMax           : 499.5,
        yMin           : -283,
        yMax           : 507.5,
        wdth           : 520.5
      };
      font["z"]        = {
        sC             : [
                           'HpGX G»FpF³E) EtCBE*Bd E³BiF]Bi F¦BiGNBY G¼BJH?BJ HkBJH¨B. HÃA¶HÃAi HÃA<H¨@Ã Hk@¨H?@¨ G¼@¨GN@· F¦A!F]A! D¤A!C;@{ C&@wBº@w B9@wB9AI B9A{BjB& DiC±F·Gv EµGnEXGn DGGnC/G¦ BXG³BXHe BXH²BsI, B°IIC5II CfIIDEI> E%I2EXI2 E½I2FÂI< H#IEHgIE I9IEI9H£ I9H1HpGX'
                         ],
        xMin           : 59.5,
        xMax           : 507.5,
        yMin           : -38,
        yMax           : 515.5,
        wdth           : 538
      };
      font["A"]        = {
        sC             : [
                           'J©A# J,A#IkB® IQCdI*E> HGE1G%D° E!DX DrCXC|Ac C]A+C%A+ B¢A+BaAG BAAeBAA± BAB=CUDs CDD¯CDE- CDE}D#Eµ D¶GdF=It H$LfH^Lf I*LfIGKz I§I1 J¹C® KMBq KkAÄKkAª KkA^KLAA K-A#J©A#'
                         ],
        hC             : [
                           ['H~Fª H-I£ E¹F> F¯F]H~Fª']
                         ],
        xMin           : 63.5,
        xMax           : 660,
        yMin           : -15,
        yMax           : 721.5,
        wdth           : 731
      };
      font["Á"]        = supplement(font.A,"acute",200,200);
      font["À"]        = supplement(font.A,"grave",300,200);
      font["Ä"]        = supplement(font.A,"dieresis",160,200);
      font["Â"]        = supplement(font.A,"circumflex",100,200);
      font["Å"]        = supplement(font.A,"ring",180,180);
      font["Æ"]        = {
        sC             : [
                           'J%FR I?FOGÀF? E¶F& E>E3C»C/ C!A{ B¥AMBTAM B-AMA±Ak AoAªAoB. AoBHA¤Bg D1FVE²HY G¼K+ IIL¤JNM? JpMNJµMN K;MNKXM2 LMMQM5Mb MÀMrNzMr PzMrQuM8 R6L½R6LZ R6L1Q½Kµ Q¡KuQVKu QJKuQ8Ky O¤L&NzL& N)L&MJK¼ LmK­K¡Km KªK.KªJ© KªI~KxG´ O!H: PXHNP­HN Q6HNQRH1 QoG·QoGi QoF¹P¸F¨ O-Fr KkFG KbE<KbDQ KbBuK£BS K¾B8L½B8 MVB8NPB; OIB>OªB> O¼B>P?BD PgBJPzBJ QbBJQbAg Qb@»P±@¦ P;@oO;@n Mg@o KJ@oJsAM IÁB(IÁDQ IÁE@J%FR'
                         ],
        hC             : [
                           ['HwIi G<G{ I+G´J3G· JDI£JDJ© JDK"J?KI IfJxHwIi']
                         ],
        xMin           : 22,
        xMax           : 1082,
        yMin           : -42.5,
        yMax           : 791.5,
        wdth           : 1086.5
      };
      font["B"]        = {
        sC             : [
                           'H"Aj FG@¶Cr@¶ CG@¶C!A: B}AcB}A¯ B}D( B}E4B±G6 BÄINC"JK C!K#C.LV C5LªCNLº DSM@E}M@ G(M@HFLJ I~KDI~I~ I~G¦H9Fs ILF3I·Eh J^D¾J^DA J^CKI^B^ H§A²H"Aj'
                         ],
        hC             : [
                           ['FjEk E¥E| EvE|E[Ez EAEyE4Ey D¢EyDCE¤ D=D©D=D$ D=B[ F=BeG_C" H"C=HbCv HÀD(HÀDA HÀDpGÃE) GBEUFjEk','E}Ky D´KyDgKs DeJG DQGM E]GAEfGB FzGNGWGÁ H;HvH;I~ H;JZGUK) FoKyE}Ky']
                         ],
        xMin           : 93,
        xMax           : 589.5,
        yMin           : -23.5,
        yMax           : 767,
        wdth           : 630
      };
      font["C"]        = {
        sC             : [
                           'IyI¬ I9I¬H½JR H¢J´HhJÂ HSK)G¥K) FuK)EGIQ C^G.C^E) C^D+D.CP D¤BsEwBs F[BsG@C% GzCCHoC¼ I%DBIBDB ImDBI«D" J$C¦J$C] J$C0I¢B² G¡A*EwA* D,A*BÃBE A¼C]A¼E) A¼GuD/JP E¹LsG¥Ls H1LsHWLn H¡LjH¾L` I=L´IuL´ J7L´JIL8 JXKjJXJw JXJNJCJ/ J(I¬IyI¬'
                         ],
        xMin           : 43.5,
        xMax           : 587,
        yMin           : -12,
        yMax           : 743.5,
        wdth           : 602.5
      };
      font["Ç"]        = {
        sC             : [
                           'GG@7 GG>¹F>>[ Ed>4D*>4 C+>4C+>£ C+?ICs?I C§?ID)?H DN?FDb?F F4?FF4@7 F4@zEM@Ä D0AX C$B)B`BÀ A¼C´A¼E) A¼GsD/JP E¸LsG¥Ls H0LsHWLn H¡LjH¾L` I=L´IuL´ J9L´JOKÃ JXKoJXJw JXJIJ?J* J#I¬IyI¬ I:I¬H½JR H~J¶HdJÃ HQK)G¥K) FuK)EGIQ C^G-C^E) C^D/D,CS D¡BsEwBs FZBsGBC( GxCCH]C¯ I(DBIBDB IkDBIªD" J$C§J$C] J$B´H£B- GzA[FµA@ GG@¡GG@7'
                         ],
        xMin           : 43.5,
        xMax           : 587,
        yMin           : -199,
        yMax           : 743.5,
        wdth           : 602.5
      };
      font["D"]        = {
        sC             : [
                           'I]AH HE@bF*@b Ec@bDª@x C»@µCbA< CWA< C-A<B´AY BuAwBuAÃ BuBªB~DS BªEÃBªF© BªGzB¥I] B¡K?B¡L1 B¡LYC&L¨ CPM1CzM1 C³M1D¸Lq F,L%FCKÂ HXK@I¿I} K¤G·K¤E¢ K¤DXK3C> JeB$I]AH'
                         ],
        hC             : [
                           ['G²IR G,I¶DCK2 DHH¼ DKF¤ D;Bl DBBiDPB` E%B$F)B$ GªB$HnBj ILC*I§Cº J<D§J<E{ J<G°G²IR']
                         ],
        xMin           : 89,
        xMax           : 671.5,
        yMin           : -48.5,
        yMax           : 759.5,
        wdth           : 721.5
      };
      font["E"]        = {
        sC             : [
                           'I¥Ke IvKeIeKj H?K»G%K» FVK»ExK¬ D»K{D+K] D4JÀD4Jx D4IpD"G¥ GOH+ H®H>I6H> IbH>I¡H" I¿GªI¿GY I¿F¤IBFw GYFb C¹F8 CµEtC³E5 C±DxC±DA C±BjD-BC DDB(EFB( E¦B(F}B+ GwB/H3B/ HGB/HnB5 H¶B<I%B< I°B<I°AV I°@§I:@t H_@bF-@b C¡@bC(A1 BJA«BJDA BJD£BMEJ BPE·BUFk BJF¤BJF½ BJG;B^GV BqIqBqJx BqJ¾BhKb B^L%B^LJ B^M?C>M? ChM?C¨M! D{MBEcMQ FJMbG%Mb H¶MbIÄM( JcL±JcLJ JcL"JIK¨ J,KeI¥Ke'
                         ],
        xMin           : 68,
        xMax           : 592,
        yMin           : -48.5,
        yMax           : 783.5,
        wdth           : 624.5
      };
      font["É"]        = supplement(font.E,"acute",100,240);
      font["È"]        = supplement(font.E,"grave",200,240);
      font["Ê"]        = supplement(font.E,"circumflex",40,240);
      font["Ë"]        = supplement(font.E,"dieresis",80,240);
      font["F"]        = {
        sC             : [
                           'I{KE IiKEITKM H[KzF·Kz FTKzE~Kq E&KhD;KS D9H- EwH`FUH` GlH`H¯HN IiHDIiGk IiG>ILFÄ I/F¨H¨F¨ HSF¨GnF° FªF¹FUF¹ EµF¹D6F^ D-A> D-@·C´@x Cw@ZCL@Z C!@ZB©@x Bk@·BkA> BkB¡BsE¢ BzH£BzJA BzJmByKB BwK¼BwLD BwLpB´L¯ C,M)CWM) CxM)C³L» D­M-EkM7 FKMBF·MB G§MBH¸LÄ JYLuJYL, JYK¨J@Kh J#KEI{KE'
                         ],
        xMin           : 84,
        xMax           : 587.5,
        yMin           : -52,
        yMax           : 768,
        wdth           : 606.5
      };
      font["G"]        = {
        sC             : [
                           'K7E³ J{CfI9B1 Gx@¡Ep@¡ C¢@¡BªA§ A²B®A²Dº A²F·B©HÃ C¡K,E9LQ F6M@GBM@ G¾M@I,L¨ J_L?J_Kk J_KBJAK" J#J¦I|J¦ IfJ¦I>J¿ H)KxGBKx FzKxF)K* E¤J§E5IÃ CTGvCTDº CTCaC°B¹ DJBFEpBF FÁBFGÂC5 I&D*I]E§ GNEwE¯D¾ EwD³EaD³ E5D³D¼E2 D¢EPD¢Ey D¢F.E3FN F©GOJ­GO K4GOKPG2 KnF¹KnFl KnF,K7E³'
                         ],
        xMin           : 38.5,
        xMax           : 661.5,
        yMin           : -34,
        yMax           : 767,
        wdth           : 679.5
      };
      font["H"]        = {
        sC             : [
                           'LOKÄ LAKyLAK) LAJ¯LCJR LEI¼LEI} LEH½L4GY L!EºL!E5 L!DlL-CW L8BBL8Ax L8AOKÀA4 K¥@»KZ@» K3@»J»A4 J}AOJ}Ax J}BBJsCW JhDlJhE5 JhE~JmFF IEFCGOE· D5ED D5DmD"CK C´B)C´AP C´A(Cx@¯ C]@qC4@q B¯@qBr@¯ BVA(BVAP BVB8BhC¨ ByESByF: ByFqBuG] BqHIBqH£ BqIMB{Jh B§K¥B§LO B§LyBÂL· C:M/CcM/ C­M/D#L· D?LyD?LO D?K¤D5Jf D+IJD+H} D1F¨ GTGT IOG¦J{G§ J¨H³J¨K) J¨KuJÁL@ K>M(KyM( KÁM(L;L° LXLtLXLJ LXL;LOKÄ'
                         ],
        xMin           : 74,
        xMax           : 715,
        yMin           : -41,
        yMax           : 758.5,
        wdth           : 768
      };
      font["I"]        = {
        sC             : [
                           'HiJ¥ H*J¥GKJ² F.K" EºHªEºF¨ EºF@E¾E] EÂDxEÂD3 EÂCWE»B¯ HLB³ HvB³H´Bt I,BVI,B, I,A¤H´Ae HvAGHLAG G¸AGG(AE F:ABE§AB ECABDCA0 CB@ÁB¤@Á BX@ÁB<A; AÃAXAÃA¥ AÃB,B<BI BXBhB¤Bh C@BhDSB| D^CJD^D0 D^DtDVET DPF5DPFy DPHYDlK+ CmK& BnK# BCK#B&KA A®K^A®K¬ A®LeBhLn C6LuD±Lu FQLuHwLJ IML>IMKc IMK4I+J¼ H±J¥HiJ¥'
                         ],
        xMin           : 36.5,
        xMax           : 517.5,
        yMin           : -18,
        yMax           : 729,
        wdth           : 546
      };
      font["J"]        = {
        sC             : [
                           'JRK1 JAK1I¹K8 ImK@ITK@ I$K@HeK= HjJI HjDsG«B& GH@LF&@L D~@LCVAG AÀBPAÀC¤ AÀDzB£Dz CdDzCdC¦ CdC2DVBc EDA¸F&A¸ FxA¸F¹E¤ G$GjG$JI G$JeFÃK2 FeK1 F>K1EsK4 E$K6D¡K6 DSK6D6KQ C»KnC»K¿ C»L£DÃL£ EAL£E¦L~ FDL{FeL{ G!L{G¿L¥ HºL¬ITL¬ K3L¬K3K» K3KrJ¼KR J}K1JRK1'
                         ],
        xMin           : 45.5,
        xMax           : 632.5,
        yMin           : -59,
        yMax           : 739.5,
        wdth           : 665
      };
      font["K"]        = {
        sC             : [
                           'J&@¼ H¶@¼F¤BÁ D^ED D^E6 D]A7 D]@VCª@V CO@VC.@ª BµA/BµA_ BµCBBÃF¬ C.JPC.L4 C.L_CJL| CfL¼C²L¼ D8L¼DTL| DqL_DqL4 DqKUDeI° DYHLDZGf E^HbF¥IÀ H½Lc I;L«IeL« I®L«J)Ll JHLMJHL" JHKdHLIL FÁG°EeFW FZE]HTCv I:BÂ IsBuJ2B` J¢BEJ¢A¡ J¢A^JlA? JQ@¼J&@¼'
                         ],
        xMin           : 104,
        xMax           : 606.5,
        yMin           : -54,
        yMax           : 747.5,
        wdth           : 610.5
      };
      font["L"]        = {
        sC             : [
                           'I*Ak H<A6FP@° Dw@hCm@h B­@hB`@¨ B#A.B#A¾ B8D` BQGÁBQL? BQLjBnL© B¬M"C2M" C]M"CyL© C¶LjC¶L? C¶GºCzDS CmC> CfBnCgB/ EfB,HlC& H}C,H­C, I4C,IQB® IjBmIjBE IjAªI*Ak'
                         ],
        xMin           : 49,
        xMax           : 531.5,
        yMin           : -45.5,
        yMax           : 752.5,
        wdth           : 550.5
      };
      font["M"]        = {
        sC             : [
                           'Mu@q M@@qLÀA& L£AVLjBC LFCl KÁD«KGHÀ I¦DP IJB¹ I&B(H£Ac HW@»Gµ@» GY@»G7AV G!A¢F³B> FuC+ E´E§EFH° E"G_ D$C[ CÀB£CuAN CW@¥B¶@¥ Be@¥BGA# B/ABB/Am B/B³BsD~ C_G© C¹J: DAKµDrLT D»L°ERL° E´L°F1LE FWKoF¦Ic G6FÄH#D+ I4G"IÁJ: J;KI JMKÂJjLS J²L¿KQL¿ L$L¿LQKz LbKBLxI¶ M1FZMªCÄ N7Bz N]AsN]AS N]A)N<@° M¿@qMu@q'
                         ],
        xMin           : 54.5,
        xMax           : 845,
        yMin           : -41,
        yMax           : 749,
        wdth           : 882.5
      };
      font["N"]        = {
        sC             : [
                           'M!B½ M!BlL¶A¡ L¦@¾L*@¾ Kv@¾K*Ac GÀDZC½IÂ C¸HA CµFc CµE´C¹Dp C¼CMC¼B| C¼@uC4@u B¡@uB`@º BBA5BBA` BBA«BIB[ BOC.BOCW BOC¶BSD¯ BWE¨BWFA BWF¥BTG§ BQH©BQIG BQI§BEJ¡ B:KxB:L5 B:LcBaLª BªM,C8M, ClM,D8L; F+IOGnG^ ITE?KjC; KmCfKjD7 KgE2 KgH_KEJ] KAJwK*KC JºK¨JºL* JºL¿K¡L¿ M(L¿M(H! M(G5M$E_ M!CªM!B½'
                         ],
        xMin           : 60,
        xMax           : 755,
        yMin           : -39,
        yMax           : 757,
        wdth           : 796.5
      };
      font["Ñ"]        = supplement(font.N,"tilde",160,160);
      font["O"]        = {
        sC             : [
                           'GQ@© E=@©C¡B+ B3C[B3Eq B3HBC|JV E[L¬H)L¬ JkL¬K©Ky M)JcM)GÁ M)ELKsC< IÂ@©GQ@©'
                         ],
        hC             : [
                           ['H)KA F9KAD¶IS C{GyC{Eq C{D4D©C= E®BNGQBN I>BNJXD= KcE¶KcGÁ KcIªJ{Jg I¹KAH)KA']
                         ],
        xMin           : 56.5,
        xMax           : 755.5,
        yMin           : -30,
        yMax           : 739.5,
        wdth           : 798
      };
      font["P"]        = {
        sC             : [
                           'DUE¢ D9E¢C_E® CVDyCVAª CVAaC<AE C"A*B~A* BVA*B=AE B"AaB"Aª B"D% B"E5B5G: BHITBJJO BJKU BJL6BVLc BmM8C6M, CUM6C²M; DHM@D¿M@ FOM@GlLF HºK?HºI¤ HºG²G`F£ F;E¢DUE¢'
                         ],
        hC             : [
                           ['D©K© D[K©D9K§ CºK¥C£K¡ C¡JK CjGF DUG9 EzG9FjG¯ GeHhGeI¤ GeJpFpK> E¦K©D©K©']
                         ],
        xMin           : 48.5,
        xMax           : 490.5,
        yMin           : -12,
        yMax           : 767,
        wdth           : 520.5
      };
      font["Q"]        = {
        sC             : [
                           'M¬=¹ M_=¹KÄ?= J8@¶ H¶@PGr@P EK@PCmB; A°D$A°FM A°I)C³JÀ E±L¬HjL¬ KVL¬L¶Jy N3H°N3E¼ N3CVKxAz MK@5 NI?I No?%No>~ No>UNQ>6 N3=¹M¬=¹'
                         ],
        hC             : [
                           ['HjK? F^K?D¿I¯ CUHUCUFM CUDxD{CJ EÃA½GrA½ H4A½H}B+ G?COG?D. G?DYG`Dv G¢D´H%D´ HUD´HzDc IYCfJSB¤ LkD"LkE¼ LkH;KuIq JnK?HjK?']
                         ],
        xMin           : 37.5,
        xMax           : 854,
        yMin           : -214,
        yMax           : 739.5,
        wdth           : 876
      };
      font["R"]        = {
        sC             : [
                           'I°A7 IiA7IHAV F¨C¸CzD§ C¤CD C©A§ C©AYCkA< CN@ÂC#@Â B{@ÂB_A< BBAYBBA§ BBBQB;Ck B4D¦B4EP B4F*BGG[ B[H°B[Ig B[I»BRJ{ BHK[BHK° BHLEBiLp B°M!CNLÀ E9L® F?L{F¾LJ J%JyJ%HI J%G4HÃFB H3EgF´E6 IAC¶JWB` JrB?JrA¿ JrAtJSAU J5A7I°A7'
                         ],
        hC             : [
                           ['DÂKB C²KM C»JW CÂI²CÂIb CÂH¶CµGÂ C¡F] C¯F]D(F] DEF[DTF[ FMF[GIFÀ G£G;H.Gm HcH"HcHI HcIQGHJF F:K1DÂKB']
                         ],
        xMin           : 57,
        xMax           : 599.5,
        yMin           : -17.5,
        yMax           : 749.5,
        wdth           : 628
      };
      font["S"]        = {
        sC             : [
                           'BDC5 BCC_BaCy B~C´C&C´ CWC´C|C[ D-B´DTBw E&B?FEB? G]B?H_B¤ I§CUI§Dk I§EfHzF- G¦FkFUFp E:FvDNG2 CCG¥CCH¸ CCJCD¬KR FELZG±LZ HnLZIeL: J¥K³J¥KN J¥JzJ*Jz I¦JzI!J± H@K"G­K! FsJÃE«JV D½I®D½HÃ D½HOF+H- FaGÄG|G¹ IZG¨JXF¬ KLE»KLDv KLB°IvA¥ H:@­FD@­ D´@­C~AN BGB!BDC5'
                         ],
        xMin           : 65,
        xMax           : 645,
        yMin           : -28,
        yMax           : 716,
        wdth           : 693
      };
      font["T"]        = {
        sC             : [
                           'KuJ¶ K+J¶I¸JÂ H¥K)H6K( GrK( GuJ!G®Gt GÄEYGÄD< GÄC½H(CU H.B³H.Bm H.B*G¼A{ G¡A:GDA: FÀA:F¡AU F_AqF_A¾ F_B*FdBG FiBfFiBt FiC"FcC¦ F]DcF]D¶ F]EÂFEG¿ F.J-F+K# ERK" C}K"B¥KC B3KWB3L" B3LKBLLk BjL¯BºL¬ C:LªD4Lx D¸LmERLm E¯LmF§Lo G|LrH5Lr H£LrI·Lg K(L[KuL[ KÁL[L:L> LVKÄLVKx LVKML:K0 KÁJ¶KuJ¶'
                         ],
        xMin           : 56.5,
        xMax           : 714,
        yMin           : -4,
        yMax           : 739.5,
        wdth           : 679.5
      };
      font["U"]        = {
        sC             : [
                           'GE@½ D¸@½C£BI BªCVBiEj BYFfBYIX BYJbB`K5 BfK±BqL1 B¬LyCHLy D!LyD!KS D!F¹ D!BFG@BF JFBFJFJ* JFJPJFJ­ JEKEJEKX JEK¸JZLC JwL~K+L~ K°L~K°Kx K°KOK±J¡ K±J-K±I¨ K±@½GE@½'
                         ],
        xMin           : 75.5,
        xMax           : 678,
        yMin           : -20,
        yMax           : 733.5,
        wdth           : 736.5
      };
      font["V"]        = {
        sC             : [
                           'K=K} J£K!JZJ> I³Hi G¬C! G[B$FÁA. F¢@tFF@t E|@tE^A@ DgCiCVG¹ B¬J" BOKoBOL, BOLXBoLu B®L²C3L² C~L²CµL? D7J¸ D·HI EsE_FKCW FQCg HVI+ I)J¾ IbL+IÃLv J@LÀJmLÀ J¶LÀK2L¢ KPLbKPL7 KPK½K=K}'
                         ],
        xMin           : 70.5,
        xMax           : 647,
        yMin           : -39.5,
        yMax           : 749.5,
        wdth           : 649.5
      };
      font["W"]        = {
        sC             : [
                           'L/@e K¥@eKa@~ K9@½K9AE J¯B<J£B© JvCPJ3F+ I¤H1IrIQ H½F±H6E/ GCC,FÄA¼ G-A¦G-An G-ABF©A$ Fc@®F5@® E2@®E2A¤ D¶B~ D)F] CjHNBPKµ BIL&BIL9 BIL·C0L· CpL·C´LN D"L+DYJ§ DµISELGZ F+D+ F¶EÀG|Hz H:JMH[JÂ I3LwI©Lw JKLwJhL1 J­K^K.HÄ KBG¤KrEÃ LEBÃ MGE[N¯It NºI³O=K+ OYKÁO¥L^ P$L¶P_L¶ Q@L¶Q@L1 Q@KÃPÄKO P{Jg PDI8 N!Cx M{B¦L¼A$ Lv@eL/@e'
                         ],
        xMin           : 67.5,
        xMax           : 1023,
        yMin           : -47,
        yMax           : 745,
        wdth           : 1039.5
      };
      font["X"]        = {
        sC             : [
                           'K§Kh J¤JIJ;Ic IAH. H{GIH;F§ IµDI JµB²KwA» K³AyK³AU K³A,Ks@± KT@pK+@p J©@pJg@± IÁARIPBG HMC³ G3Em DdBi C0@Á B³@¡Bi@¡ B@@¡B!@¿ A§A;A§Ae A§AªAÀB% CMCk F;F¶ EPH"DWI3 CfJM BÄK(BhKY B>K|B>L( B>LPBZLq BwL²BÃL² CtL²DuK_ D¿K"EoJ5 F^I0GBH+ HÄJb J{L²K:L² KcL²K£Lr KÂLRKÂL) KÂKªK§Kh'
                         ],
        xMin           : 33,
        xMax           : 686.5,
        yMin           : -41.5,
        yMax           : 742.5,
        wdth           : 723.5
      };
      font["Y"]        = {
        sC             : [
                           'J:K" J"J~I}J0 HTF´ GsE(F¿Cz F!AÂ EoA6 EN@~Dº@~ Dr@~DR@¼ D3A6D3Aa D3A¤D±C0 EªD¯ DXFnD#Gp CyH^BµIy A¨KKAmKx A_K´A_L+ A_LUA~Ls A¾L²BBL² BsL²BµLb CbKi DHJODjIº E3HÂE]H8 E}GhFfF[ HEJ| HlK?I.LK IJL±I¬L± J0L±JOLt JoLWJoL, JoK¢J:K"'
                         ],
        xMin           : 14,
        xMax           : 598,
        yMin           : -34.5,
        yMax           : 742.5,
        wdth           : 635
      };
      font["Z"]        = {
        sC             : [
                           'J¹Jª IµJ- HaI#F£Fv D)B¥ C³B^CzB> FvBL HoBXIsBX JtBXK0BL K¢B=K¥A} K§ALKdA0 KF@»J½@» J~@»JE@¾ I¯@ÁIq@Á H[@ÁF2@º C¬@³Bu@³ A§@³A§As A§B3B@B· C)D% E¬G³ GdJ0HÂKO FIK< C>K< C4K<BÂK: B­K9B£K9 A»K9A»KÁ A»LaBMLv BnL¦C8L¦ C|L¦D£Lv E©LhFILh F·LhH*Lr I@L{I¯L{ KªL{KªK¿ KªK[J¹Jª'
                         ],
        xMin           : 33,
        xMax           : 674.5,
        yMin           : -25,
        yMax           : 736.5,
        wdth           : 693
      };
      font["0"]        = {
        sC             : [
                           'E¹@¾ Cn@¾BfC+ A~D}A~GK A~IgB§K9 D"M0F4M0 H5M0IEKU JAI»JAGª JADRI6Bx H,@¾E¹@¾'
                         ],
        hC             : [
                           ['F3Ku D¡KuC¶J; C;HÄC;GZ C;D¼C´Cy DiBWE¹BW GfBWH?DC H¡EhH¡Gd H¡ImH+Jq GYKuF3Ku']
                         ],
        xMin           : 29.5,
        xMax           : 575.5,
        yMin           : -19.5,
        yMax           : 759,
        wdth           : 610
      };
      font["1"]        = {
        sC             : [
                           'FrAA E/AA CnAB C)ABB±AJ B]A]B]A¸ B]BxCvBx D#Bw DLBu DLC"DDC¢ D;D[D;D¬ D;E¨DRG¥ DhI|DgJ| CeI¹C?I¹ B»I¹B}J3 B`JPB`Jx B`K#C3Kg ChK®DHL^ DÁM4EmM4 F.M4F.Lj F.LRF(L% F!KzF!Kd F!KCF$J¤ F)J@F)IÃ F)I0E´GT E{ExE{D¬ E{DPE¥C¢ E¬C.E­B{ FrB} F½B}G5Bb GPBFGPAÁ GPAvG5A[ F½AAFrAA'
                         ],
        xMin           : 77,
        xMax           : 391,
        yMin           : -0.5,
        yMax           : 761,
        wdth           : 450
      };
      font["2"]        = {
        sC             : [
                           'H½A@ H¤A@HUAO H)A_G´A_ G`A_F}AX E»AREfAR E?ARDvAH D*A?C§A? CzA?CfAB CPAFCEAF B¥AFBnA« BcB*BcB~ BcDbC_El C¹F+E²GV F¾H5GJHl GÁIIGÁJG GÁJ¨GMK6 F©KcFAKc EhKcD¹K. C®JA CbIÃCGIÃ BdIÃBdJq BdJÁB«K? C{L*DNLZ EDLÀFALÀ G`LÀH[LH IgKhIgJP IgImIJH» I-HDHuG¢ H+G&F}F: EDEGD®D¯ CÁC¾CÃB| EjB± G8B¼G´B¼ H[B¼HÁB£ IwB_IwAÄ IwA|I[A^ IAA@H½A@'
                         ],
        xMin           : 80,
        xMax           : 538,
        yMin           : -1.5,
        yMax           : 749.5,
        wdth           : 610
      };
      font["3"]        = {
        sC             : [
                           'E³@¸ D~@¸C«AR B§A¼BVB½ BPC,BPC< BPCeBoC~ B¯CºC3Cº CZCºCwCt D"C0 DFB£D¥Bi E=BPE³BP F|BPGKBµ GÃCYGÃD> GÃERG3F* FTFwE5F© DIF´DIG_ DIG»DÁH6 FªHq GKH«GnI2 G²I[G³Iº GµJnGNK! F©KXE©KX ECKXD¨K8 C¹Jt CwJ_CdJ_ C;J_BÃJ} B§J½B§K@ B§K°C¼LT D¾L·EpL· GAL·H<L7 I@KSI@I¾ I@H5G©Gm GwGfGaG_ HcG/I"FO IdEqIdDc IdBÄH[A¾ GT@¸E³@¸'
                         ],
        xMin           : 71,
        xMax           : 528.5,
        yMin           : -22.5,
        yMax           : 745,
        wdth           : 610
      };
      font["4"]        = {
        sC             : [
                           'HpDm HpA¦ HpA(G¹A( G/A(G/B6 G/BGG0Bi G2B«G2B¶ G1Dr C¦D} B~D}BID¨ AqD¶AqEJ AqEwB%F9 B{FÀ F[LZ F¿M5G¤M5 HpM5HpLU HpF* H£F+HºF+ JKF+JKEJ JKD§I£Dr I`DiHpDm'
                         ],
        hC             : [
                           ['G1F. G1K% E-G©C½F7 G1F.']
                         ],
        xMin           : 23,
        xMax           : 580.5,
        yMin           : -13,
        yMax           : 761.5,
        wdth           : 610
      };
      font["5"]        = {
        sC             : [
                           'Eg@§ CQ@§BNBQ B=BnB=B« B=C.B[CJ BzCfBÂCf CGCfClC; CÂB}D9Bk DzB?EgB? F²B?G¢C@ HjD;HjEi HjFxH:GP G¡H@F£H@ EºH@EUH# DÃG°DkGW C£Fc CUF6C(F6 B¤F6BgFR BJFoBJF¸ BJG)BZHC B|JxB|KW B|KzBkL! BYLJBYL_ BYL½C?L½ CSL½C{L¹ D!L¶D6L¶ DoL¶E`Lº FQL¾F¬L¾ G#L¾GYL¼ G²LºH*Lº H<LºH`LÁ H¥M$H·M$ I:M$IWL¬ IvLnIvLH IvKZG°KZ GpKZGAK] F¶K_F¬K_ EeK[ D?KV D?K*C¾H´ DÄI}F£I} HVI}IHHT J&GEJ&Ei J&CbH°B6 Gn@§Eg@§'
                         ],
        xMin           : 61.5,
        xMax           : 562.5,
        yMin           : -31,
        yMax           : 753.5,
        wdth           : 610
      };
      font["6"]        = {
        sC             : [
                           'E¬@| C­@|BµB6 B.COB.EO B.I1E5K· E´Lr FUM1FxM1 FÁM1G;L¸ GYLzGYLS G[L0FwKL E/I¬ DaI9D&Gº D}H>E;HQ E|HeF#He G«HeH¥Gk I~FqI~D´ I~C(HzA¸ Gp@|E¬@|'
                         ],
        hC             : [
                           ['E¬FÀ E5FÀDsF£ DYFuCsF4 CmE¤CmEO CmCÃD&C2 DrB$E±B$ G!B$GtB² H>CqH>D´ H>EºGrFZ G#FÀE¬FÀ']
                         ],
        xMin           : 54,
        xMax           : 541.5,
        yMin           : -35.5,
        yMax           : 759.5,
        wdth           : 610
      };
      font["7"]        = {
        sC             : [
                           'J(K= IPJU HQIAGgGo F4Di F!D=EcBª E0AwD§A/ Di@¤D6@¤ C²@¤Cr@¿ CSA8CSA_ CSA¦C´B¿ EnG6 F¢IwG»K" H+K7 D@KA BfKG A©KOA©L# A©LMAÄLi B=L¥BgL¥ CbL¥EWL{ GNLtHILt I}Lt JdLtJdL5 JdKªJ(K='
                         ],
        xMin           : 34,
        xMax           : 592.5,
        yMin           : -32.5,
        yMax           : 736,
        wdth           : 610
      };
      font["8"]        = {
        sC             : [
                           'E¼@° DK@°CLAh B<BLB9C³ B5FLC¹G> BiH(BiIk BiK"CoKÀ DoLµF$L· I?L»I?I¡ I?H¬H³HJ HkG¸G~G^ H±F·IIF? I°E]I°D- I°BgH{Au Gr@°E¼@°'
                         ],
        hC             : [
                           ['E³F| DvF2DAE¡ CqE-CvC¼ CzBÂDfBd E5B8E¼B8 GEB8G¬B¬ H@CIH@DL H@ELG]E½ F½FPE³F|','F!Kf E#KfDcJÁ D%J[D&Ik D(HbE«H( F~HJG/Hm G¤I"G¤I¡ G¤J¦GEK9 FµKfF!Kf']
                         ],
        xMin           : 59.5,
        xMax           : 549.5,
        yMin           : -26.5,
        yMax           : 745,
        wdth           : 610
      };
      font["9"]        = {
        sC             : [
                           'G?B8 FyA¦E[A9 D,@fCh@f C?@fC%@¥ B¯@ÂB¯AF B¯A£CNAÀ DrBU E¬BµFaCd G8D3G¤EF H+E½ GuE|FÁEa FHEFEµEF DZEFCSF- B/G*B/H³ B/JÄCWL) DgLÀFPLÀ G¦LÀHµK® J(JqJ)H· J*F¿INE3 HkC7G?B8'
                         ],
        hC             : [
                           ['F4Kx D³KxD>K! ClJMCkI! CkGµDOGC E(F¡F/F¡ F~F¡GRG- GzGBH_G° HlHcHlH· HkI±G§J¥ FÁKxF4Kx']
                         ],
        xMin           : 54.5,
        xMax           : 563.5,
        yMin           : -46.5,
        yMax           : 749.5,
        wdth           : 610
      };
      font["¡"]        = {
        sC             : [
                           'B7L­ B7M-BSMG BoMbBµMb C9MbCbM. C©L¡C©LV C©L3CkK½ CNK£C+K£ B¨K£B^L3 B7LdB7L­',
                           'B9AX B9I¹ B9JoB³Jo CgJoCgI¹ CgIpCiHÂ CkHPCkH) CkF¾CiD£ CgBgCgAX Cg@¤B³@¤ B9@¤B9AX'
                         ],
        xMin           : 58.5,
        xMax           : 162,
        yMin           : -32.5,
        yMax           : 783.5,
        wdth           : 237.5
      };
      font["!"]        = {
        sC             : [
                           'C©AX C©A5Ck@¾ CN@¤C+@¤ B§@¤B^A4 B7AeB7A¯ B7B/BSBH BoBcBµBc C9BcCbB/ C©A¢C©AX',
                           'C¨L­ C¨DK C¨CuC.Cu BWCuBWDK BWDtBTEC BREµBRF9 BRGGBTIc BWK}BWL­ BWMbC.Mb C¨MbC¨L­'
                         ],
        xMin           : 58.5,
        xMax           : 162,
        yMin           : -32.5,
        yMax           : 783.5,
        wdth           : 237.5
      };
      font["|"]        = {
        sC             : [
                           'DuNL EHNLEHMv EH?R EF>aDt>a D9>aD$?* C½?QC½AZ C½Mv C½M¾D4N4 DMNLDuNL'
                         ],
        xMin           : 172,
        xMax           : 259,
        yMin           : -177,
        yMax           : 837,
        wdth           : 421
      };
      font['"']        = {
        sC             : [
                           'FaLv FaLgF^LJ F[L-F[KÃ FRI# FPHLE|HL EVHLE<He E"H~E#I! E-L$ E/LtE9Lµ ENMLE¬ML F0MLFHM3 FaL¾FaLv',
                           'CbI¦ CbItCfIS CkI3CkI# CkH£CPHi C6HPB´HP B3HPB3Ix B3J7B6K8 B9L9B9Lz B9LÂBQM8 BjMPB³MP C6MPCNM8 CgLÂCgLz CgL;CeK> CbJBCbI¦'
                         ],
        xMin           : 56.5,
        xMax           : 335,
        yMin           : 453,
        yMax           : 775,
        wdth           : 424
      };
      font["'"]        = {
        sC             : [
                           'D¨LF D¨L(D­Kp D±K5D±J» D±I¾D7I¾ C{I¾CjJF CcJ]CcK" CcK>C]Ku CWL*CWLF CWM&C`MI CsMºD5Mº DZMºDtM¢ D¯MhD¯MB D¯M-D¬L§ D¨LZD¨LF'
                         ],
        xMin           : 138.5,
        xMax           : 230,
        yMin           : 556.5,
        yMax           : 810.5,
        wdth           : 388
      };
      font["#"]        = {
        sC             : [
                           'BFEv D%Ev DÀH­ B»H­ B<H­B<Im B<J6CLJ6 ENJ6 EhK&E¾Ll F7MEF°ME G.MEGCM+ GXL´GXLs GXLJG>Kr F¶JUF¯J6 JgJ6 JªK,KALs KZMEKÃME LtMELtLy LtL6KÄJ6 MaJ6 NDJ6NDIn NDH©MUH© MGH©M(H« L¬H­L{H­ KmH­ J§Ev LKEv L¶EvM0Ek MdEWMdD¿ MdDBL±DB JSDB I}A¨ IbA%H±A% H>A%H>At H>B-H_B¾ H®D5H±DB E%DB D¬CPD?As D"A-CaA- BµA-BµA{ BµAÃC(Bi CJCVCmDB B2DB AbDBAbE" AbEIA¥Ea AÁEvBFEv'
                         ],
        hC             : [
                           ['FWH­ E^Ev IEEv J3H­ FWH­']
                         ],
        xMin           : 15.5,
        xMax           : 833,
        yMin           : -14,
        yMax           : 769.5,
        wdth           : 842.5
      };
      font["$"]        = {
        sC             : [
                           'G.M¢ G.LZ G1LZ G²LZHªL: J$K³J$KN J$JzINJz I&JzHDJ± GcK"G.K! G.G· H¨G¤I¢F© JpE¸JpDv JpC1IhB0 HpA?G.@½ G.>º G.>rF¸>X F}>?FV>? E£>?E£>¸ E£@± B"@¸B"B¨ B"C^BuC^ C!C^CLC9 C®B¦D+Bs DzBKE£BE E£Fp EyFp DbFvCsG9 BjG°BjI" BjJ(CgJÂ DZK¯E£L> E£Mz E£MÂE½N9 F3NRFZNR G.NRG.M¢'
                         ],
        hC             : [
                           ['G.FV G.BZ G¸B~HZCA I(C²I(Dk I(E·G.FV','E£H# E£J¥ D=J9D=HÃ D=HAE£H#']
                         ],
        xMin           : 48.5,
        xMax           : 598.5,
        yMin           : -193.5,
        yMax           : 840,
        wdth           : 693
      };
      font["%"]        = {
        sC             : [
                           'J³A/ I®A/I3A¡ HWBQHWCV HWDgI)EE I¢F+J±F+ K¶F+LwEa MfD°MfC¯ MfBwL¨A¶ L$A/J³A/',
                           'JxL[ JRKÃJ)K@ IeJ! H"F¦ FHC6 F*BkEfAX EJA#D¿A# D}A#DcA; DHARDHAu DHA¦DNA¸ D¡B»EiDn FgFiF¯GB H·K¯ IIL±IvM> I¶M`J3M` JTM`JoMF J«M-J«L¯ J«LwJxL[',
                           'DsI: CjI:B½I¼ BQJsBQK| BQL[C5M2 C·M¨DvM¨ E¦M¨FWM& G&LLG&K> G&JGFCI~ EkI:DsI:'
                         ],
        hC             : [
                           ['J±Dª JHDªIÃDR I}CÄI}CV I}B·J%Bt JPBRK$BR KuBRK½B£ LAC/LAC¯ LADDK§Di KODªJ±Dª'],
                           [],
                           ['DsLb DELbCÁLD CuL"CuK| CuK-C·J© D4J_DsJ_ E&J_ERJw E¦J´E¦K> E¦K³E`L8 E:LbDsLb']
                         ],
        xMin           : 71.5,
        xMax           : 785.5,
        yMin           : -15,
        yMax           : 801.5,
        wdth           : 820
      };
      font["&"]        = {
        sC             : [
                           'DºJ{ DºK[EiLG F?M9FÁM9 G°M9HMLl H«L"H«K1 H«IlFÀH: GiF¸H§D¾ H»EQI!E­ I1FoI8F© IRGWI©GW J/GWJGG+ JZF©JZFZ JZD¶IvCk J»AlJ»A; J»@»J}@¢ Ja@gJ=@g I´@gIs@» H¤BZ G=@½EJ@½ C¶@½BµA® A®B£A®D4 A®ErB½F¯ CnGgEIHz DºI~DºJ{'
                         ],
        hC             : [
                           ['E¶GY DlFjD/F- C9E6C9D4 C9CIC±B© D^BHEJBH F²BHGÂCp GUD_E¶GY','F^Ie GZJLGZK1 GZK_GKKu G<K­FÁK­ F¯K­FjKL FEJ±FEJ{ FEJ8F^Ie']
                         ],
        xMin           : 36.5,
        xMax           : 619,
        yMin           : -46,
        yMax           : 763.5,
        wdth           : 654
      };
      font["("]        = {
        sC             : [
                           'FjLª FjLfF-L" E£KxETKJ DhJOD*Hk CuG"CuEc CuAsEU?® E¥?iF0?E Fi>»Fi>m Fi>KFO>4 F5=¿E·=¿ Ex=¿EN>2 B1?½B1Ez B1G¥B¾I´ CµL?ETMG E|McE´Mc F4McFOMF FjM*FjLª'
                         ],
        xMin           : 55.5,
        xMax           : 339.5,
        yMin           : -211,
        yMax           : 784,
        wdth           : 366
      };
      font[")"]        = {
        sC             : [
                           'FjEz Fj?½CK>2 C"=¿B©=¿ Bf=¿BK>4 B2>KB2>m B2>»Bk?E Bº?iCE?® E%AsE%Ec E%G"DqHk D2JOCFKJ B¼KxBnL" B1LfB1Lª B1M*BKMF BfMcB«Mc BÁMcCFMG D«L?E¢I´ FjG¥FjEz'
                         ],
        xMin           : 55.5,
        xMax           : 339.5,
        yMin           : -211,
        yMax           : 784,
        wdth           : 366
      };
      font["*"]        = {
        sC             : [
                           'ApKF ApKkA¬K© B!L!BEL! B^L!DNKD DFLKDFL¢ DFM$D`M> DyMVDÀMV ECMVE]M> EvM$EvL¢ EvLJE|KZ GfK~G½K~ H>K~HVKd HoKJHoK# HoJaH$JP GaJBF3J- FmI{G/I) G¨H=G¨G¶ G¨GqGkGV GOG<G,G< F©G<FiG` F-H/E%IE C^GbB¸Gb BsGbBWG~ B=G»B=H; B=H]B]H} B½I0C´J$ CAJ>B&J{ ApJµApKF'
                         ],
        xMin           : 22.5,
        xMax           : 470,
        yMin           : 381,
        yMax           : 778,
        wdth           : 529.5
      };
      font["+"]        = {
        sC             : [
                           'H=F5 H=E´H$Ew G°E]GjE] G^E]GFE` G/EdG!Ed F@Eb E¨E`E`Eb E`C} E`C#D«C# D^C#DGC: D1CPD1C} D0Dm D/E_ C9EWB«EW AqEWAqF1 AqFqB%F£ B9F¨B«F¨ C9F¨D/F® D.G¡ D.HVD7Hz D@H¿DUI- DjI?D­I? E/I?EII& EcH²EcHk EcHYE`H5 E]G´E]G¢ E^F² F%F¯ F9F¯FbF² F¬F´FÀF´ H=F´H=F5'
                         ],
        xMin           : 23,
        xMax           : 445.5,
        yMin           : 113,
        yMax           : 510.5,
        wdth           : 480
      };
      font[","]        = {
        sC             : [
                           'CX>s C6>sB¿>¯ B¦?%B¦?H B¦?fC?@q CuAkC³AÀ D*BLDTBL DxBLD³B1 E)A¹E)Au E)A^CÁ?% C«>sCX>s'
                         ],
        xMin           : 96.5,
        xMax           : 243.5,
        yMin           : -168,
        yMax           : 69,
        wdth           : 276.5
      };
      font["-"]        = {
        sC             : [
                           'FYD´ ETD§B£D§ B.D§B.EP B.E¿B£E¿ CME¿DhF" E¥F*FOF* G%F*G%E_ G%D½FYD´'
                         ],
        xMin           : 54,
        xMax           : 370,
        yMin           : 225,
        yMax           : 308,
        wdth           : 416.5
      };
      font["."]        = {
        sC             : [
                           'CF@h B¶@hBq@­ BMA-BMAa BMAµBqB5 B¶BYCFBY CyBYC¿B5 D?AµD?Aa D?A-C¿@­ Cy@hCF@h'
                         ],
        xMin           : 69.5,
        xMax           : 190.5,
        yMin           : -45.5,
        yMax           : 75.5,
        wdth           : 249
      };
      font["/"]        = {
        sC             : [
                           'Bo@k BJ@kB/@¥ A·@½A·A? A·ANA½Aa BhC2D9F= E¯IHFZJ¾ GYMyG¾Mv H?MuHZM] HwMCHwLÂ HwL¬HlLk G¡Ja G<I+FCG? DoD+ C=A" C"@kBo@k'
                         ],
        xMin           : 41,
        xMax           : 474,
        yMin           : -44,
        yMax           : 793.5,
        wdth           : 511.5
      };
      font[":"]        = {
        sC             : [
                           'DEHh DEH;D)GÂ C±G¦CcG¦ C6G¦B¼GÂ B~H;B~Hh B~HtBzH® BuI"BuI/ BuIYBµIv C/I³CZI³ DEI³DEHh',
                           'DVBÁ DVBsD9BV CÀB:CrB: CEB:C*BV B±BsB±BÁ B±C1BªCT B¤CyB¤C­ B¤D3BÃDN C>DjCiDj DVDjDVBÁ'
                         ],
        xMin           : 89,
        xMax           : 202,
        yMin           : 60,
        yMax           : 551,
        wdth           : 298.5
      };
      font[";"]        = {
        sC             : [
                           'Bi?§ A´?§A´@a A´@ÂBfA¾ C;B¿CuB¿ CºB¿D3B¥ DNBiDNBD DNAÄC­AQ CC@~C>@W C5?§Bi?§',
                           'DSHb DSH6D7G½ C½G¡CpG¡ CDG¡C(G½ B¯H6B¯Hb B¯HoBªH© B¥HÁB¥I) B¥ISBÃIp C=I®ChI® DSI®DSHb'
                         ],
        xMin           : 39.5,
        xMax           : 200.5,
        yMin           : -95,
        yMax           : 548.5,
        wdth           : 298.5
      };
      font["<"]        = {
        sC             : [
                           'CfE¼ C¾ErDlDÀ EJD:EnC¿ E³C¡E³CZ E³C6EwB½ E]B¢E8B¢ DÀB¢D¥B¶ D[C0C[D6 BzD¿AÁE? ATE[ATE³ ATFAAºFb BsF°C`G£ DwHÁD¶I6 E0INEMIN EqINE®I3 F%H»F%Hu F%HSE¬H5 E+GRCfE¼'
                         ],
        xMin           : 9,
        xMax           : 306,
        yMin           : 94.5,
        yMax           : 518,
        wdth           : 381
      };
      font["="]        = {
        sC             : [
                           'D6D¨ DwD¨ExD¥ FyD¢G8D¢ G²D¢G²D( G²CQG8CQ FyCQExCT DwCWD6CW C»CWC_CS C"COBªCO B-COB-D% B-DwB¤D~ CnD¨D6D¨',
                           'C¡H´ GFH³ GÀH³GÀH9 GÀGcGFGc C~Gd CgGdC:Gb B±G_ByG_ BRG_B:Gy B!G´B!H6 B!H~BuH¯ B­H´C¡H´'
                         ],
        xMin           : 48,
        xMax           : 429.5,
        yMin           : 134.5,
        yMax           : 487.5,
        wdth           : 510
      };
      font[">"]        = {
        sC             : [
                           'F³FI F³F%FmE§ D§D,B¨B¬ BjBxBQBx B.BxA·B¶ A{C/A{CR A{CzAÃC¹ D¾F7 DDFrCDGi B(H}B(I4 B(IWBCIs B`I¯B¥I¯ C%I¯CCIl E!GsFWF· F³FxF³FI'
                         ],
        xMin           : 28,
        xMax           : 359,
        yMin           : 90.5,
        yMax           : 549,
        wdth           : 381
      };
      font["¿"]        = {
        sC             : [
                           'FkLf F¸LfG8LH GZL+GZK¤ GZKEG:J· F¹J^F^J^ E£J^E£KP E£K©E¼L2 F8LfFkLf',
                           'F4Ir F]IrF|IS F¼I4F¼H¯ F¼HJE¿Gh D3F6 C5EJC5Dq C5C¢CÂBÂ D©BBEzBB F6BBF¸B¤ GuC@G­C@ H2C@HOBÃ HmB£HmBX HmA®GWA? FQ@|Ez@| D5@|B·A· AuC-AuDq AuE¢BPFn BªG/C¿G½ E1H¨ElII E°IrF4Ir'
                         ],
        xMin           : 25,
        xMax           : 469,
        yMin           : -35.5,
        yMax           : 721.5,
        wdth           : 523.5
      };
      font["?"]        = {
        sC             : [
                           'Cw@| CK@|C(@» B©A5B©A_ B©A½C%BK CJB¥C¦B¥ DbB¥DbA² DbAYDGA. D(@|Cw@|',
                           'D,Co C§CoCfC° CGD,CGDS CGD¹DDEz F.G) G,G¸G,Hp G,IaFAJ@ E[JÀDhJÀ D*JÀCKJ_ BmIÂBVIÂ B.IÂA´J? AuJ`AuJª AuKTB­KÃ C²LfDhLf F,LfGLKL HmJ2HmHp HmGaG³Fs GYF0FEEF E0DZDvC¹ DSCoD,Co'
                         ],
        xMin           : 25,
        xMax           : 469,
        yMin           : -35.5,
        yMax           : 721.5,
        wdth           : 523.5
      };
      font["@"]        = {
        sC             : [
                           'K=DT JUDTI­Ds I?D³H´EL H]D»H*D¡ GyDdGHDd F]DdE|E< D¾E·D¾F¡ D¾H2F)IH G7J^HmJ^ H¸J^I0J? ILIÄILIw ILI;HkHÂ GiH{G2HJ FdG§FdF¡ FdFbF¡FG F¿F*GIF, GÁF0HgGJ I(HQIZHQ I¦HQIÀH2 J6G·J6Gi J6GUJ0G. J)F©J)Ft J)F3JaF" JwE¿K=E¿ LCE¿LyF^ M)F»M)GÃ M)I²KjK% J9L1HEL1 F)L1D«JZ CwH¾CwFz CwDnDÄC6 FSAwHkAw I9AwIÀA¸ KHBT KtBeK¢Be L&BeLEBD LcB#LcA{ Lc@ÀJµ@e Iv@9Hm@9 Gc@9FR@o EBA"D]A} B-C¥B-Fz B-IqC}Km EXMzHEMz J²MzL{L3 NrJbNrGÃ NrFDM©EN L¹DTK=DT'
                         ],
        xMin           : 53.5,
        xMax           : 855.5,
        yMin           : -68.5,
        yMax           : 795.5,
        wdth           : 931
      };
      font["["]        = {
        sC             : [
                           'Dp>/ DZ>/D.>- C¥>*Cl>* Bn>*Bn>À Bn@OB}DL B­HHB­I| B{L! BzL0 BxLUB³Ls C)L±CPL± CnL±D(L® DdL¬D¤L¬ D¶L¬E8L® E^L±EpL± FIL±FIL/ FIKXExKP E$KID1KM D7JwD7Iª D*Dy C½?k Dp?n D¯?nEE?k E¡?iE½?i FA?iFX?L Fp?0Fp>¬ Fp>cFX>F FA>*E½>* E¡>*EE>- D¯>/Dp>/'
                         ],
        xMin           : 85.5,
        xMax           : 342.5,
        yMin           : -204,
        yMax           : 742,
        wdth           : 376
      };
      font["]"]        = {
        sC             : [
                           'Dn>/ D§>/E0>- E]>*Er>* Fp>*Fp>À Fp@OFbDL FSHHFSI| FcL! FdL0 FfLUFLLs F3L±E°L± EpL±E4L® DzL¬D]L¬ DIL¬D#L® C£L±CnL± B¶L±B¶L/ B¶KXCfKP D8KIE-KM E%JwE%Iª E3Dy EB?k Dn?n DQ?nC»?k C`?iCB?i B¿?iB¨?L Bn?0Bn>¬ Bn>cB¨>F B¿>*CB>* C`>*C»>- DQ>/Dn>/'
                         ],
        xMin           : 85.5,
        xMax           : 342.5,
        yMin           : -204,
        yMax           : 742,
        wdth           : 376
      };
      font["{"]        = {
        sC             : [
                           'C>Er CuE®CÁFY DFG!DFG] DFG©D@I# D9JAD9Jl D9L+EBL: EdL;F$LD FkLSFkL« FkM;F2MZ E¦MuELMu D±MuDKMX B¬L¦B¬JO B±H¯ B´GJ B´G/ BaFÄAºF^ AGE¶AGEa AGE5B#Dt B£D1B£Cb B£CFByB´ BqB[BqB@ Bq@·CA?¡ D">KE@>K E¬>KF&>V FY>lFY?( FY?jF&?z E³?¤E@?¤ D~?¤DM@¨ D&AoD&B@ D&BbD/BÄ D7CcD7C¥ D7D0C®D£ CfEEC>Er'
                         ],
        xMin           : 2.5,
        xMax           : 340,
        yMin           : -187.5,
        yMax           : 793,
        wdth           : 366
      };
      font["}"]        = {
        sC             : [
                           'DtEr D=E®C¶FY ClG!ClG] ClG©CsI# CyJACyJl CyL+BpL: BNL;A°LD AGLSAGL« AGM;A£MZ B/MuBgMu C"MuCgMX E)L¦E)JO E#H¯ DÄGJ DÄG/ ERFÄE½F^ FkE¶FkEa FkE5E°Dt E1D1E1Cb E1CFE9B´ EAB[EAB@ EA@·Dq?¡ C²>KBr>K B)>KA®>V AY>lAY?( AY?jA®?z AÄ?¤Br?¤ C5?¤Cf@¨ C®AoC®B@ C®BbC¦BÄ C|CcC|C¥ C|D0D&D£ DLEEDtEr'
                         ],
        xMin           : 2.5,
        xMax           : 340,
        yMin           : -187.5,
        yMax           : 793,
        wdth           : 366
      };
      font["^"]        = {
        sC             : [
                           'E©M¬ F;M¬F©MG FÁM2GsLZ H¯K4 I&JºI&Jz I&JTH®J: HqIÂHMIÂ H,IÂG²J; GAJ¶E½L9 D!I¬C]I¬ C9I¬BÁJ$ B¦J@B¦Jd B¦J¨BÄK! CWKVEJMl EeM¬E©M¬'
                         ],
        xMin           : 96.5,
        xMax           : 498.5,
        yMin           : 547.5,
        yMax           : 803.5,
        wdth           : 581
      };
      font["_"]        = {
        sC             : [
                           'KM>r Hy>r H2>rG(>v EÀ>{EX>{ B$>{ A²>{Ac>v A5>r@Â>r @Â@$ A¤@$CD@& D«@(Ej@( F/@(G8@" HA?ÀH©?À KM@$ KM>r'
                         ],
        xMin           : -17.5,
        xMax           : 645.5,
        yMin           : -168.5,
        yMax           : -77,
        wdth           : 626.5
      };
      font[" "]        = {
        sC             : [
                         ],
        xMin           : 10000,
        xMax           : -10000,
        yMin           : 10000,
        yMax           : -10000,
        wdth           : 298.5
      };
      font[" "]        = {
        sC             : [
                         ],
        xMin           : 10000,
        xMax           : -10000,
        yMin           : 10000,
        yMax           : -10000,
        wdth           : 298.5
      };

      return font;


      function supplement(basis,extra,offsetX,offsetY){
        var glyph      = {
              xMin     : basis.xMin,
              xMax     : basis.xMax,
              yMin     : basis.yMin,
              yMax     : basis.yMax,
              wdth     : basis.wdth
            },
            shapes     = basis.sC.map(shape=>shape),
            holes      = typeof basis.hC === "object" ? basis.hC.map(hole=>hole) : undefined ,
            extraShapes= extra === "dieresis" ? 2 : 1 , 
            extraHoles = extra === "ring" ? 1 : 0 ;

        if ( extraShapes === 2 ) {
          if ( holes ) { holes.unshift([]) }
          if ( extra === "dieresis" ) { shapes.unshift(dieresisRightCoded(offsetX,offsetY)) }
        }
        if ( extraHoles ) {
          if ( typeof holes !== "object" ) {
            holes      = basis.sC.map(shape=>[])
          }
          if ( extra === "ring" ) {
            holes.unshift(ringHoleCoded(offsetX,offsetY)) 
          }
        } else {
          if ( holes ) { holes.unshift([]) }
        }

        if ( extra === "dieresis" )   { 
          glyph.yMax   = dieresisYmax(offsetY);
          shapes.unshift(dieresisLeftCoded(offsetX,offsetY))
        }
        if ( extra === "circumflex" ) {
          glyph.yMax   = circumflexYmax(offsetY);
          shapes.unshift(circumflexCoded(offsetX,offsetY)) 
        }
        if ( extra === "acute" )      { 
          glyph.yMax   = acuteYmax(offsetY);
          shapes.unshift(acuteCoded(offsetX,offsetY)) 
        }
        if ( extra === "grave" )      { 
          glyph.yMax   = graveYmax(offsetY);
          shapes.unshift(graveCoded(offsetX,offsetY)) 
        }
        if ( extra === "tilde" )      { 
          glyph.yMax   = tildeYmax(offsetY);
          shapes.unshift(tildeCoded(offsetX,offsetY))
        }
        if ( extra === "ring" )       { 
          glyph.yMax   = ringYmax(offsetY);
          shapes.unshift(ringCoded(offsetX,offsetY))
        }
        glyph.sC       = shapes;
        if ( holes ) {
          glyph.hC     = holes
        }
        return glyph     
      };
      //  ~  -  =  ~  -  =  ~  -  =  ~  -  =  ~  -  =  
      // To support non-english letters, we need a variety of new symbols: acute, dieresis, etc.
      // It turns out that these symbols can be re-used, with some placement changes
      // To save space and code, that's what we do
      // These functions return the special symbols in compressed or raw forms
      function acuteRaw(dx,dy){
        // "M 148 579.5 Q 130.5 579.5 117 593 Q 104 606.5 104 624.5 Q 104 641 119 656 Q 140 676.5 183 733.5 Q 215 775.5 254.5 803.5 Q 268 812.5 280.5 812.5 Q 298 812.5 311.5 799 Q 324.5 785 324.5 767.5 Q 324.5 748 306 733 Q 271.5 706 240 662.5 Q 207 616.5 177 591.5 Q 163.5 579.5 148 579.5 Z"
        return [[148+dx,579.5+dy],[130.5+dx,579.5+dy,117+dx,593+dy],[104+dx,606.5+dy,104+dx,624.5+dy],[104+dx,641+dy,119+dx,656+dy],[140+dx,676.5+dy,183+dx,733.5+dy],[215+dx,775.5+dy,254.5+dx,803.5+dy],[268+dx,812.5+dy,280.5+dx,812.5+dy],[298+dx,812.5+dy,311.5+dx,799+dy],[324.5+dx,785+dy,324.5+dx,767.5+dy],[324.5+dx,748+dy,306+dx,733+dy],[271.5+dx,706+dy,240+dx,662.5+dy],[207+dx,616.5+dy,177+dx,591.5+dy],[163.5+dx,579.5+dy,148+dx,579.5+dy]]
      };
      function acuteCoded(dx,dy){
        return codeList(acuteRaw(dx,dy))
      };
      function acuteYmax(y){return 812+y};

      function graveRaw(dx,dy){
        // "M 281.5 618.5 Q 281.5 601 267.5 588 Q 253.5 575 236 575 Q 215 575 201 595.5 L 152 668 Q 126 704 91.5 730.5 Q 72.5 745.5 72.5 765.5 Q 72.5 783 85.5 797 Q 98.5 811 116 811 Q 146 811 214.5 729.5 Q 281.5 649.5 281.5 618.5 Z"
        return [[281.5+dx,618.5+dy],[281.5+dx,601+dy,267.5+dx,588+dy],[253.5+dx,575+dy,236+dx,575+dy],[215+dx,575+dy,201+dx,595.5+dy],[152+dx,668+dy],[126+dx,704+dy,91.5+dx,730.5+dy],[72.5+dx,745.5+dy,72.5+dx,765.5+dy],[72.5+dx,783+dy,85.5+dx,797+dy],[98.5+dx,811+dy,116+dx,811+dy],[146+dx,811+dy,214.5+dx,729.5+dy],[281.5+dx,649.5+dy,281.5+dx,618.5+dy]]
      };
      function graveCoded(dx,dy){
        return codeList(graveRaw(dx,dy))
      };
      function graveYmax(y){return 811+y};

      function circumflexRaw(dx,dy){
        // "M 288 825 Q 314.5 825 352.5 792 Q 364 782 405.5 737.5 L 483 654.5 Q 496 640 496 625 Q 496 607 482.5 593.5 Q 469 580.5 451 580.5 Q 435 580.5 420 594.5 Q 381 638.5 298 721.5 Q 174 569 139 569 Q 121.5 569 108 583 Q 94.5 596.5 94.5 614 Q 94.5 631 109 645.5 Q 136.5 672 258 810 Q 271 825 288 825 Z"
        return [[288+dx,825+dy],[314.5+dx,825+dy,352.5+dx,792+dy],[364+dx,782+dy,405.5+dx,737.5+dy],[483+dx,654.5+dy],[496+dx,640+dy,496+dx,625+dy],[496+dx,607+dy,482.5+dx,593.5+dy],[469+dx,580.5+dy,451+dx,580.5+dy],[435+dx,580.5+dy,420+dx,594.5+dy],[381+dx,638.5+dy,298+dx,721.5+dy],[174+dx,569+dy,139+dx,569+dy],[121.5+dx,569+dy,108+dx,583+dy],[94.5+dx,596.5+dy,94.5+dx,614+dy],[94.5+dx,631+dy,109+dx,645.5+dy],[136.5+dx,672+dy,258+dx,810+dy],[271+dx,825+dy,288+dx,825+dy]]
      };
      function circumflexCoded(dx,dy){
        return codeList(circumflexRaw(dx,dy))
      };
      function circumflexYmax(y){return 825+y};

      function caronRaw(dx,dy){
        return [[284+dx,731+dy],[176+dx,588+dy],[65+dx,588+dy],[-42+dx,731+dy],[50+dx,731+dy],[120+dx,642+dy],[191+dx,731+dy]]
      };
      function caronCoded(dx,dy){
        return codeList(caronRaw(dx,dy))
      };
      function caronYmax(y){return 731+y};

      // "M 162 669.5 Q 226 669.5 226 618.5 Q 226 604 204.5 590 Q 185 578 167.5 578 Q 107.5 578 107.5 628 Q 107.5 642.5 126 656 Q 144.5 669.5 162 669.5 Z M 425 673.5 Q 441.5 673.5 458.5 658 Q 476 643 476 628 Q 476 583 406 583 Q 386 583 370.5 593.5 Q 353 605 353 624.5 Q 353 658 375 667.5 Q 387 673.5 425 673.5 Z"
      function dieresisLeftRaw(dx,dy){
        return [[162+dx,669.5+dy],[226+dx,669.5+dy,226+dx,618.5+dy],[226+dx,604+dy,204.5+dx,590+dy],[185+dx,578+dy,167.5+dx,578+dy],[107.5+dx,578+dy,107.5+dx,628+dy],[107.5+dx,642.5+dy,126+dx,656+dy],[144.5+dx,669.5+dy,162+dx,669.5+dy]]
      };
      function dieresisLeftCoded(dx,dy){
        return codeList(dieresisLeftRaw(dx,dy))
      };
      function dieresisRightRaw(dx,dy){
        return [[425+dx,673.5+dy],[441.5+dx,673.5+dy,458.5+dx,658+dy],[476+dx,643+dy,476+dx,628+dy],[476+dx,583+dy,406+dx,583+dy],[386+dx,583+dy,370.5+dx,593.5+dy],[353+dx,605+dy,353+dx,624.5+dy],[353+dx,658+dy,375+dx,667.5+dy],[387+dx,673.5+dy,425+dx,673.5+dy]]
      };
      function dieresisRightCoded(dx,dy){
        return codeList(dieresisRightRaw(dx,dy))
      };
      function dieresisYmax(y){return 707+y};

      function tildeRaw(dx,dy){
        // "M 221.5 758.5 Q 270.5 758.5 300 730 L 340.5 678.5 Q 363.5 650 395.5 650 Q 423 650 437 668 L 459 711 L 469 740 Q 476 754 498.5 754 Q 535 754 535 718 Q 535 700.5 514 659 Q 494.5 620 480 605 Q 453 577.5 410.5 577.5 Q 346.5 577.5 310.5 605 Q 297 615.5 267.5 657.5 Q 247 685.5 221.5 685.5 Q 206.5 685.5 194.5 679.5 Q 182.5 674 173.5 663 L 152 621.5 Q 140 599.5 120.5 599.5 Q 105 599.5 94 609.5 Q 83 619.5 83 634.5 Q 83 640 84 645.5 Q 98 695.5 133.5 726.5 Q 171.5 758.5 221.5 758.5 Z"
        return [[221.5+dx,758.5+dy],[270.5+dx,758.5+dy,300+dx,730+dy],[340.5+dx,678.5+dy],[363.5+dx,650+dy,395.5+dx,650+dy],[423+dx,650+dy,437+dx,668+dy],[459+dx,711+dy],[469+dx,740+dy],[476+dx,754+dy,498.5+dx,754+dy],[535+dx,754+dy,535+dx,718+dy],[535+dx,700.5+dy,514+dx,659+dy],[494.5+dx,620+dy,480+dx,605+dy],[453+dx,577.5+dy,410.5+dx,577.5+dy],[346.5+dx,577.5+dy,310.5+dx,605+dy],[297+dx,615.5+dy,267.5+dx,657.5+dy],[247+dx,685.5+dy,221.5+dx,685.5+dy],[206.5+dx,685.5+dy,194.5+dx,679.5+dy],[182.5+dx,674+dy,173.5+dx,663+dy],[152+dx,621.5+dy],[140+dx,599.5+dy,120.5+dx,599.5+dy],[105+dx,599.5+dy,94+dx,609.5+dy],[83+dx,619.5+dy,83+dx,634.5+dy],[83+dx,640+dy,84+dx,645.5+dy],[98+dx,695.5+dy,133.5+dx,726.5+dy],[171.5+dx,758.5+dy,221.5+dx,758.5+dy]]
      };
      function tildeCoded(dx,dy){
        return codeList(tildeRaw(dx,dy))
      };
      function tildeYmax(y){return 714+y};

      function ringHoleRaw(dx,dy){
        // "M 128 707.5 Q 128 778 178.5 819 Q 227 858 305.5 858 Q 366.5 858 410 824 Q 457.5 786.5 457.5 727 Q 457.5 654.5 413.5 617.5 Q 370 580.5 282.5 579 Q 216 578 172 616 Q 128 653.5 128 707.5 Z"
        return [
          [[290+dx,650.5+dy],[332+dx,652+dy,351.5+dx,662.5+dy],[384+dx,680+dy,384+dx,727+dy],[384+dx,755+dy,357.5+dx,771+dy],[335.5+dx,785.5+dy,305.5+dx,785.5+dy],[199.5+dx,785.5+dy,201.5+dx,707.5+dy],[202+dx,685+dy,231+dx,667+dy],[260.5+dx,649.5+dy,290+dx,650.5+dy]]
          // [[128+dx,707.5+dy],[128+dx,778+dy,178.5+dx,819+dy],[227+dx,858+dy,305.5+dx,858+dy],[366.5+dx,858+dy,410+dx,824+dy],[457.5+dx,786.5+dy,457.5+dx,727+dy],[457.5+dx,654.5+dy,413.5+dx,617.5+dy],[370+dx,580.5+dy,282.5+dx,579+dy],[216+dx,578+dy,172+dx,616+dy],[128+dx,653.5+dy,128+dx,707.5+dy]]
        ]
      };
      function ringHoleCoded(dx,dy){
        return [codeList(ringHoleRaw(dx,dy)[0])]
      };
      function ringRaw(dx,dy){
        // "M 290 650.5 Q 332 652 351.5 662.5 Q 384 680 384 727 Q 384 755 357.5 771 Q 335.5 785.5 305.5 785.5 Q 199.5 785.5 201.5 707.5 Q 202 685 231 667 Q 260.5 649.5 290 650.5 Z"
        // "M 290 650.5 Q 260.5 649.5 231 667 Q 202 685 201.5 707.5 Q 199.5 785.5 305.5 785.5 Q 335.5 785.5 357.5 771 Q 384 755 384 727 Q 384 680 351.5 662.5 Q 332 652 290 650.5 Z"
        // return [[290+dx,650.5+dy],[260.5+dx,649.5+dy,231+dx,667+dy],[202+dx,685+dy,201.5+dx,707.5+dy],[199.5+dx,785.5+dy,305.5+dx,785.5+dy],[335.5+dx,785.5+dy,357.5+dx,771+dy],[384+dx,755+dy,384+dx,727+dy],[384+dx,680+dy,351.5+dx,662.5+dy],[332+dx,652+dy,290+dx,650.5+dy]]
        return [[128+dx,707.5+dy],[128+dx,778+dy,178.5+dx,819+dy],[227+dx,858+dy,305.5+dx,858+dy],[366.5+dx,858+dy,410+dx,824+dy],[457.5+dx,786.5+dy,457.5+dx,727+dy],[457.5+dx,654.5+dy,413.5+dx,617.5+dy],[370+dx,580.5+dy,282.5+dx,579+dy],[216+dx,578+dy,172+dx,616+dy],[128+dx,653.5+dy,128+dx,707.5+dy]]
        // return [[290+dx,650.5+dy],[332+dx,652+dy,351.5+dx,662.5+dy],[384+dx,680+dy,384+dx,727+dy],[384+dx,755+dy,357.5+dx,771+dy],[335.5+dx,785.5+dy,305.5+dx,785.5+dy],[199.5+dx,785.5+dy,201.5+dx,707.5+dy],[202+dx,685+dy,231+dx,667+dy],[260.5+dx,649.5+dy,290+dx,650.5+dy]]
      };
      function ringCoded(dx,dy){
        return codeList(ringRaw(dx,dy))
      };
      function ringYmax(y){return 785+y};


      function dotlessiRaw(){
        // "M 183 221.5 Q 183 192 184.5 134 Q 186.5 75.5 186.5 46 Q 186.5 24.5 173 11 Q 160 -2.5 138.5 -2.5 Q 117.5 -2.5 104 11 Q 90.5 24.5 90.5 46 Q 90.5 75.5 89 134 Q 87 192 87 221.5 Q 87 267.5 92 336 Q 97 404.5 97 450.5 Q 97 472.5 110.5 486 Q 124 500 145 500 Q 166 500 179 486 Q 192.5 472.5 192.5 450.5 Q 192.5 404.5 187.5 336 Q 183 267.5 183 221.5 Z"        // "M 183 221.5 Q 183 192 184.5 134 Q 186.5 75.5 186.5 46 Q 186.5 24.5 173 11 Q 160 -2.5 138.5 -2.5 Q 117.5 -2.5 104 11 Q 90.5 24.5 90.5 46 Q 90.5 75.5 89 134 Q 87 192 87 221.5 Q 87 267.5 92 336 Q 97 404.5 97 450.5 Q 97 472.5 110.5 486 Q 124 500 145 500 Q 166 500 179 486 Q 192.5 472.5 192.5 450.5 Q 192.5 404.5 187.5 336 Q 183 267.5 183 221.5 Z"
        return [[183,221.5],[183,192,184.5,134],[186.5,75.5,186.5,46],[186.5,24.5,173,11],[160,-2.5,138.5,-2.5],[117.5,-2.5,104,11],[90.5,24.5,90.5,46],[90.5,75.5,89,134],[87,192,87,221.5],[87,267.5,92,336],[97,404.5,97,450.5],[97,472.5,110.5,486],[124,499.5,145,499.5],[166,499.5,179,486],[192.5,472.5,192.5,450.5],[192.5,404.5,187.5,336],[183,267.5,183,221.5]]
      };
      function dotlessiCoded(){
        return codeList(dotlessiRaw())
      };
    }
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//  JURA  JURA  JURA
// 

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){

    return function(codeList){

      var font={reverseHoles:true,reverseShapes:false},nbsp=' ';

      font["a"]        = {
        sC             : [
                           'F&E¸ CgE¸B9EWB9C= B9AÄB½ABCÀAB ESAB F`ABGaA`H2B" H2A¯ H2A@H^A4HzA4 HµA4I?A>I?A© I?FH I?GwH·HFGiHF E9HF CUHFB9G¾B9Fn B9F"BcE¸B~E¸ C8E¸CEF<CEFn CEG%CwG9EGG9 GZG9 GÄG9H2G(H2Fh H2E¸'
                         ],
        hC             : [
                           ['H2D¬ H2C«G¸BNESBN CÀBN CyBNCEB|CEC4 CEDvC²D¬F&D¬']
                         ],
        xMin           : 59.5,
        xMax           : 510.5,
        yMin           : -7,
        yMax           : 450,
        wdth           : 580
      };
      font["b"]        = {
        sC             : [
                           'CbGe CbJP CbJ³CAK)B¹K) BpK)BTJ³BTJP BTA© BTA>B¤A4B½A4 CSA4CbA`CbA¯ CbB" D3AbE4ABFBAB F|AB I?ABJhA}JhCÀ JhEk JhG®I?HFF|HF FBHF E4HFD3H&CbGe'
                         ],
        hC             : [
                           ['FBG9 F|G9 H¯G9IZG(IZEe IZD" IZBaH¯BNF|BN FBBN D"BNCbC`CbD¢ CbDª CbF)D"G9FBG9']
                         ],
        xMin           : 73,
        xMax           : 594.5,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 654
      };
      font["c"]        = {
        sC             : [
                           'H:AB IwABI´B;I´C. I´CoIwC«IKC« I/C«H§CyH§C4 H§BgHtBNH,BN F&BN C²BNCEBcCED" CEEe CEG%C²G9F&G9 H,G9 HtG9H§G!H§FT H§E²I/E£IKE£ IgE£I´E®I´FX I´GKIwHFH:HF F&HF CbHFB9G®B9Ek B9CÀ B9A}CbABF&AB'
                         ],
        xMin           : 59.5,
        xMax           : 551.5,
        yMin           : 0,
        yMax           : 450,
        wdth           : 609
      };
      font["d"]        = {
        sC             : [
                           'B9Ek B9CÀ B9A}CbABF$AB F^AB GmABHnAbI?B" I?A¯ I?A`IMA4I¨A4 IÂA4JLA>JLA© JLJQ JLJ}J>K)I¬K) IoK)I?JÃI?JQ I?HF E¸HF CbHFB9G®B9Ek'
                         ],
        hC             : [
                           ['CED" CEEe CEG(C¶G9E¸G9 I?G9 I?D¤ I?C`H~BNF^BN F$BN C¶BNCEBaCED"']
                         ],
        xMin           : 59.5,
        xMax           : 581,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 654
      };
      font["e"]        = {
        sC             : [
                           'JLEk JLG®I#HFF`HF F&HF CbHFB9G®B9Ek B9CÀ B9A}CbABF&AB HbAB IÀABJ8B;J8C. J8CoIÀC«IsC« IVC«I+CyI+C4 I+BgH½BNHTBN F&BN C²BNCEBcCED" CED¯ JLD¯'
                         ],
        hC             : [
                           ['F`G9 H^G9I5G*I?E¼ CEE¼ CMG!C¶G9F&G9']
                         ],
        xMin           : 59.5,
        xMax           : 581,
        yMin           : 0,
        yMax           : 450,
        wdth           : 635.5
      };
      font["f"]        = {
        sC             : [
                           'E´I² F>I²FlIÀFlJQ FlJ}FPJ¿E´J¿ C´J¿BjJhB_HD B9H>AÄH+AÄGª AÄGaB7GKB_GC B_A« B_A@B¨A4BÃA4 CYA4CkA^CkA« CkG9 EeG9 F2G9F>GaF>G} F>H&F$HFEeHF CkHF CqI¢DFI²E´I²'
                         ],
        xMin           : 47.5,
        xMax           : 340.5,
        yMin           : -7,
        yMax           : 621,
        wdth           : 336.5
      };
      font["g"]        = {
        sC             : [
                           'JL@+ JLG¥ JLHJIÂHTI¨HT IMHTI?H)I?G} I?Ge HnH&GmHFF^HF F$HF CbHFB9G®B9Ek B9CÀ B9A}CbABEÄAB I?AB I??¯ I??KI5?>Hz?> CÀ?> CW?>CE?UCE@" CE@aC*@xB¢@x Be@xB9@mB9?Â B9?,BT>1C²>1 H©>1 J$>1JL>¤JL@+'
                         ],
        hC             : [
                           ['EÄBN C¶BNCEBaCED" CEEe CEG(C¶G9F$G9 F^G9 H~G9I?F)I?D¬ I?BN']
                         ],
        xMin           : 59.5,
        xMax           : 581,
        yMin           : -200.5,
        yMax           : 457,
        wdth           : 654
      };
      font["h"]        = {
        sC             : [
                           'FBG9 F|G9 H¯G9IZG(IZEe IZA© IZAEI¢A4J"A4 JYA4JhA^JhA© JhEk JhG®I?HFF|HF FBHF E4HFD3H&CbGe CbJP CbJ³CAK)B¹K) BpK)BTJ³BTJP BTA© BTA>B¤A4B½A4 CKA4CbASCbA© CbD¤ CbF$D"G9FBG9'
                         ],
        xMin           : 73,
        xMax           : 594.5,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 663
      };
      font["i"]        = {
        sC             : [
                           'B¹Iu CEIuC±I¾C±JW C±J¹CCK;B¹K; BcK;AÂJ·AÂJW AÂI¼BjIuB¹Iu',
                           'BPGÀ BPAj BPA%Bz@ºB·@º CM@ºC^A@C^Aj C^GÀ C^HbC2HrB¹Hr B|HrBPHbBPGÀ'
                         ],
        xMin           : 46.5,
        xMax           : 166,
        yMin           : -21.5,
        yMax           : 636.5,
        wdth           : 212.5
      };
      font["j"]        = {
        sC             : [
                           'CbAB CbG{ CbH)CSHTB¿HT BcHTBTH)BTG{ BTAB BT?¯A­?y@-?y ?}?y?S?j?S?4 ?S>¬?n>m@->m B5>mCb>¾CbAB',
                           'B½Iu CIIuC´I¾C´JW C´J¹CGK;B½K; BgK;B"J·B"JW B"I¼BnIuB½Iu'
                         ],
        xMin           : -119.5,
        xMax           : 167.5,
        yMin           : -171,
        yMax           : 636.5,
        wdth           : 216.5
      };
      font["k"]        = {
        sC             : [
                           'HpAw HpA«HhB"HTB1 DnEC GCGU GaGkGcG¦GcG° GcH4G?HPFÁHP F¨HPFnH@F`H4 CbEi CbJU CbJ½C6K)B½K) B¢K)BTJ½BTJU BTA£ BTACB|A4B»A4 C:A4CbACCbA© CbDa C©D¨ GqAQ G¡AEG¶A6H,A6 HTA6HpAYHpAw'
                         ],
        xMin           : 73,
        xMax           : 470.5,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 484
      };
      font["l"]        = {
        sC             : [
                           'DXAB E#ABE0AlE0A© E0B@D¬BNDXBN C´BNC£BcC£C( C£JQ C£J¡CsK)C:K) BÁK)BtJÁBtJQ BtCE BtA¸BÁABDJAB'
                         ],
        xMin           : 88.5,
        xMax           : 247,
        yMin           : 0,
        yMax           : 627.5,
        wdth           : 287
      };
      font["m"]        = {
        sC             : [
                           'EQG9 F±G9GMG(GMEe GMA© GMAIGkA4GºA4 HPA4H^AYH^A© H^D¤ H^FNI=G9JYG9 K¶G9LMG*LMEe LMA© LMA>L{A4L·A4 M-A4MZA>MZA© MZEk MZG®LDHFJYHF I_HFHxG¶H0G; GoH0FhHFEQHF DaHFCÂH+C`Gk C`G{ C`H8C?HTB·HT BzHTBRHHBRG£ BRA© BRA>B¢A4B»A4 CIA4C`ASC`A© C`D¤ C`FPD7G9EQG9'
                         ],
        xMin           : 72,
        xMax           : 780,
        yMin           : -7,
        yMax           : 457,
        wdth           : 848.5
      };
      font["n"]        = {
        sC             : [
                           'F@G9 FzG9 H­G9IXG(IXEe IXA© IXAEI~A4IÄA4 JWA4JfA^JfA© JfEk JfG®I=HFFzHF F@HF E2HFD1H&C`Ge C`G{ C`H8C?HTB·HT BzHTBRHHBRG£ BRA© BRA>B¢A4B»A4 CIA4C`ASC`A© C`D¤ C`F$CÄG9F@G9'
                         ],
        xMin           : 72,
        xMax           : 593.5,
        yMin           : -7,
        yMax           : 457,
        wdth           : 662
      };
      font["o"]        = {
        sC             : [
                           'F`AB I#ABJLA}JLCÀ JLEk JLG®I#HFF`HF F&HF CbHFB9G®B9Ek B9CÀ B9A}CbABF&AB'
                         ],
        hC             : [
                           ['F&BN C²BNCEBcCED" CEEe CEG%C²G9F&G9 F`G9 HrG9I?G(I?Ee I?D" I?BaHrBNF`BN']
                         ],
        xMin           : 59.5,
        xMax           : 581,
        yMin           : 0,
        yMax           : 450,
        wdth           : 640.5
      };
      font["p"]        = {
        sC             : [
                           'JhCÀ JhEk JhG®I?HFF|HF FBHF E4HFD3H&CbGe CbG} CbH)CSHTB½HT B¤HTBTHJBTG¥ BT?6 BT>®Bc>_B¹>_ C2>_Cb>iCb?6 CbAB F¤AB I?ABJhA}JhCÀ'
                         ],
        hC             : [
                           ['IZEe IZD" IZBaH¯BNF¤BN CbBN CbDª CbF)D"G9FBG9 F|G9 H¯G9IZG(IZEe']
                         ],
        xMin           : 73,
        xMax           : 594.5,
        yMin           : -178,
        yMax           : 457,
        wdth           : 654
      };
      font["q"]        = {
        sC             : [
                           'B9CÀ B9A}CbABEÄAB I?AB I??6 I?>mIo>_I¬>_ J>>_JL>®JL?6 JLG¥ JLHJIÂHTI¨HT IkHTI?HHI?G} I?Ge HnH)GmHFF`HF F&HF CbHFB9G®B9Ek'
                         ],
        hC             : [
                           ['CEEe CEG%C²G9F&G9 F`G9 H~G9I?F&I?Dª I?BN EÄBN C¶BNCEBaCED"']
                         ],
        xMin           : 59.5,
        xMax           : 581,
        yMin           : -178,
        yMax           : 457,
        wdth           : 654
      };
      font["r"]        = {
        sC             : [
                           'E©G9 F`G9 F«G9G7GGG7G£ G7H+FÁHFF`HF E©HF D»HFD/H&C`Ge C`G{ C`H8C?HTB·HT BzHTBRHHBRG£ BRA© BRA>B¢A4B»A4 CIA4C`ASC`A© C`D¤ C`FJDBG9E©G9'
                         ],
        xMin           : 72,
        xMax           : 378.5,
        yMin           : -7,
        yMax           : 457,
        wdth           : 396
      };
      font["s"]        = {
        sC             : [
                           'C±AB GKAB IMABI¶B)I¶CC I¶DHIXEUG¨EU D"EU CoEUCCE}CCFN CCFÁCgG9D"G9 H+G9 HrG9H¥G!H¥FT H¥E²I-E£IIE£ IeE£I²E®I²FX I²GKIuHFH8HF D¤HF BzHFB7GcB7FN B7E=B¤DHDFDH H&DH H`DHH©C²H©CC H©BnH`BNH&BN C¾BN CUBNCCBgCCC4 CCCqC(C«B~C« BRC«B7CoB7C. B7B;BRABC±AB'
                         ],
        xMin           : 58.5,
        xMax           : 552.5,
        yMin           : 0,
        yMax           : 450,
        wdth           : 610
      };
      font["t"]        = {
        sC             : [
                           'CkD" CkG9 EeG9 F2G9F>GaF>G} F>H&F"HFEeHF CkHF CkI~ CkJ>CKJWBÃJW BzJWB_J>B_I~ B_HD B9H>AÄH+AÄGª AÄGaB7GIB_GC B_CÀ B_A¡C©ABE´AB F`ABFjAqFjA¯ FjB@F<BNE´BN D<BNCkBaCkD"'
                         ],
        xMin           : 47.5,
        xMax           : 339.5,
        yMin           : 0,
        yMax           : 586.5,
        wdth           : 364
      };
      font["u"]        = {
        sC             : [
                           'FpBN F6BN D$BNCWBaCWD" CWG¥ CWHBC2HTB²HT BXHTBJH+BJG¥ BJCÀ BJA}CsABF6AB FpAB G¡ABH¢AbIQB" IQA± IQAMIqA4I¾A4 J6A4J^A@J^A« J^G¥ J^HJJ0HTIºHT IgHTIQH4IQG¥ IQDª IICmH¹BNFpBN'
                         ],
        xMin           : 68,
        xMax           : 589.5,
        yMin           : -7,
        yMax           : 457,
        wdth           : 662
      };
      font["v"]        = {
        sC             : [
                           'DdAB EÀAB HµG° H½GÂH½H)H½H0 H½HdHxHrHWHr H:HrGÂHdG°H< EEBV B¬H: B¢HNBlHrB>Hr B"HrA}HdA}H. A}H)A}GÄA§G°'
                         ],
        xMin           : 29,
        xMax           : 492,
        yMin           : 0,
        yMax           : 471.5,
        wdth           : 520.5
      };
      font["w"]        = {
        sC             : [
                           'MZG¡ McG¸McG¼McGÄ McHRMAH^LÂH^ L¥H^LhHRLUH& JNBF H@GÀ H2HBGÂHRGuHR GGHRG1H@G#GÀ D®BF B°H& B|HRBaH^BBH^ AÄH^A£HRA£GÄ A£G¼A£G¸A«G¡ D)AB E`AB GsFv IoAB K&AB'
                         ],
        xMin           : 31,
        xMax           : 784,
        yMin           : 0,
        yMax           : 461.5,
        wdth           : 814
      };
      font["x"]        = {
        sC             : [
                           'I/Aj I/A¯H¿AÂH»B" FJD¦ H»Ge I-G£I/G´I/GÀ I/HBH­H[HlH[ HRH[H>HVH,HD EeE[ B½HD B°HRBtH[BZH[ B;H[A¸HBA¸GÀ A¸G´AºG£B-Ge D|D¦ B-B" B$A¾A¸A©A¸Aj A¸ACB=A,BZA, BtA,B®A4B½AC EeD- H,AC H:A6HRA,HlA, H«A,I/ACI/Aj'
                         ],
        xMin           : 41.5,
        xMax           : 502.5,
        yMin           : -11,
        yMax           : 460.5,
        wdth           : 544.5
      };
      font["y"]        = {
        sC             : [
                           'J^@+ J^G¥ J^HJJ0HTIºHT IgHTIQH4IQG¥ IQDª IQCmH¹BNFpBN F6BN D$BNCWBaCWD" CWG¥ CWHBC2HTB²HT BXHTBJH+BJG¥ BJCÀ BJA}CsABF6AB FpAB G¡ABH¢AbIQB" IQ?¯ IQ?KIG?>H­?> D/?> Ci?>CW?UCW@" CW@aC;@xB´@x Bv@xBJ@mBJ?Â BJ?,Bg>1CÄ>1 H»>1 J6>1J^>¤J^@+'
                         ],
        xMin           : 68,
        xMax           : 589.5,
        yMin           : -200.5,
        yMax           : 457,
        wdth           : 663
      };
      font["z"]        = {
        sC             : [
                           'C¡BN I;G/ I;HF C±HF BcHFB7GsB7F6 B7EkBaE^B|E^ C4E^CCE£CCF6 CCF½COG9C¾G9 G{G9 B7BR B7AB G°AB I9ABIeA¼IeCQ IeCÂI7D+HÁD+ HtD+HWC´HWCQ HWB|HRBNG¡BN'
                         ],
        xMin           : 58.5,
        xMax           : 529,
        yMin           : 0,
        yMax           : 450,
        wdth           : 580
      };
      font["A"]        = {
        sC             : [
                           'FfJ¿ EEJ¿ AwA­ AsA¡AqAqAqAf AqA0B$A!B7A! BTA!BpA6B¢AY C©D3 H$D3 I+AY I5A@IQA!IuA! IªA!J:A0J:Af J:AqJ8A¡J4A­'
                         ],
        hC             : [
                           ['D>E? E¶IQ GmE?']
                         ],
        xMin           : 23,
        xMax           : 572,
        yMin           : -16,
        yMax           : 621,
        wdth           : 595.5
      };
      font["B"]        = {
        sC             : [
                           'BgAº BgAmBtABC(AB FRAB H¹ABJ>A}J>D) J>DN J>E§I¢F]HÁF¯ ITG?ImG®ImHb ImJ`H>J¿EºJ¿ C(J¿ B°J¿BgJ³BgJF'
                         ],
        hC             : [
                           ['FvF" HbF"I1E²I1DH I1D) I1BeHbBNFRBN CsBN CsF"','EºG/ CsG/ CsI¨ EºI¨ GªI¨H`ImH`H[ H`GKG®G/EºG/']
                         ],
        xMin           : 82,
        xMax           : 574,
        yMin           : 0,
        yMax           : 621,
        wdth           : 628.5
      };
      font["C"]        = {
        sC             : [
                           'HNAB I¬ABJ$B;J$C. J$CoI¬C«I_C« ICC«H»CyH»C4 H»BgH©BNH@BN F:BN D&BNCYBcCYD- CYH0 CYI}D+I²EºI² H@I² H©I²H»IyH»I) H»HfICHVI_HV I{HVJ$HbJ$I- J$J"I¬J¿HNJ¿ EºJ¿ CwJ¿BLJbBLH4 BLD) BLA}CuABF:AB'
                         ],
        xMin           : 69,
        xMax           : 561.5,
        yMin           : 0,
        yMax           : 621,
        wdth           : 616
      };
      font["D"]        = {
        sC             : [
                           'J>H4 J>JbH·J¿FvJ¿ C(J¿ B°J¿BgJ³BgJF BgAº BgAmBtABC(AB FRAB H¹ABJ>A}J>D)'
                         ],
        hC             : [
                           ['I1D- I1BcHdBNFRBN CsBN CsI² FvI² HbI²I1I}I1H0']
                         ],
        xMin           : 82,
        xMax           : 574,
        yMin           : 0,
        yMax           : 621,
        wdth           : 643.5
      };
      font["E"]        = {
        sC             : [
                           'CsF6 GyF6 H.F6HYFDHYFz HYG#H>GCGyGC CsGC CsI² IiI² I¼I²J>IÀJ>JQ J>J}J$J¿IiJ¿ C(J¿ B°J¿BgJ³BgJF BgAº BgAYB¤ABC(AB IiAB I¼ABJ>AOJ>A§ J>B/J$BNIiBN CsBN'
                         ],
        xMin           : 82,
        xMax           : 574,
        yMin           : 0,
        yMax           : 621,
        wdth           : 621
      };
      font["F"]        = {
        sC             : [
                           'CsA© CsF6 GyF6 H.F6HYFDHYFz HYG#H>GCGyGC CsGC CsI² IiI² I¼I²J>IÀJ>JQ J>J}J$J¿IiJ¿ C(J¿ B°J¿BgJ³BgJF BgA« BgA^BvA4C,A4 C^A4CsASCsA©'
                         ],
        xMin           : 82,
        xMax           : 574,
        yMin           : -7,
        yMax           : 621,
        wdth           : 600.5
      };
      font["G"]        = {
        sC             : [
                           'H»D± H»C, H»BcH©BNH@BN EºBN D)BNCYBcCYD) CYH4 CYI{D)I²F:I² H@I² H©I²H»I{H»I+ H»HpI5HVI_HV I¬HVJ$HpJ$I/ J$J"I¬J¿HNJ¿ F:J¿ CyJ¿BLJhBLH: BLD" BLA{CuABEºAB HNAB I¬ABJ$B5J$C! J$E¾ FÃE¾ FfE¾F>E®F>ES F>E*F^D±FÃD±'
                         ],
        xMin           : 69,
        xMax           : 561.5,
        yMin           : 0,
        yMax           : 621,
        wdth           : 629.5
      };
      font["H"]        = {
        sC             : [
                           'CsA© CsE¼ I1E¼ I1A© I1AEIVA4I{A4 J0A4J>A^J>A© J>JU J>J·IÂK)IwK) I?K)I1J¡I1JU I1G% CsG% CsJU CsJ¥C`K)C(K) B°K)BgJÁBgJU BgA© BgA>BµA4C,A4 C^A4CsASCsA©'
                         ],
        xMin           : 82,
        xMax           : 574,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 656
      };
      font["I"]        = {
        sC             : [
                           'CsA¥ CsJY CsJ¿CGK)C,K) B´K)BgJ¿BgJY BgA¥ BgABB²A4C*A4 CdA4CsA^CsA¥'
                         ],
        xMin           : 82,
        xMax           : 152,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 234
      };
      font["J"]        = {
        sC             : [
                           'EUB> C`B>B´BTB´D$ B´DVBvDzBLDz AÀDzA¥DZA¥D$ A¥AlC,A2EUA2 G¡A2I%AlI%C¶ I%JY I%J¿H|K)H`K) H@K)G¼J»G¼J[ G¼C¼ G¼BTGIB>EUB>'
                         ],
        xMin           : 32,
        xMax           : 498,
        yMin           : -8,
        yMax           : 627.5,
        wdth           : 577
      };
      font["K"]        = {
        sC             : [
                           'I}Aw I}A¯IqAÀIcB- E,Fv HbJ0 HxJJHzJdHzJj HzJ³HTK)H4K) G¼K)G¨J»GuJ§ CsFf CsJU CsJ½CGK)C,K) B´K)BgJ¿BgJY BgA¥ BgABB²A4C*A4 CKA4CsACCsA© CsEE DFF+ HvAY H©ACH½A4I5A4 IQA4I}AOI}Aw'
                         ],
        xMin           : 82,
        xMax           : 541,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 546.5
      };
      font["L"]        = {
        sC             : [
                           'C(AB H~AB ICABIQAlIQA© IQB-I9BNH~BN CsBN CsJ[ CsJ»CKK)C,K) B°K)BgJ»BgJ[ BgA¸ BgAMB°ABC(AB'
                         ],
        xMin           : 82,
        xMax           : 519.5,
        yMin           : 0,
        yMax           : 627.5,
        wdth           : 541
      };
      font["M"]        = {
        sC             : [
                           'FfEc F©EcF»EwF¿E{ IZI? IZA¯ IZAMIwA4IÂA4 JHA4JhAKJhA© JhJU JhJµJLK)J"K) I¨K)IoJ»IZJ} FfFv CsJ} C^J¿CEK)C(K) B°K)BgJÁBgJU BgA© BgA>BµA4C,A4 CfA4CsA`CsA¯ CsI? F1E{ F6EuFFEcFfEc'
                         ],
        xMin           : 82,
        xMax           : 594.5,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 676.5
      };
      font["N"]        = {
        sC             : [
                           'I{A4 J0A4J>A^J>A© J>JU J>J·IÂK)IwK) IZK)I1J¿I1JP I1C( CsJ} C^J¿CEK)C(K) B°K)BgJÁBgJU BgA© BgA>BµA4C,A4 CfA4CsAWCsA£ CsI3 ICAB IIA:IaA4I{A4'
                         ],
        xMin           : 82,
        xMax           : 574,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 656
      };
      font["O"]        = {
        sC             : [
                           'F+A0 HLA0IºB]IºD¦ IºGZ IºI¤HLK-F+K- C«K-B>I¤B>GZ B>D¦ B>B]C«A0F+A0'
                         ],
        hC             : [
                           ['F+IÄ GºIÄH­I#H­GU H­D¬ H­C6G¶B=F+B= DBB=CKC6CKD¬ CKGU CKI#D>IÄF+IÄ']
                         ],
        xMin           : 62,
        xMax           : 554.5,
        yMin           : -9,
        yMax           : 629.5,
        wdth           : 617
      };
      font["P"]        = {
        sC             : [
                           'CsA¥ CsF6 F|F6 HfF6ImG%ImHp ImJjH>K$EÀK$ C(K$ B°K$BgJ½BgJP BgA¥ BgABB²A4C*A4 CdA4CsA^CsA¥'
                         ],
        hC             : [
                           ['EÀGC CsGC CsI¼ EÀI¼ G°I¼H`I¢H`Hp H`GeGÄGCEÀGC']
                         ],
        xMin           : 82,
        xMax           : 533,
        yMin           : -7,
        yMax           : 625.5,
        wdth           : 566
      };
      font["Q"]        = {
        sC             : [
                           'F+A0 FÁA0G¬AIHWAy H³A@ I!A0I;A*IOA* IwA*I´AOI´Am I´A©I¦A¾IwB) I?B] IyC%IºC¯IºD¦ IºGZ IºI¤HLK-F+K- C«K-B>I¤B>GZ B>D¦ B>B]C«A0F+A0'
                         ],
        hC             : [
                           ['F+IÄ GºIÄH­I#H­GU H­D¬ H­D7HxCsHWC? G¡C´ GaD-GGD3G7D3 F«D3FlC±FlCm FlCWF¢C=F±C4 GoBe G;BJFzB=F+B= DBB=CKC6CKD¬ CKGU CKI#D>IÄF+IÄ']
                         ],
        xMin           : 62,
        xMax           : 554.5,
        yMin           : -12,
        yMax           : 629.5,
        wdth           : 617
      };
      font["R"]        = {
        sC             : [
                           'G¼FR H¿FxImGZImHv ImJtH>K/EºK/ C(K/ B°K/BgK"BgJY BgA¥ BgABB²A4C*A4 CdA4CsA^CsA¥ CsF6 F^F6 GºE2HnB"HpA¥ HrAbH¥A4I3A4 I_A4I}AYI}A¥ I}AÀI!E,G¼FR'
                         ],
        hC             : [
                           ['CsI¼ EºI¼ G¦I¼H`I¦H`Hp H`G]G®GCEºGC CsGC']
                         ],
        xMin           : 82,
        xMax           : 541,
        yMin           : -7,
        yMax           : 630.5,
        wdth           : 594.5
      };
      font["S"]        = {
        sC             : [
                           'CEHb CEI#CiIÂDµIÂ FbIÂ HxIÂIAI°IAH< IAG®I]GiIªGi J$GiJPG{JPH< JPJxI!K+FbK+ EMK+ B®K+B9I~B9Hh B9G5B¤FRDHF+ H^EG H|E?ICD¨ICC£ ICC;I!B>G¬B> F"B> C¶B>CGBTCGD$ CGDVC,DzB¦Dz BTDzB9DZB9D$ B9AjCkA2F"A2 G_A2 I¢A2JPBaJPC{ JPD±I¶F+HDFR D+G1 CuG?CEG¨CEHb'
                         ],
        xMin           : 59.5,
        xMax           : 583,
        yMin           : -8,
        yMax           : 628.5,
        wdth           : 642.5
      };
      font["T"]        = {
        sC             : [
                           'H0J¿ BHJ¿ A§J¿AuJrAuJU AuJ:A§I²BHI² DnI² DnA¥ DnACD½A4E;A4 E^A4E²ACE²A¥ E²I² H0I² HxI²H§J8H§JS H§J{HnJ¿H0J¿'
                         ],
        xMin           : 25,
        xMax           : 481,
        yMin           : -7,
        yMax           : 621,
        wdth           : 507.5
      };
      font["U"]        = {
        sC             : [
                           'I#J[ I#D¬ I#C6H,B=FDB= D]B=CfC6CfD¬ CfJ[ CfJ»C=K)BÁK) B¦K)BXJ¿BXJY BXD¦ BXB]CÄA0FDA0 HfA0J0B]J0D¦ J0JY J0J¿IªK)ImK) IMK)I#J½I#J['
                         ],
        xMin           : 75,
        xMax           : 567,
        yMin           : -9,
        yMax           : 627.5,
        wdth           : 642.5
      };
      font["V"]        = {
        sC             : [
                           'I+J§ EºB° B¢J§ BvJÁBZK;B7K; B"K;AqK-AqJz AqJnAsJ`AwJS EEAB FfAB J4JS J8J`J:JnJ:Jz J:K-I¨K;IuK; IVK;I;K&I+J§'
                         ],
        xMin           : 23,
        xMax           : 572,
        yMin           : 0,
        yMax           : 636.5,
        wdth           : 595.5
      };
      font["W"]        = {
        sC             : [
                           'K°B~ I9J{ I)K+H©K;HfK; HPK;H&K-G¸J} ECB~ B¦J© BvK3BVK=B9K= A«K=AwK$AwJ£ AwJzAwJvA¡J^ D|AB E¬AB HfIO KCAB LSAB ONJU OVJnOVJrOVJz OVJ³OPK5N·K5 NwK5NWK)NIJ¡'
                         ],
        xMin           : 26,
        xMax           : 906,
        yMin           : 0,
        yMax           : 637.5,
        wdth           : 932.5
      };
      font["X"]        = {
        sC             : [
                           'IMK) I/K)H¿J·H¯J¡ E²F­ B·J¡ BªJµBtK)BRK) BBK)A±JÁA±Jd A±J[A³JHAÄJ2 E2F- AÄB) AµA¸A±A§A±Au A±AKB5A4BRA4 BnA4B¨AEB·A[ E²EQ H¯A[ H½AII-A4IMA4 IkA4I¶AGI¶Au I¶A§I²A¸I¢B) FpF- I¢J2 I´JJI¶J[I¶Jd I¶J¿IcK)IMK)'
                         ],
        xMin           : 38,
        xMax           : 552.5,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 590.5
      };
      font["Y"]        = {
        sC             : [
                           'D¿Eº D¿A£ D¿AEECA4EgA4 F$A4F2A`F2A£ F2Eº ITJ4 I]JBIiJQIiJh IiJ³I?K)I#K) HµK)H~JÃHbJ¡ EgF­ BjJ¡ BZJ·BFK)B)K) A­K)AfJ±AfJh AfJQAqJBAyJ4'
                         ],
        xMin           : 17.5,
        xMax           : 531,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 549.5
      };
      font["Z"]        = {
        sC             : [
                           'B"AB I!AB IoABI{AlI{A© I{B@ISBNI!BN C[BN I{I¼ I{J¿ B|J¿ B;J¿AÄJ£AÄJU AÄIÀBHI²B|I² HFI² B"B>'
                         ],
        xMin           : 47.5,
        xMax           : 540,
        yMin           : 0,
        yMax           : 621,
        wdth           : 587.5
      };
      font["0"]        = {
        sC             : [
                           'J.Cw J.Hh J.J$H±K$G3K$ EQK$ CwK$BVJ$BVHh BVCw BVB9CwA8EQA8 G3A8 H±A8J.B9J.Cw'
                         ],
        hC             : [
                           ['CdH£ CdIAD5IºE;Iº GIIº HPIºI!IAI!H£ I!C[ I!B½HPBDGIBD E;BD D5BDCdB½CdC[']
                         ],
        xMin           : 74,
        xMax           : 566,
        yMin           : -5,
        yMax           : 625.5,
        wdth           : 640.5
      };
      font["1"]        = {
        sC             : [
                           'C#I¼ C#A¥ C#A^C4A4CkA4 CÄA4D1A^D1A¥ D1K1 D1KkC£K|CiK| CMK|C:KqC%K_ B/Jj A±JJA¯J4A¯J% A¯I¶A¼ImBNIm BcImB|IuB·I®'
                         ],
        xMin           : 37,
        xMax           : 183.5,
        yMin           : -7,
        yMax           : 668.5,
        wdth           : 269.5
      };
      font["2"]        = {
        sC             : [
                           'I¸H< I¸JlHnK$FLK$ C¶K$ B¦K$B>JfB>I7 B>HnBiH`B¦H` C=H`CKH©CKI7 CKI¨C^I¼CÄI¼ FLI¼ H6I¼H«I¨H«H8 H«F)B>EºB>B& B>A8 I=A8 I¬A8I¸AbI¸A} I¸B7IoBDI=BD CKBD CqE?I¸E^I¸H<'
                         ],
        xMin           : 62,
        xMax           : 553.5,
        yMin           : -5,
        yMax           : 625.5,
        wdth           : 614
      };
      font["3"]        = {
        sC             : [
                           'F¤I¼ HYI¼H«IIH«HP H«GUG5F¨EÀF¨ EaF¨E5FxE5F> E5E©E`EwEÀEw G*EwH«D±H«C´ H«B¹HYBDF¤BD EMBD DFBDCGBvCGC* CGCgC,C¡B¤C¡ BVC¡B;CfB;C# B;B+CGA8E?A8 FhA8 HÃA8I¶AÄI¶D3 I¶DµH³E°H6F> H±FjI¶GMI¶H+ I¶J<HÃK$FhK$ E?K$ CGK$B;J2B;I7 B;HlBgH`B¤H` C,H`CGHxCGI3 CGIiDJI¼EMI¼'
                         ],
        xMin           : 60.5,
        xMax           : 552.5,
        yMin           : -5,
        yMax           : 625.5,
        wdth           : 621
      };
      font["4"]        = {
        sC             : [
                           'HµC{ I7C{IeC«IeD@ IeDzI7DªHµDª H8Dª H8K$ F·K$ A§D¯ A§C{ G#C{ G#A£ G#AMGGA4GsA4 G°A4H8A@H8A£ H8C{'
                         ],
        hC             : [
                           ['G#Dª C#Dª G#Iu']
                         ],
        xMin           : 33,
        xMax           : 529,
        yMin           : -7,
        yMax           : 625.5,
        wdth           : 563
      };
      font["5"]        = {
        sC             : [
                           'B¢CU BeCUB=C8B=B² B=AÂDjA0E¸A0 H6A0I¤B_I¤D¬ I¤F»GÀH.F:H. C`H. CkI? CsIªC±I¼D@I¼ H^I¼ HÃI¼I/JBI/J^ I/J¡HÃK$H^K$ DPK$ C0K$BiJfBZI! BHG! FLG! G;G!HvFbHvD¬ HvC;G¦B=E¸B= D-B=C0CUB¢CU'
                         ],
        xMin           : 61.5,
        xMax           : 543.5,
        yMin           : -9,
        yMax           : 625.5,
        wdth           : 593.5
      };
      font["6"]        = {
        sC             : [
                           'B"Dc B"BeCkA0E²A0 H2A0I}BeI}Dd I}FfH2G¼E²G¼ E#G¼D>G£CqGQ D<H§EEIsF8J$ FHJ,FtJBFtJl FtJµFTK+EÂK+ ECK+B"I+B"Dc'
                         ],
        hC             : [
                           ['C0Dd C0E¸D)F¯E²F¯ GwF¯HpE¸HpDd HpC2GuB=E²B= D+B=C0C2C0Dd']
                         ],
        xMin           : 48.5,
        xMax           : 541,
        yMin           : -9,
        yMax           : 628.5,
        wdth           : 580
      };
      font["7"]        = {
        sC             : [
                           'DÃA. EMA.EcAUEmAm I)JB I/JWI1JhI1Jp I1J³HÃK/HlK/ CSK/ BBK/A}JpA}IA A}HvB&HjBBHj B|HjB¬H·B¬IA B¬I®B½J"CdJ" G¬J" DZAÀ DTAµDLA¥DLAo DLA<D¦A.DÃA.'
                         ],
        xMin           : 29,
        xMax           : 503.5,
        yMin           : -10,
        yMax           : 630.5,
        wdth           : 527
      };
      font["8"]        = {
        sC             : [
                           'J(CÀ J(D»I°E}I=F> IªFrJ(GQJ(HT J(J±HlK$F`K$ E¾K$ C±K$BPJ±BPHT BPGQBtFtC=F> BpE£BPD¿BPCÀ BPAoC}A8E¾A8 F`A8 H£A8J(AqJ(CÀ'
                         ],
        hC             : [
                           ['C^CÄ C^EiD/E}E¾E} F`E} HLE}H¿EiH¿CÄ H¿BVHLBDF`BD E¾BD D+BDC^BXC^CÄ','H¿HP H¿F­HTF«F`F« E¾F« D)F«C^F¯C^HP C^I¼D+I¼EºI¼ F`I¼ HVI¼H¿IºH¿HP']
                         ],
        xMin           : 71,
        xMax           : 563,
        yMin           : -5,
        yMax           : 625.5,
        wdth           : 634.5
      };
      font["9"]        = {
        sC             : [
                           'A·HP A·E¶DfE}F"E} F±E}GqE«H:F) GUC=D¿B1CwB1 C6B1C%A©C%Al C%AGC:A!CwA! FxA!ImC¾ImHP ImJbG¼K$F"K$ D¦K$A·J¯A·HP'
                         ],
        hC             : [
                           ['F"I¼ GºI¼H`IIH`HP H`GYGÂF«F"F« DlF«BÃF½BÃHP BÃI¨D¦I¼F"I¼']
                         ],
        xMin           : 41,
        xMax           : 533,
        yMin           : -16,
        yMax           : 625.5,
        wdth           : 581
      };
      font["!"]        = {
        sC             : [
                           'C©DB C©Jv C©K9C[KIC?KI C#KIBzK9BzJv BzDB BzC}C!CoC=Co CfCoC©C©C©DB',
                           'C?B_ B´B_BHB7BHA{ BHA<Bµ@ºC?@º Cu@ºD8A>D8A{ D8B;CmB_C?B_'
                         ],
        xMin           : 67,
        xMax           : 187,
        yMin           : -21.5,
        yMax           : 643.5,
        wdth           : 253.5
      };
      font["|"]        = {
        sC             : [
                           'CmA¥ CmJY CmJ¿CAK)C%K) B®K)BaJ¿BaJY BaA¥ BaABB¬A4C#A4 C^A4CmA^CmA¥'
                         ],
        xMin           : 79,
        xMax           : 149,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 229
      };
      font['"']        = {
        sC             : [
                           'BLJt BLHP BLG¬BvG}B´G} C,G}CWG®CWHP CWJt CWK9C.KGBµKG BxKGBLK7BLJt',
                           'C´Jt C´HP C´G¬D:G}DVG} D~G}DÁG¶DÁHP DÁJt DÁK7DtKGDXKG D<KGC´K7C´Jt'
                         ],
        xMin           : 69,
        xMax           : 238,
        yMin           : 413,
        yMax           : 642.5,
        wdth           : 306.5
      };
      font["'"]        = {
        sC             : [
                           'BLJt BLHP BLG¬BvG}B´G} C,G}CWG®CWHP CWJt CWK9C.KGBµKG BxKGBLK7BLJt'
                         ],
        xMin           : 69,
        xMax           : 138.5,
        yMin           : 413,
        yMax           : 642.5,
        wdth           : 207
      };
      font["#"]        = {
        sC             : [
                           'EºH) F¢J8 F¨JHF¨JWF¨J` F¨J©FjK"F>K" E¾K"E¥J©EyJj D¨H) C#H) BcH)BRG£BRGe BRG,B|F¿C#F¿ DRF¿ C¥EA BjEA B$EAA¸D¹A¸D| A¸DaB$D5BjD5 COD5 BjB$ BgA¸BeA©BeA¡ BeAUB¤A:C(A: CSA:CfA[CqAu DdD5 F-D5 EEB& EAAºE?A±E?A£ E?AUE^A:E©A: F1A:FBA[FNAu GAD5 H½D5 IaD5IoD_IoDz IoDÃIVEAH½EA GuEA HDF¿ IVF¿ I¾F¿J*GGJ*Gc J*G¡I¾H)IVH) HxH) I]J6 IaJFIcJPIcJ^ IcJ£IGK"H¿K" HrK"H^J£HTJj GaH)'
                         ],
        hC             : [
                           ['EgF¿ G.F¿ F^EA D¹EA']
                         ],
        xMin           : 41.5,
        xMax           : 564,
        yMin           : -4,
        yMax           : 624.5,
        wdth           : 607
      };
      font["$"]        = {
        sC             : [
                           'C²Bg EmBg EmA£ EmABE´A4F-A4 FlA4FzA[FzA§ FzBg G¨Bg IIBgI¸CMI¸Dp I¸EyIaF©G¬F© FzF© FzHv H0Hv HvHvH«HhH«G¾ H«GYI/GIIOGI IyGII¸GcI¸GÂ I¸H³I{I¤H>I¤ FzI¤ FzJ[ FzJÁFNK)F/K) E£K)EmJ§EmJY EmI¤ DJI¤ BpI¤B9H±B9G¨ B9F¤BrE{DJE{ EmE{ EmCs CÀCs C`CsCEC¡CEDR CED|C6E!B¢E! BgE!B9D»B9DN B9C[BTBgC²Bg'
                         ],
        hC             : [
                           ['D$F© CqF©CEG3CEG´ CEHdCfHvD$Hv EmHv EmF©','H)E{ H`E{H«E?H«Dd H«C¼HrCsH)Cs FzCs FzE{']
                         ],
        xMin           : 59.5,
        xMax           : 553.5,
        yMin           : -7,
        yMax           : 627.5,
        wdth           : 613
      };
      font["%"]        = {
        sC             : [
                           'H©II HpIIHYI9HLI- BeC­ BPCwBDCfBDCK BDBÃBnBªB¬Bª B·BªC*B¬CEC! I-HH I7HRIKHnIKH§ IKI/I!IIH©II',
                           'B]HF B]GcC,FµC´Fµ D|FµEYGcEYHF EYI#D|IqC´Iq C,IqB]I#B]HF',
                           'F6D& F6CCF¹BtG£Bt HdBtI3CCI3D& I3D®HdE[G£E[ F¹E[F6D®F6D&'
                         ],
        hC             : [
                           [],
                           ['CkHF CkHVC}HdC´Hd CÂHdD8HWD8HF D8H.CÂGÂC´GÂ C¥GÂCkH.CkHF'],
                           ['GYD& GYD<GmDNG£DN GºDNH&D>H&D& H&C¶G¸C£G£C£ GmC£GYC´GYD&']
                         ],
        xMin           : 65,
        xMax           : 516.5,
        yMin           : 88.5,
        yMax           : 535,
        wdth           : 583
      };
      font["&"]        = {
        sC             : [
                           'C.F¢ B;F"AµD¹AµD$ AµA{C´@¶E=@¶ E¾@¶F¢A6GUA¡ G°A> H$A#H>@ºHW@º Hj@ºH¹A#H¹AW H¹AfH·A{H§A¯ H2Bg HhC4H©C´H©D~ H©EKH`EWHDEW G¬EWG}E,G}D~ G}D>GoC©GSCW C¼GU CdG¶CSHDCSHd CSIuDJJBE2JB F:JBF>H§F»H§ GAH§G_I#G_II G_IuFrKNE2KN C¯KNBBJBBBHd BBGªB~G3C.F¢'
                         ],
        hC             : [
                           ['F|Bj F>B7EwAÂE=AÂ DLAÂBÁBTBÁD$ BÁD¤C?EaC«E¸']
                         ],
        xMin           : 40,
        xMax           : 490,
        yMin           : -23.5,
        yMax           : 646,
        wdth           : 521
      };
      font["("]        = {
        sC             : [
                           'DvA` CfA`C^AdC^CE C^H» C^J}CfJ¡DvJ¡ DvK® CIK®BPK¨BPH» BPCE BP@XCI@RDv@R'
                         ],
        xMin           : 71,
        xMax           : 217.5,
        yMin           : -56,
        yMax           : 676.5,
        wdth           : 264.5
      };
      font[")"]        = {
        sC             : [
                           'AÂA` AÂ@R CK@RDD@XDDCE DDH» DDK¨CKK®AÂK® AÂJ¡ C0J¡C8J}C8H» C8CE C8AdC0A`AÂA`'
                         ],
        xMin           : 46.5,
        xMax           : 193,
        yMin           : -56,
        yMax           : 676.5,
        wdth           : 264.5
      };
      font["*"]        = {
        sC             : [
                           'D¿F¿ D¿G¨ E¬GKE´GCF+GC F`GCFpG{FpGª FpH)FXH<FBHJ EeH¥ FBI7 FXIEFpIXFpI{ FpI¼FTJ>F+J> E´J>E´J<D¿I} D¿Jf D¿K+DtK9DXK9 D1K9C²K!C²Jf C²I} C!J6B½J>B¤J> BLJ>B>IªB>I{ B>I_BNIGBlI7 CIH¥ BjHJ BNH:B>H"B>Gª B>GiBZGCB¤GC B½GCB½GEC²G¨ C²F¿ C²FXD:FHDVFH DrFHD¿FXD¿F¿'
                         ],
        xMin           : 62,
        xMax           : 342.5,
        yMin           : 323,
        yMax           : 635.5,
        wdth           : 405
      };
      font["+"]        = {
        sC             : [
                           'D¤D< D¤Aj D¤ACD±@ºEG@º E£@ºE°ACE°Aj E°D< H6D< HhD<H¯DXH¯D¤ H¯E0HlEKH6EK E°EK E°GÀ E°HdEeHrEIHr E!HrD¤HYD¤GÀ D¤EK BTEK A¸EKA§DÃA§D¨ A§DcAºD<BTD<'
                         ],
        xMin           : 33,
        xMax           : 485,
        yMin           : -21.5,
        yMax           : 471.5,
        wdth           : 518.5
      };
      font[","]        = {
        sC             : [
                           'BÁ@C CmAf CwAyC{A©C{Aµ C{BLC(BVB¹BV B|BVBaBFBRA¼ B"@p AÄ@eAÀ@TAÀ@L AÀ?¾B;?«B]?« B¢?«Bµ@&BÁ@C'
                         ],
        xMin           : 45.5,
        xMax           : 156,
        yMin           : -93,
        yMax           : 74,
        wdth           : 220.5
      };
      font["-"]        = {
        sC             : [
                           'F¢EK BÃEK BcEKBPDÃBPD¨ BPDcBeD<BÃD< F¢D< G/D<GUDXGUD¤ GUE0G3EKF¢EK'
                         ],
        xMin           : 71,
        xMax           : 393.5,
        yMin           : 189,
        yMax           : 260.5,
        wdth           : 464.5
      };
      font["."]        = {
        sC             : [
                           'C6@º Cd@ºD-A<D-A{ D-B7CfB_C6B_ B¬B_B>B9B>A{ B>A>B¤@ºC6@º'
                         ],
        xMin           : 62,
        xMax           : 181.5,
        yMin           : -21.5,
        yMax           : 78,
        wdth           : 244
      };
      font["/"]        = {
        sC             : [
                           'BÁAM F<JB FDJUFNJ£FNJ« FNK=E¾KKE©KK E^KKEKK&EAJµ B&B) AºA£AµAhAµAW AµA!BD@¸BX@¸ B¤@¸B¹A:BÁAM'
                         ],
        xMin           : 40,
        xMax           : 326,
        yMin           : -22.5,
        yMax           : 644.5,
        wdth           : 366
      };
      font[":"]        = {
        sC             : [
                           'CGG, CuG,D>GQD>G² D>HLCwHtCGHt B½HtBPHNBPG² BPGSBµG,CGG,',
                           'CGA{ CuA{D>AÂD>B_ D>B½CwCACGCA B½CABPB¿BPB_ BPAÄBµA{CGA{'
                         ],
        xMin           : 71,
        xMax           : 190,
        yMin           : 28,
        yMax           : 472.5,
        wdth           : 261.5
      };
      font[";"]        = {
        sC             : [
                           'CGG, CuG,D>GQD>G² D>HLCwHtCGHt B½HtBPHNBPG² BPGSBµG,CGG,',
                           'C`A% D-BH D7B]D:BjD:Bv D:C0CiC:CWC: C;C:BÃC*BµB~ BeAS BcAGB_A8B_A0 B_@¢B|@mB¿@m C?@mCS@®C`A%'
                         ],
        xMin           : 71,
        xMax           : 190,
        yMin           : -43,
        yMax           : 472.5,
        wdth           : 264.5
      };
      font["<"]        = {
        sC             : [
                           'B-E« GuBn GªBaG¼B]H)B] H^B]HlB¹HlC# HlCAHWCSH:Cf CSFL H:I/ HLI7HlITHlIw HlIÀHLJ6H&J6 G¶J6G¥J.GwJ% B-F¯ A³F|A¥FfA¥FL A¥F:A¯EÀB-E«'
                         ],
        xMin           : 32,
        xMax           : 468.5,
        yMin           : 77,
        yMax           : 570,
        wdth           : 535
      };
      font["="]        = {
        sC             : [
                           'F­F- C,F- BnF-B]E¥B]Eg B]ECBpDÁC,DÁ F­DÁ G;DÁGaE9GaEc GaE´G?F-F­F-',
                           'F­Gw C,Gw BnGwB]GKB]G/ B]F¯BpFhC,Fh F­Fh G;FhGaF¦GaG, GaGZG?GwF­Gw'
                         ],
        xMin           : 77,
        xMax           : 399,
        yMin           : 238,
        yMax           : 410,
        wdth           : 476.5
      };
      font[">"]        = {
        sC             : [
                           'H§E« I%EÀI/F:I/FL I/FfI!F|H§F¯ C;J% C0J.BÁJ6B®J6 BgJ6BFIÀBFIw BFITBgI7BxI/ G_FL BxCf BZCSBFCABFC# BFB¹BTB]B¬B] B»B]C*BaC=Bn'
                         ],
        xMin           : 66,
        xMax           : 502.5,
        yMin           : 77,
        yMax           : 570,
        wdth           : 535
      };
      font["?"]        = {
        sC             : [
                           'DxD< DxC{E!CiE=Ci EYCiE§CyE§D< E§E{ G#F& HjF^I+GAI+Ht I+I¸H[KIFTKI E?KI C8KIA­J·A­HY A­GºB5G¨BRG¨ BnG¨B»GºB»HY B»J*CgJ<E?J< FvJ< G¡J<GÂI=GÂHt GÂG¶GsGMG9G= DxFf',
                           'E=@º Ek@ºF4A<F4A{ F4B7EmB_E=B_ D³B_DFB9DFA{ DFA>D¬@ºE=@º'
                         ],
        xMin           : 36,
        xMax           : 500.5,
        yMin           : -21.5,
        yMax           : 643.5,
        wdth           : 540
      };
      font["@"]        = {
        sC             : [
                           'BHGE BHD» BHB_CwA#E}A# G²A# IKA#IiAÀIiB´ IiC^I=CkHÃCk HjCkH[C?H[B¹ H[BHHJB1G¥B1 E}B1 D3B1CUC:CUD» CUGE CUI#D3J,E}J, F4J, G}J,H[I#H[GE H[E¼HLEcGÂEK H)EoH+E¼H+FJ H+G¶GwH|EÂH| DJH|C¸G¶C¸FJ C¸D¢DJCºEÂCº IOCºIiEKIiGE IiI¢H:K9F4K9 E}K9 CwK9BHI¢BHGE'
                         ],
        hC             : [
                           ['EÂE# E0E#E!E?E!FJ E!GSE0GoEÂGo F³GoFÁGQFÁFJ FÁEAF³E#EÂE#']
                         ],
        xMin           : 67,
        xMax           : 531,
        yMin           : -15,
        yMax           : 635.5,
        wdth           : 597.5
      };
      font["["]        = {
        sC             : [
                           'CmA` CmJ¡ D¨J¡ D¨K® BaK® Ba@R D¨@R D¨A`'
                         ],
        xMin           : 79,
        xMax           : 225.5,
        yMin           : -56,
        yMax           : 676.5,
        wdth           : 272
      };
      font["]"]        = {
        sC             : [
                           'C8A` AÂA` AÂ@R DD@R DDK® AÂK® AÂJ¡ C8J¡'
                         ],
        xMin           : 46.5,
        xMax           : 193,
        yMin           : -56,
        yMax           : 676.5,
        wdth           : 272
      };
      font["^"]        = {
        sC             : [
                           'B®Fn C8FnCIF«CUG! DtI¤ E°G! EºF³F-FnFZFn F¤FnF½F©F½G. F½G9F½GAF¹GM E9K9 D-K9 BNGM BJGABJG7BJG. BJF©BjFnB®Fn'
                         ],
        xMin           : 68,
        xMax           : 364,
        yMin           : 341.5,
        yMax           : 635.5,
        wdth           : 432.5
      };
      font["_"]        = {
        sC             : [
                           'H+A` AyA` A2A`A#A6A#@½ A#@tA<@RAy@R H+@R Hr@RH¢@|H¢@º H¢A>HhA`H+A`'
                         ],
        xMin           : -15,
        xMax           : 478.5,
        yMin           : -56,
        yMax           : 14.5,
        wdth           : 463.5
      };
      font[" "]        = {
        sC             : [
                         ],
        xMin           : 10000,
        xMax           : -10000,
        yMin           : 10000,
        yMax           : -10000,
        wdth           : 253.5
      };

      return font;
    }
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//  WEBGL-DINGS  WEBGL-DINGS  WEBGL-DINGS  WEBGL-DINGS  WEBGL-DINGS  WEBGL-DINGS  WEBGL-DINGS 
//
//

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){

    return function(codeList){

      var wgd={reverseHoles:false,reverseShapes:true},nbsp="\u00A0";
      wgd["A"]                     = {
        xMin                       : -7,
        xMax                       : 675,
        yMin                       : 0,
        yMax                       : 714,
        wdth                       : 667
      };
      wgd["B"]                     = {
        xMin                       : 76,
        xMax                       : 667,
        yMin                       : 0,
        yMax                       : 714,
        wdth                       : 704
      };
      wgd["X"]                     = {
        xMin                       : -3,
        xMax                       : 651,
        yMin                       : 0,
        yMax                       : 714,
        wdth                       : 648
      };
      wgd["Y"]                     = {
        xMin                       : -6,
        xMax                       : 654,
        yMin                       : 0,
        yMax                       : 714,
        wdth                       : 648
      };
      wgd["Z"]                   = {
    // textChinese9300           = {
        shapeCmds                : [
                                      [[567,-22],[622,7],[663,-46.5,694,-96.5],[633.5,-128.5],[606,-78,567,-22]],
                                      [[320,-17.5],[378.5,7],[414,-50.5,440,-104.5],[375.5,-131.5],[353.5,-77,320,-17.5]],
                                      [[831,-17.5],[883.5,18],[934.5,-38,976.5,-93.5],[918.5,-134.5],[882.5,-78,831,-17.5]],
                                      [[131.5,20.5],[188,-13.5],[140.5,-80,87.5,-139.5],[34,-97.5],[87.5,-43.5,131.5,20.5]],
                                      [[625.5,526.5],[625.5,762],[696,762],[696,526.5],[625.5,526.5]],
                                      [[835.5,812],[906,812],[906,511],[905,423,811.5,421],[754.5,419,670.5,421],[665,455.5,657,490.5],[739,485.5,783,485.5],[835.5,485.5,835.5,537.5],[835.5,812]],
                                      [[67,263],[218.5,327.5,322,411.5],[273,411.5],[273,553],[192,472,69,408.5],[46.5,436,23,463],[166,524.5,253.5,605.5],[56.5,605.5],[56.5,661.5],[273,661.5],[273,729.5],[180.5,726,88.5,723],[86.5,730.5,76,777.5],[312,784.5,517.5,799],[529,743.5],[434.5,737.5,341.5,732.5],[341.5,661.5],[551.5,661.5],[551.5,605.5],[341.5,605.5],[341.5,561],[372,591],[459.5,548,547.5,502],[508.5,452.5],[428.5,497.5,341.5,543],[341.5,427],[357,441.5,373,456.5],[456,456.5],[431.5,430,405,405.5],[728.5,405.5],[728.5,358.5],[673.5,297],[856,297],[856,20],[161,20],[161,235.5],[135.5,223,110,210],[90.5,238.5,67,263]]
                                   ],
        holeCmds                 : [
                                      [],
                                      [],
                                      [],
                                      [],
                                      [],
                                      [],
                                      [
                                         [[226.5,134],[226.5,70.5],[475.5,70.5],[475.5,134],[226.5,134]],
                                         [[790,183],[790,246.5],[541,246.5],[541,183],[790,183]],
                                         [[541,70.5],[790,70.5],[790,134],[541,134],[541,70.5]],
                                         [[226.5,246.5],[226.5,183],[475.5,183],[475.5,246.5],[226.5,246.5]],
                                         [[596.5,297],[646,356.5],[347.5,356.5],[309.5,325.5,264.5,297],[596.5,297]]
                                      ]
                                   ],
        xMin                     : 23,
        xMax                     : 976.5,
        yMin                     : -139.5,
        yMax                     : 812,
        wdth                     : 999.5
      };
      wgd["a"]                     = {
        shapeCmds                  : [
                                        [
                                          [0,0],
                                          [0,  (36.4-20.6),(23.6-23.6), (36.4-6.4), (14.3-23.6) ,36.4,-23.6],
                                          [0,  3,1.2],
                                          [0,  (3-1.3) ,(3.1-2.5), (3+0.3) ,  (1.7-2.5),         3,-2.5],
                                          [0,  -2.7,-13.3],
                                          [0,  -0.3,-1.6,-2.2,-2.3,-3.5,-1.3],
                                          [0,  -10.9,8.1],
                                          [0,  -1.4,1,-1.1,3.2,0.5,3.9],
                                          [0,  2.9,1.1],
                                          [0,  -3.7,8,-10.5,14,-18.6,16.7],
                                          [0,  -3,1,-6.1,-1.2,-6.1,-4.4],
                                          [0,  0,-33.4],
                                          [0,  12.5,0],
                                          [0,  2.1,0,4.1,-1.5,4.3,-3.7],
                                          [0,  0.2,-2.4,-1.7,-4.5,-4.1,-4.5],
                                          [0,  -12.5,0],
                                          [0,  0,-11],
                                          [0,  6,-1.8,10.4,-7.4,10.3,-14],
                                          [0,  -0.1,-7.6,-6.4,-13.9,-14,-14.2],
                                          [0,  -8.1,-0.2,-14.8,6.3,-14.8,14.4],
                                          [0,  0,6.5,4.4,12,10.3,13.8],
                                          [0,  0,11],
                                          [0,  -12.5,0],
                                          [0,  -2.1,0,-4.1,1.5,-4.3,3.7],
                                          [0,  -0.2,2.4,1.7,4.5,4.1,4.5],
                                          [0,  12.8,0],
                                          [0,  0,33.4],
                                          [0,  0,3.2,-3.1,5.4,-6.1,4.4],
                                          [0,  -8.1,-2.8,-14.9,-8.7,-18.6,-16.7],
                                          [0,  2.9,-1.1],
                                          [0,  1.6,-0.6,1.9,-2.8,0.5,-3.9],
                                          [0,  -10.9,-8.1],
                                          [0,  -1.3,-1,-3.2,-0.3,-3.5,1.3],
                                          [0,  -2.7,13.3],
                                          [0,  -0.3,1.7,1.3,3.1,3,2.5],
                                          [0,  3,-1.2],
                                          [0,  6.4,14.3,20.6,23.6,36.4,23.6]
                                        ]
                                     ],
        holeCmds                   : [
                                        [
                                          (function(r){
                                            return [
                                              [0,-72.5],
                                              [0,   2.76*r,0*r,5*r,-2.24*r,5*r,-5*r],
                                              [0,  0*r,-2.76*r,-2.24*r,-5*r,-5*r,-5*r],
                                              [0,  -2.76*r,0*r,-5*r,2.24*r,-5*r,5*r],
                                              [0,  0*r,2.76*r,2.24*r,5*r,5*r,5*r]
                                            ]})(1.6)
                                        ]
                                     ],
        reverseShape               : false,
        reverseHole                : false,
        xFactor                    : 7,
        yFactor                    : -7,
        xShift                     : 350,          // These values are not calibrated
        xMin                       : -340,         // Refer to the next symbol for an example
        xMax                       : 340,
        yMin                       : 47,
        yMax                       : 806,
        wdth                       : 700,
        show                       : true
      };
      wgd["á"]                     = {
        shapeCmds                  : [
                                        [
                                          [0,0],
                                          [0,  (36.4-20.6),(23.6-23.6), (36.4-6.4), (14.3-23.6) ,36.4,-23.6],
                                          [0,  3,1.2],
                                          [0,  (3-1.3) ,(3.1-2.5), (3+0.3) ,  (1.7-2.5),         3,-2.5],
                                          [0,  -2.7,-13.3],
                                          [0,  -0.3,-1.6,-2.2,-2.3,-3.5,-1.3],
                                          [0,  -10.9,8.1],
                                          [0,  -1.4,1,-1.1,3.2,0.5,3.9],
                                          [0,  2.9,1.1],
                                          [0,  -3.7,8,-10.5,14,-18.6,16.7],
                                          [0,  -3,1,-6.1,-1.2,-6.1,-4.4],
                                          [0,  0,-33.4],
                                          [0,  12.5,0],
                                          [0,  2.1,0,4.1,-1.5,4.3,-3.7],
                                          [0,  0.2,-2.4,-1.7,-4.5,-4.1,-4.5],
                                          [0,  -12.5,0],
                                          [0,  0,-11],
                                          [0,  6,-1.8,10.4,-7.4,10.3,-14],
                                          [0,  -0.1,-7.6,-6.4,-13.9,-14,-14.2],
                                          [0,  -8.1,-0.2,-14.8,6.3,-14.8,14.4],
                                          [0,  0,6.5,4.4,12,10.3,13.8],
                                          [0,  0,11],
                                          [0,  -12.5,0],
                                          [0,  -2.1,0,-4.1,1.5,-4.3,3.7],
                                          [0,  -0.2,2.4,1.7,4.5,4.1,4.5],
                                          [0,  12.8,0],
                                          [0,  0,33.4],
                                          [0,  0,3.2,-3.1,5.4,-6.1,4.4],
                                          [0,  -8.1,-2.8,-14.9,-8.7,-18.6,-16.7],
                                          [0,  2.9,-1.1],
                                          [0,  1.6,-0.6,1.9,-2.8,0.5,-3.9],
                                          [0,  -10.9,-8.1],
                                          [0,  -1.3,-1,-3.2,-0.3,-3.5,1.3],
                                          [0,  -2.7,13.3],
                                          [0,  -0.3,1.7,1.3,3.1,3,2.5],
                                          [0,  3,-1.2],
                                          [0,  6.4,14.3,20.6,23.6,36.4,23.6]
                                        ],
                                        (function(r){
                                          return [
                                            [0,r*1.4],
                                            [0,   2.76*r,0*r,5*r,-2.24*r,5*r,-5*r],
                                            [0,  0*r,-2.76*r,-2.24*r,-5*r,-5*r,-5*r],
                                            [0,  -2.76*r,0*r,-5*r,2.24*r,-5*r,5*r],
                                            [0,  0*r,2.76*r,2.24*r,5*r,5*r,5*r]
                                          ]})(13)
                                     ],
        holeCmds                   : [
                                        [
                                          (function(r){
                                            return [
                                              [0,-72.5],
                                              [0,   2.76*r,0*r,5*r,-2.24*r,5*r,-5*r],
                                              [0,  0*r,-2.76*r,-2.24*r,-5*r,-5*r,-5*r],
                                              [0,  -2.76*r,0*r,-5*r,2.24*r,-5*r,5*r],
                                              [0,  0*r,2.76*r,2.24*r,5*r,5*r,5*r]
                                            ]})(1.6)
                                        ],
                                        [
                                          (function(r){
                                            return [
                                              [0,r*1.05],
                                              [0,   2.76*r,0*r,5*r,-2.24*r,5*r,-5*r],
                                              [0,  0*r,-2.76*r,-2.24*r,-5*r,-5*r,-5*r],
                                              [0,  -2.76*r,0*r,-5*r,2.24*r,-5*r,5*r],
                                              [0,  0*r,2.76*r,2.24*r,5*r,5*r,5*r]
                                            ]})(12)
                                        ]
                                     ],
        reverseShape               : false,
        reverseHole                : false,
        xFactor                    : 7,
        yFactor                    : -7,
        xShift                     : 475,
        yShift                     : -312.6,                // The middle is at the bottom reference -- a kludge
        xMin                       : 20,
        xMax                       : 950,
        yMin                       : -145.6,
        yMax                       : 894.4,
        wdth                       : 950,
        show                       : true
      };
      wgd["b"]                     = {
        xMin                       : 63,
        xMax                       : 575,
        yMin                       : -14,
        yMax                       : 714,
        wdth                       : 611
      };
      wgd["c"]                     = {
        xMin                       : 35,
        xMax                       : 523,
        yMin                       : -14,
        yMax                       : 531,
        wdth                       : 556
      };
      wgd["4"]                     = {
        xMin                       : 24,
        xMax                       : 522,
        yMin                       : 0,
        yMax                       : 700,
        wdth                       : 556
      };
      wgd["5"]                     = { 
        xMin                       : 34,
        xMax                       : 522,
        yMin                       : -14,
        yMax                       : 700,
        wdth                       : 556
      };
      wgd[nbsp]                    = {
        xMin                       : 31,
        xMax                       : 400,
        yMin                       : -4,
        yMax                       : 644,
        wdth                       : 278
      };
      wgd[" "]                     = wgd[nbsp];

      return wgd;
    }
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = earcut;
module.exports.default = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode || outerNode.next === outerNode.prev) return triangles;

    var minX, minY, maxX, maxY, x, y, invSize;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];

        for (var i = dim; i < outerLen; i += dim) {
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        // minX, minY and invSize are later used to transform coords into integers for z-order calculation
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 1 / invSize : 0;
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, invSize);

    return triangles;
}

// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
    } else {
        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
    }

    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }

    return last;
}

// eliminate colinear or duplicate points
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
        again;
    do {
        again = false;

        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) break;
            again = true;

        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
    if (!ear) return;

    // interlink polygon nodes in z-order
    if (!pass && invSize) indexCurve(ear, minX, minY, invSize);

    var stop = ear,
        prev, next;

    // iterate through ears, slicing them one by one
    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
            // cut off the triangle
            triangles.push(prev.i / dim);
            triangles.push(ear.i / dim);
            triangles.push(next.i / dim);

            removeNode(ear);

            // skipping the next vertex leads to less sliver triangles
            ear = next.next;
            stop = next.next;

            continue;
        }

        ear = next;

        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);

            // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
                ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);

            // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, invSize);
            }

            break;
        }
    }
}

// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // now make sure we don't have other points inside the potential ear
    var p = ear.next.next;

    while (p !== ear.prev) {
        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }

    return true;
}

function isEarHashed(ear, minX, minY, invSize) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // triangle bbox; min & max are calculated like this for speed
    var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x),
        minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y),
        maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x),
        maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);

    // z-order range for the current triangle bbox;
    var minZ = zOrder(minTX, minTY, minX, minY, invSize),
        maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);

    var p = ear.prevZ,
        n = ear.nextZ;

    // look for points inside the triangle in both directions
    while (p && p.z >= minZ && n && n.z <= maxZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;

        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    // look for remaining points in decreasing z-order
    while (p && p.z >= minZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    // look for remaining points in increasing z-order
    while (n && n.z <= maxZ) {
        if (n !== ear.prev && n !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) &&
            area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }

    return true;
}

// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev,
            b = p.next.next;

        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

            triangles.push(a.i / dim);
            triangles.push(p.i / dim);
            triangles.push(b.i / dim);

            // remove two nodes involved
            removeNode(p);
            removeNode(p.next);

            p = start = b;
        }
        p = p.next;
    } while (p !== start);

    return filterPoints(p);
}

// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
    // look for a valid diagonal that divides the polygon into two
    var a = start;
    do {
        var b = a.next.next;
        while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                // split the polygon in two by the diagonal
                var c = splitPolygon(a, b);

                // filter colinear points around the cuts
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);

                // run earcut on each half
                earcutLinked(a, triangles, dim, minX, minY, invSize);
                earcutLinked(c, triangles, dim, minX, minY, invSize);
                return;
            }
            b = b.next;
        }
        a = a.next;
    } while (a !== start);
}

// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
        i, len, start, end, list;

    for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    // process holes from left to right
    for (i = 0; i < queue.length; i++) {
        eliminateHole(queue[i], outerNode);
        outerNode = filterPoints(outerNode, outerNode.next);
    }

    return outerNode;
}

function compareX(a, b) {
    return a.x - b.x;
}

// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
    outerNode = findHoleBridge(hole, outerNode);
    if (outerNode) {
        var b = splitPolygon(outerNode, hole);
        filterPoints(b, b.next);
    }
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
    var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;

    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    do {
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                if (x === hx) {
                    if (hy === p.y) return p;
                    if (hy === p.next.y) return p.next;
                }
                m = p.x < p.next.x ? p : p.next;
            }
        }
        p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    if (hx === qx) return m; // hole touches outer segment; pick leftmost endpoint

    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point

    var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;

    p = m;

    do {
        if (hx >= p.x && p.x >= mx && hx !== p.x &&
                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

            if (locallyInside(p, hole) &&
                (tan < tanMin || (tan === tanMin && (p.x > m.x || (p.x === m.x && sectorContainsSector(m, p)))))) {
                m = p;
                tanMin = tan;
            }
        }

        p = p.next;
    } while (p !== stop);

    return m;
}

// whether sector in vertex m contains sector in vertex p in the same coordinates
function sectorContainsSector(m, p) {
    return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
}

// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, invSize) {
    var p = start;
    do {
        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
}

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
    var i, p, q, e, tail, numMerges, pSize, qSize,
        inSize = 1;

    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;

        while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }
            qSize = inSize;

            while (pSize > 0 || (qSize > 0 && q)) {

                if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }

                if (tail) tail.nextZ = e;
                else list = e;

                e.prevZ = tail;
                tail = e;
            }

            p = q;
        }

        tail.nextZ = null;
        inSize *= 2;

    } while (numMerges > 1);

    return list;
}

// z-order of a point given coords and inverse of the longer side of data bbox
function zOrder(x, y, minX, minY, invSize) {
    // coords are transformed into non-negative 15-bit integer range
    x = 32767 * (x - minX) * invSize;
    y = 32767 * (y - minY) * invSize;

    x = (x | (x << 8)) & 0x00FF00FF;
    x = (x | (x << 4)) & 0x0F0F0F0F;
    x = (x | (x << 2)) & 0x33333333;
    x = (x | (x << 1)) & 0x55555555;

    y = (y | (y << 8)) & 0x00FF00FF;
    y = (y | (y << 4)) & 0x0F0F0F0F;
    y = (y | (y << 2)) & 0x33333333;
    y = (y | (y << 1)) & 0x55555555;

    return x | (y << 1);
}

// find the leftmost node of a polygon ring
function getLeftmost(start) {
    var p = start,
        leftmost = start;
    do {
        if (p.x < leftmost.x || (p.x === leftmost.x && p.y < leftmost.y)) leftmost = p;
        p = p.next;
    } while (p !== start);

    return leftmost;
}

// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
           (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
           (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
           (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
            (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
            equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0); // special zero-length case
}

// signed area of a triangle
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// check if two points are equal
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

// check if two segments intersect
function intersects(p1, q1, p2, q2) {
    var o1 = sign(area(p1, q1, p2));
    var o2 = sign(area(p1, q1, q2));
    var o3 = sign(area(p2, q2, p1));
    var o4 = sign(area(p2, q2, q1));

    if (o1 !== o2 && o3 !== o4) return true; // general case

    if (o1 === 0 && onSegment(p1, p2, q1)) return true; // p1, q1 and p2 are collinear and p2 lies on p1q1
    if (o2 === 0 && onSegment(p1, q2, q1)) return true; // p1, q1 and q2 are collinear and q2 lies on p1q1
    if (o3 === 0 && onSegment(p2, p1, q2)) return true; // p2, q2 and p1 are collinear and p1 lies on p2q2
    if (o4 === 0 && onSegment(p2, q1, q2)) return true; // p2, q2 and q1 are collinear and q1 lies on p2q2

    return false;
}

// for collinear points p, q, r, check if point q lies on segment pr
function onSegment(p, q, r) {
    return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}

function sign(num) {
    return num > 0 ? 1 : num < 0 ? -1 : 0;
}

// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                intersects(p, p.next, a, b)) return true;
        p = p.next;
    } while (p !== a);

    return false;
}

// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ?
        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
    var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
    do {
        if (((p.y > py) !== (p.next.y > py)) && p.next.y !== p.y &&
                (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
            inside = !inside;
        p = p.next;
    } while (p !== a);

    return inside;
}

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
}

// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
        p.prev = p;
        p.next = p;

    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}

function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
    // vertex index in coordinates array
    this.i = i;

    // vertex coordinates
    this.x = x;
    this.y = y;

    // previous and next vertex nodes in a polygon ring
    this.prev = null;
    this.next = null;

    // z-order curve value
    this.z = null;

    // previous and next nodes in z-order
    this.prevZ = null;
    this.nextZ = null;

    // indicates whether this is a steiner point
    this.steiner = false;
}

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function (data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
            var start = holeIndices[i] * dim;
            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }

    var trianglesArea = 0;
    for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
            (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 :
        Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function (data) {
    var dim = data[0][0].length,
        result = {vertices: [], holes: [], dimensions: dim},
        holeIndex = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};


/***/ })
/******/ ]);