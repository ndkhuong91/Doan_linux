<!DOCTYPE html>
<html>
<head>
        <title>Tìm món ăn </title>
<link rel="stylesheet" type="text/css" href="css.css">
<meta charset="utf-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
});
 
function showLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    $.ajax({
        type:'POST',
        url:'/index.php',
        data:'latitude='+latitude+'&longitude='+longitude,
        success:function(msg){
            if(msg){
               $("#location").html(msg);
            }else{
                $("#location").html('Not Available');
            }
            }
    });
}
</script>



        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
        <link href='raitting/jquery-bar-rating-master/dist/themes/fontawesome-stars.css' rel='stylesheet' type='text/css'>
        
        <!-- Script -->
        <script src="raitting/jquery-3.0.0.js" type="text/javascript"></script>
        <script src="raitting/jquery-bar-rating-master/dist/jquery.barrating.min.js" type="text/javascript"></script>
        <script type="text/javascript">
        $(function() {
            $('.rating').barrating({
                theme: 'fontawesome-stars',
                onSelect: function(value, text, event) {

                    // Get element id by data-id attribute
                    var el = this;
                    var el_id = el.$elem.data('id');

                    // rating was selected by a user
                    if (typeof(event) !== 'undefined') {
                        
                        var split_id = el_id.split("_");
                        var postid = split_id[1];  // postid

                        // AJAX Request
                        $.ajax({
                            url: 'raitting/rating_ajax.php',
                            type: 'post',
                            data: {postid:postid,rating:value},
                            dataType: 'json',
                            success: function(data){
                                // Update average
                                var average = data['averageRating'];
                                $('#avgrating_'+postid).text(average);
                            }
                        });
                    }
                }
            });
        });
      
        </script>
</head>
<body >

<p>Your Location: <span id="location"></span></p>
<div class="header">
        <?php
    function getDistanceBetweenPointsNew($latitude1, $longitude1, $latitude2, $longitude2) {
$theta = $longitude1 - $longitude2;

    $miles = (sin(deg2rad($latitude1)) * sin(deg2rad($latitude2))) + (cos(deg2rad($latitude1)) * cos(deg2rad($latitude2)) * cos(deg2rad($theta)));

    $miles = acos($miles);

    $miles = rad2deg($miles);

    $miles = $miles * 60 * 1.1515;

    $feet = $miles * 5280;

    $yards = $feet / 3;

    $kilometers = $miles * 1.609344;

    $meters = $kilometers * 1000;

    return $meters;

}
//Tên CSDL cần làm việc
        $dbName = 'diadiemanuong';
        try {
                //Khởi tạo đối tượng PHP Client
                $objClient = new MongoClient();
                //Chọn CSDL
                $objDB = $objClient->$dbName;
        } catch (Exception $ex) {
          //Trường hợp lỗi, thông báo kết nối không thành công
                die('Kết nối không thành công!');
        }
        ?>
  </div>
  <?php
if(!empty($_POST['latitude']) && !empty($_POST['longitude'])){
    //Send request and receive json data by latitude and longitude
    $url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='.trim($_POST['latitude']).','.trim($_POST['longitude']).'&sensor=false';
    $json = @file_get_contents($url);
    $data = json_decode($json);
    $status = $data->status;
    if($status=="OK"){
        //Get address from json data
        $location = $data->results[0]->formatted_address;
    }else{
        $location =  'FAIL';
    }
    //Print address 
    echo $location;
}
?>
  <div class = "menu_pub">
          <div class="menu">
                <ul>
                        <li> <a href="http://125.234.104.228:90/thucpham/index.php">Trang chủ</a></li>
                        <li><a href="http://125.234.104.228:90/thucpham/quan.php">Địa điểm</a></li>
<li ><a href="#">Địa điểm gần bạn</a></li>
                        <li><a href="#">Tìm kiếm</a></li>
                </ul>
          </div>
  </div>
 <div class="toan_cuc">
  <div class="slide_full">
     <img src="header.PNG" width="100%" />
  </div>
  <div class="content">
        <!--Địa điểm nỗi bật-->
        <div class="main_content">
                <div class="wpb_wrapper">
                        <div class="section-title">
                                <center>
                                        <h2>Địa điểm nổi bật</h2>
                                </center>
                        </div>
                </div>
                <div class="main_sub_content_1">
                                <?php //Khởi tạo đối tượng làm việc với Collection
                                        $objCollection = new MongoCollection($objDB, 'quan');
                                        //Thực hiện truy vấn theo field _id và gán kết quả vào biến $userData
                                        $ds_quan = $objCollection->find();
                                        $j=0;
                                        foreach($ds_quan as $quan){ $j=$j+1; ?>

 <div class="main_sub_content_1">
                                <div class="sub_content">
                                        <div class="image">
                                                <img src="quan.jpg">
                                        </div>
                                        <div class="title">
                                                <?php echo $quan["tenquan"];  ?>
                                        </div>
                                        <div class="dicription">
                                                 <ul>
                                                        <li>
                                                                <?php foreach ($quan["giomocua"] as $giomocua) { ?>
                                                                        <p> <?php echo "Giờ mở cửa: ".$giomocua["gio"]." Giờ - ".$giomocua["phut"]." Phút" ;  ?></p>
                                                                <?php }?>
                                                        </li>
                                                        <li>
                                                                <?php foreach ($quan["giodongcua"] as $giodongcua) { ?>
                                                                        <p> <?php echo "Giờ đóng cửa: ".$giodongcua["gio"]." Giờ - ".$giodongcua["phut"]." Phút" ;  ?></p>
                                                                <?php }?>
                                                        </li>
                                                        <li>
                                                                <?php echo "Loại:".$quan["loaithucan"];  ?>
                                                                </li>
                                                </ul>
                                        </div>
                                        <div class="dicription">
                                                <a href="<?php echo $quan['glmapcode']; ?>" target="_bank"><img src="googlemap.jpg" width="30" height="30"></a><?php echo "địa chỉ: ".$quan["diachi"];  ?>                                       
                                        </div>
                                        <div class="dicription">
                                                <?php echo include "raitting/index.php";  ?>
                                        </div>
                                </div>
                                <div class="mon_quan">

                                        <?php $i=0;
                    $postid=$quan["_id"];
                    $objCollection_ratting = new MongoCollection($objDB, 'monan');
                    $ds_raitting = $objCollection_ratting->find(["id_quan"=>new MongoId("$postid")]);
                                        foreach ($ds_raitting as $mon)
                                        { $i=$i+1; ?>
                                        <div class="sub_content">
                                                <div class="image">
                                                        <img src="1.PNG">
                                                </div>
                                                <div class="title">
                                                  <?php echo $mon["ten"]; ?>
                                                </div>
                                                <div class="title">
                                                        <?php echo "Giá: ".$mon["gia"] ." VND"; ?>
                                                </div>
                                        </div>

                                        <?php if($i>8) break; }?>

                                </div>
                                <br>
                                  <center><?php echo "Xem Thêm"; ?></center>

            </div>
                                <?php
                                if($j>5) break; echo "Xem Thêm";
                                }
                                 ?>

                 </div>
        <!-- Những món ăn được chon nhiều nhất-->
                <div class="wpb_wrapper">
                        <div class="section-title">
                                
                        </div>
                        </div>
                <!--  Món 1 -->
                <div class="main_sub_content_1">       
                                
                 </div>

                 <!-- phần 2-->

                 <div class="wpb_wrapper">
                        <div class="section-title">
                                
                        </div>
                </div>
                 <!--  Món 1 -->
                <div class="main_sub_content">
           
                 </div>
        </div>
        <div class="slide_bar">
		<form action="tim.php" method="get">
                <div class="tim"><center>Tìm kiếm</center></div>
                <div>

                        <ul class="search">
                                <li><input type="checkbox" name="check_dd"></li>
                                <li><label><center>Địa chỉ</center></label></li>

                                <li><input class="text" type="text" width="300px" name="text_dc" value='<?php echo $_GET["check_dd"];?>'></li>
                         </ul>

                        <ul class="search">
                                <li><input type="checkbox" name="check_m"></li>
                                <li><label><center>Món</center></label></li>

                                <li><input class="text" type="text" width="300px" name="text_m" value='<?php echo $_GET['check_m'];?>'></li>
                        </ul>

                        <ul class="search">
                                <li><input type="checkbox" name="check_lm"></li>
                                <li><label><center>Loại Món (Chay, mặn)</center></label></li>

				<li><select id="cmbLoaiMon" name="cmbLoaiMon" onmousedown="if(this.options.length>8){this.size=8;}"  onchange='this.size=0;' onblur="this.size=0;" >
					<option value="">Chọn loại món</option>
					<?php 
						$os = [];
						foreach($ds_quan as $quan){
    						    if (in_array($quan["loaithucan"], $os)) {
    						    }else{
        						array_push($os, $quan["loaithucan"]);
    						    }
						}
						foreach($os as $value) { 
					?>
					<option value="<?php echo $value; ?>">
						<?php echo $value; ?></option><?php } ?>
				</select></li>
                               <!-- <li><input class="text" type="text" width="300px" name="text_lm" value='<?php //if(isset($_GET['check_lm'])) echo $_GET['check_lm'];?>'></li> -->
                        </ul>

                        <ul class="search">
                                <li><input type="checkbox" name="check_gia"></li>
                                <li><label><center>Giá</center></label></li>

                                <li><label>Từ </label><input class="tu" type="text" name="text_giatu" value='<?php echo $_GET['check_gia'];?>'></li>
                                <li><label>đến </label><input class="den" type="text" name="text_giaden"></li>
                        </ul>
                        <ul class="search">
                                <li><input type="checkbox" name="check_gio"></li>
                                     <li><label><center>Giờ</center></label></li>

                                <li><label>Từ </label><input class="tu" type="text" name="text_giotu" value='<?php echo $_GET['check_gio'];?>'></li>
                                <li><label>đến </label><input class="den" type="text" name="text_gioden"></li>
                        </ul>
                        <center><button>Tìm</button></center>

                </div>
		</form>
                <div id="map">
                        <iframe src ="" width="100%" frameborder="0" style="border:0" allowfullscreen></iframe>

                </div>
        </div>

  </div>

  </div>
     <div class="footer">

  </div>
</body>
</html>
                                                              484,1         Bot

