<div class="content1">

            <?php
            /*
                $userid = 4;
                $query = "SELECT * FROM posts";
                $result = mysqli_query($con,$query);
                while($row = mysqli_fetch_array($result)){
                    $postid = $row['id'];
                    $title = $row['title'];
                    $content = $row['content'];
                    $link = $row['link'];

                    // User rating
                    $query = "SELECT * FROM post_rating WHERE postid=".$postid." and userid=".$userid;
                    $userresult = mysqli_query($con,$query) or die(mysqli_error());
                    $fetchRating = mysqli_fetch_array($userresult);
                    $rating = $fetchRating['rating'];

                    // get average
                    $query = "SELECT ROUND(AVG(rating),1) as averageRating FROM post_rating WHERE postid=".$postid;
                    $avgresult = mysqli_query($con,$query) or die(mysqli_error());
                    $fetchAverage = mysqli_fetch_array($avgresult);
                    $averageRating = $fetchAverage['averageRating'];

                    if($averageRating <= 0){
                        $averageRating = "No rating yet.";
                    }
            */
            ?>
                <?php //Khởi tạo đối tượng làm việc với Collection
                            $postid=$quan["_id"];
                            $objCollection_ratting = new MongoCollection($objDB, 'raiting');
                            $ds_raitting = $objCollection_ratting->find(["id_quan"=>new MongoId("$postid")]);
                            $i=0;$tong=0;$trungbinh=0;
                            foreach ($ds_raitting as $rating_quan ) {
                                $i=$i+1;
                                $tong=$tong+$rating_quan["diem"];
                                $trungbinh=($tong/$i);
                            }
                        ?>
                    
                    <div class="post">
                        <div class="post-action">
                            <!-- Rating -->
                            <select class='rating' id='rating_<?php echo $postid; ?>' data-id='rating_<?php echo $postid; ?>'>
                                <option value="1" >1</option>
                                <option value="2" >2</option>
                                <option value="3" >3</option>
                                <option value="4" >4</option>
                                <option value="5" >5</option>
                            </select>
                            <div style='clear: both;'></div>
                            Average Rating : <span id='avgrating_<?php echo $postid; ?>'><?php echo $trungbinh; ?></span>
                            <!-- Set rating -->
                            <script type='text/javascript'>
                            $(document).ready(function(){
                                $('#rating_<?php echo $postid; ?>').barrating('set',<?php echo $trungbinh; ?>);
                            });
                            
                            </script>
                        </div>
                    </div>
            <?php
                //}
            ?>

        </div>