<?php

//Tên CSDL cần làm việc
$dbName = 'diadiemanuong';
try {
	//Khởi tạo đối tượng PHP Client
  //THAY ĐỔI
	$objClient = new Mongo();// <===========================================
	//Chọn CSDL
	$objDB = $objClient->$dbName;
} catch (Exception $ex) {
	//Trường hợp lỗi, thông báo kết nối không thành công
	die('Kết nối không thành công!');
}

?>

 <div class="toan_cuc">
  <div class="content">
  <!--Địa điểm nỗi bật-->
    <div class="main_content">
      <div class="panel-body">
                <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal-1" class="modal fade">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                        <h4 class="modal-title">Thêm Thông tin quán</h4>
                      </div>
                      <div class="modal-body">
                        <!--THAY ĐỔI-->
                        <form action="../them.php" method="post" enctype="multipart/form-data"> <!--<===============================-->
                          <div class="form-group">
                            <label >Tên quán</label>
                            <input class="form-control" name="tenquan" type="text" placeholder="Tên quán">
                          </div>
                          <div class="form-group">
                            <label >Địa chỉ</label>
                            <input class="form-control" name="diachi" type="text" placeholder="Địa chỉ quán">
                          </div>

                          <div class="form-group">
                            <label >Loại</label>
                            <!--THAY ĐỔI-->
                            <input class="form-control" name="loai" type="text" placeholder="Loại quán"><!--<===============================-->
                          </div>
                          
                          <div class="form-group">
                            <label >giờ mở cửả</label>
                             <input class="form-control col-sm-2" name="gio_m" type="text"  placeholder="Giờ ">
                             <input class="form-control col-sm-2" name="phut_m" type="text" placeholder="phút">
                          </div>
                          <div class="form-group">
                            <label >giờ đóng cửả</label>
                             <input class="form-control col-sm-2" name="gio_d" type="text"  placeholder="Giờ ">
                             <input class="form-control col-sm-2" name="phut_d" type="text" placeholder="phút">
                          </div>
                          <div class="form-group">
                            <label >Địa chỉ Gmap</label>
                            <!--THAY ĐỔI-->
                            <input type="text" class="form-control" placeholder="Địa chỉ của quán trên google map" name="map"> <!--<===============================-->
                          </div>
                          <div class="form-group">
                            <label for="exampleInputFile">Chọn ảnh quán</label>
                            <!--THAY ĐỔI-->
                            <input type="file" name="image">
                          </div>
                          <button type="submit" class="btn btn-primary" name="action">Thêm</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                
               
              </div>


    
    <br>
    
    <table class="table table-striped table-advance table-hover">
    <tbody>
    <tr>
    <th>STT</th>
    <th>Tên quán</th>
    <th>Loại</th>
    <th>Giờ mở cửa</th>
    <th>ảnh quán</th>
    <th>Thêm món</th>
    <th>Thêm,sửa,xóa</th>
    </tr>
    <?php $objCollection = new MongoCollection($objDB, 'quan');
          //Thực hiện truy vấn theo field _id và gán kết quả vào biến $userData
          $ds_quan = $objCollection->find();
          $i=0;



          foreach($ds_quan as $quan){ $i=$i+1;?> <!-- bat dau foreach-->
    <tr>
      <td><?php echo $i; ?></td>
      <td><?php echo $quan ["tenquan"] ?></td>
      <td><?php echo $quan["loaithucan"] ?></td>
      <td>
        <?php foreach ($quan["giomocua"] as $giomocua) { ?>
                  <p> <?php echo $giomocua["gio"]."h - ".$giomocua["phut"]." Phút" ;  ?></p>
                  <?php }?>
      </td>
      <td><!--anh quan-->
        <?php
          $idImg = $quan["hinhanh"];
          echo "<img src='../showimg.php?id=".$idImg."' width=100px height=100px>";
        ?>

      </td>
      <td>
        <!--THAY ĐỔI-->
        <a href="../monan/them.php?id_quan=<?php echo $quan["_id"]; ?>" data-toggle="modal" class="btn btn-primary"><i class="icon_plus_alt2"></i></a></td>
      <td>
          <div class="btn-group">
            <a href="#myModal-1" data-toggle="modal" class="btn btn-primary"><i class="icon_plus_alt2"></i></a>
            <a class="btn btn-success" href="../Sua.php?flag=0&code=<?php echo $quan["_id"]; ?>"><i class="icon_check_alt2"></i></a>
            <a class="btn btn-danger" href="../Xoa.php?code=<?php echo $quan["_id"]; ?>"><i class="icon_close_alt2"></i></a>
          </div>
      </td>
    </tr>

    <?php } //end foreach?>




   </tbody>
  </table>

    </div>
 
  </div>


<script>
var x = document.getElementById("map");

function getLocation() {
if (navigator.geolocation) {
navigator.geolocation.watchPosition(showPosition);
} else {
x.innerHTML = "Geolocation is not supported by this browser.";}
}
var tam="https://www.google.com/maps/@"+ position.coords.latitude +","+position.coords.longitude+",15z/data=!4m2!10m1!1e4"

function showPosition(position) {
$('iframe').attr('src',tam);
}
</script>
