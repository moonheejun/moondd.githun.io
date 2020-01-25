var L_DRAW_NUM = 6;
var L_MAX_NUM = 45;

/**
* Lotto module
*/
var Lotto = {

	/**
	* generate number between 1 and 45.
	*/
	_getLNum : function(){
		var rtn;
		with(Math){
			rtn = floor ( random() * L_MAX_NUM ) + 1;
		}
		return rtn;
	}

	/**
	* check number not exist in array.
	* @param numArr number array
	* @param num number
	* @return exist result
	*/
	, _chkNotExist : function( numArr, num ){

		//check type
		if( typeof(numArr)!="object" || numArr.length == undefined || typeof(num)!="number"){
			alert("_chkNotExist - check parameters type : " + numArr + ", " + num);
			return false;
		}
		
		//check dup
		var nums = "#" + numArr.join("#") + "#";
		if( nums.indexOf( "#"+num+"#")>=0 ){
			return false;
		}
		return true;
	}

	/**
	* order number
	* @param numArr number array
	* @return ordered number array
	*/
	, _sortNum : function( numArr ){
		//check type
		if( typeof(numArr)!="object" || numArr.length == undefined){
			alert("_sortNum - check type : " + numArr);
			return false;
		}
		
		return numArr.sort( function( curr, next ){
			if( curr > next ) return 1;
			if( curr < next ) return -1;
			return 0;
		});
	}
	
	/**
	* generate lotto number array (6)
	* @return lotto number array
	*/
	, getNumbers : function(){
		var rtn = [];
		while( rtn.length<L_DRAW_NUM ){
			var num = Lotto._getLNum();
			if( Lotto._chkNotExist( rtn , num ) ){
				rtn.push( num );
			}
		}
		return Lotto._sortNum(rtn);
	}

};