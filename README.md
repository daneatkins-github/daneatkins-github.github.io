

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <title>Maps Application</title>

    <!-- dependencies -->
	<link rel="stylesheet" type="text/css" href="https://js.arcgis.com/calcite-components/2.13.2/calcite.css" />
	<link rel="stylesheet" href="https://js.arcgis.com/4.31/esri/themes/light/main.css" />
    <script src="https://js.arcgis.com/4.31/"></script>
    
	<!-- custom styles / page layout -->
 
 <style>
      html,
      body {}
	  
	  .page_div {
		position:relative;
		margin-left:auto;
		margin-right:auto;

		width:98%; height:98%;
	  }
      
	  .mapDiv {
		position:absolute; top:0; left:0;
		float:left;
        padding: 0;
        margin:  0;
        height: 100%;
        width: 89%;
		
		border: 2px solid black;
      }

	  
	  .layer_bar {
		position: absolute; top:10px; left:50%;
		margin-left: -100px;
		width:200px;
		height:auto;
		
		border: 2px solid black;
		background: white;
		padding: 3px;
		
		font-size:14px !important;
	  }
	  .layer_desc {
	    display:inline-block;
		width:90px;
		position:relative;
		top: -1px;
	  }
	  .layer_chk {
		margin-top:6px;
	  }  
	  .lyr_slide {
		width:50px;
		
		position:relative;   
		top:3px;
	  }
	  
	  .basemap_bar {
		position: absolute; top:10px; left:100%;
		margin-left: -125px;
		width:100px;
		
		border: 2px solid black;
		background: white;
		padding: 3px;
		
		font-size:15px !important; 
	  }
	  
	  .bm_slider_container {
		text-align:center;
		margin:0px;
		padding:0px;
	  }
	  .bm_slider {
		width:80%;
		text-align:center;
	  }
	  .bottom_right_bar {
		position: absolute; bottom:22px; left:100%;
		margin-left: -150px;
		width:130px;
		
		border: 2px solid black;
		background: white;
		padding: 3px;
		
		text-align:center;
		font-size:12px !important;
	  }
	  	  
	  .console_div {
	    position:absolute; 
		top:0; right:0;
		width:10%; height:100%;
	  
		border: 2px solid black;
		background:white;
		display:inline-block;
	  }
	  
	  .console_log {
		padding:3px;
		overflow:auto;
	  }
	  
	  
	  form {
		display:inline;
		margin:0;
		padding:0;
	  }

	  hr { width:100%; height:1px; background: #fff; 
		 margin:0px; padding:0px;}


   
</style>
<script>
/* 
Some script here...
*/

<h2>Another fresh start!</h2>

A promising approach to experimental web development.<br>
(Hopefully these pages last longer than AngelFire, or GeoCities!)<br>



  
  
</script>

<div class="page_div">
  <div class="mapDiv">
    map here.
  </div> <!-- end map -->
  <div class="console_div">
    <div class="console_log">
    logs here.

    </div>
  </div>  <!-- end console -->
</div> <!-- end page_div -->







</body>
</html>

      
