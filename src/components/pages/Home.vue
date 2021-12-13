<template>
  <div>
    <!-- <section class="jumbotron text-center">
      <div class="container">
        <div><img class="img-fluid" src="@/assets/banner.png" alt="" /></div>
        <h2 class="text-primary">機動戰士SEED MSV新計畫啟動！</h2>
        <p class="lead text-light">
          以具備銳利輪廓為特徵的星蝕鋼彈，是這部作品中的主角機體。
          <br />
          搭載了可變形為MS形態與MA形態的變形機構，以MG規格商品化。
        </p>
      </div>
    </section>

    <div class="album py-5 bg-light">
      <div class="container">
        <h3 class="font-weight-bold">即將發售</h3>

        <div class="row">
          <div class="col-md-4 d-flex align-items-stretch">
            <div class="card mb-4 shadow-sm">
              <img src="@/assets/pre1.jpg" alt="" />
              <div class="card-body">
                <h6>RG 1/144 MS-06R-1A BLACK TRI-STARS ZAKU II</h6>
              </div>
              <div class="card-footer">
                <p class="card-text">[2021年12月發送]</p>
              </div>
            </div>
          </div>

          <div class="col-md-4 d-flex align-items-stretch">
            <div class="card mb-4 shadow-sm">
              <img src="@/assets/pre2.jpg" alt="" />
              <div class="card-body">
                <h6>
                  MG 1/100 MS-06R-1A SHIN MATSUNAGA’S ZAKU II (CUSTOM TYPE)
                </h6>
              </div>
              <div class="card-footer">
                <p class="card-text">[2021年12月發送]</p>
              </div>
            </div>
          </div>

          <div class="col-md-4 d-flex align-items-stretch">
            <div class="card mb-4 shadow-sm">
              <img src="@/assets/pre3.jpg" alt="" />
              <div class="card-body">
                <h6>RG 1/144 PERFECT STRIKE GUNDAM</h6>
              </div>
              <div class="card-footer">
                <p class="card-text">[2021年12月發送]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner carousel-fade">
        <div class="carousel-item active" data-interval="5000">
          <img src="@/assets/banner_1.png" alt="" />
          <div class="container">
            <div class="carousel-caption text-left">
              <h1 class="font-weight-bold text-primary">聖誕節用多肉植物佈置你的家</h1>
            </div>
          </div>
        </div>
        <div class="carousel-item" data-interval="5000">
          <img src="@/assets/banner_2.png" alt="" />
          <div class="container">
            <div class="carousel-caption">     
            </div>
          </div>
        </div>
        <div class="carousel-item" data-interval="5000">
          <img src="@/assets/banner_3.png" alt="" />
          <div class="container">
            <div class="carousel-caption text-right">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Marketing messaging and featurettes
  ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container marketing">
      <!-- Three columns of text below the carousel -->
      <div class="row">
        <div class="col-md-4">
          <img class="img-fluid rounded-circle w-75 m-auto d-block" src="@/assets/hot_1.jpg" alt="" />
          <h2 class="py-2 text-center">桃太郎</h2>
          <p>
           桃太郎，屬於景天科，最讓人愛不釋手的樣子就是他緊密的蓮座外型，葉面鋪上一層薄薄的細緻白粉，
           整體葉色淺粉綠，葉緣從底部漸層上來的粉紅外框、淡淡的柔柔的，到最頂端一抹討喜的紅尖點，每片葉子規律的生長著，
           光是這樣欣賞她美麗的樣貌，就足夠迷人了！
          </p>
          <!-- <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p> -->
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-md-4">
          <img class="img-fluid rounded-circle w-75 m-auto d-block" src="@/assets/hot_2.jpg" alt="" />
          <h2 class="py-2 text-center">石頭玉</h2>
          <p>
            石頭玉，屬於番杏科，生石花屬(或稱石頭草屬)物種的總稱，被喻為「有生命的石頭」。因其形態獨特、色彩斑斕，
            成為很受歡迎的觀賞植物。石頭玉原產非洲南部，若非雨季生長開花,在原產地的礫石中石頭玉是很難被發現的，
            這是它為了防止小動物掠食而形成的自我保護天性，稱為「擬態」。
          </p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-md-4">
          <img class="img-fluid rounded-circle w-75 m-auto d-block" src="@/assets/hot_3.jpg" alt="" />
          <h2 class="py-2 text-center">兜</h2>
          <p>
            兜其實它是仙人掌科的，但是它的身上卻沒有像仙人掌一樣的刺，在它的葉子上只有白色星狀的絨毛，這種絨毛非常的可愛，
            在它生長的時候身形也是非常的嬌小，所以說它的外形也是非常好看的。
          </p>
        </div>
        <!-- /.col-lg-4 -->
      </div>
      <!-- /.row -->

      <!-- START THE FEATURETTES -->
      <hr class="featurette-divider" />

      <div class="row featurette align-items-center">
        <div class="col-md-7">
          <h2 class="featurette-heading">陽光 / 光照</h2>
          <p class="lead">
            多數的多肉植物都喜歡曬太陽，部分的多肉擁有耐陰的能力，光照充足可以讓多肉植物莖粗壯，葉片更加肥厚飽滿，
            適度的給他曬到太陽是很重要的。光照如果不足，可以改採多盆栽輪替的方法維持室內的綠意。
          </p>
        </div>
        <div class="col-md-5" data-aos="fade-down">
          <img class="img-fluid" src="@/assets/content_1.png" alt="" />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette align-items-center">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            空氣 / 通風
          </h2>
          <p class="lead">
           多數植物都喜歡通風的環境，因為植物生長在大自然之中的環境裡本身就是通風的居多，就算是熱帶雨林的高濕度環境，
           也是「維持高濕度的通風狀態」；而植物也透過葉片上的氣孔進行「呼吸作用」，如果葉片上有積灰塵也建議將它拭去，
           幫助植物進行交換二氧化碳與氧氣的流通。通風時也能加速盆土介質的乾燥，較不易造成爛根，不通風時植株生長會遲緩，且較易滋生病蟲害。
          </p>
        </div>
        <div class="col-md-5 order-md-1" data-aos="fade-down">
          <img class="img-fluid" src="@/assets/content_2.png" alt="" />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette align-items-center">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            水 / 澆水 
          </h2>
          <p class="lead">
           <ol>
             <li>理想澆水時機：最理想的時機會是「當植物有需要時給他補水」，
              對新手而言，我們建議多肉植物可以從「雙週澆一次水」。</li>
             <li>澆水時間：而最適合幫多肉植物澆水的時間是傍晚，多數植物則是早晨尚未有陽光直射時！</li>
             <li>避免盆內積水：若盆器底部沒有孔洞，一定要小心澆水的量，若積水了，要將水倒出較好，盆器底部若有排水孔會更容易一些。</li>
           </ol>
          </p>
        </div>
        <div class="col-md-5" data-aos="fade-down">
          <img class="img-fluid" src="@/assets/content_3.png" alt="" />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette align-items-center">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            介質 / 盆器 
          </h2>
          <p class="lead">
           將土的稱呼改為介質會能包容更多種土壤的選擇，多數植物都喜歡透氣性佳的土壤，因為根部除了吸水之外也需要「呼吸空氣」唷，
           不同的介質也有不同的營養成分與特質，搭配自己的澆水頻率高低也可以調整介質的酥鬆程度。
          </p>
        </div>
        <div class="col-md-5 order-md-1" data-aos="fade-down">
         <img class="img-fluid" src="@/assets/content_4.png" alt="" />
        </div>
      </div>

      <hr class="featurette-divider" />

      <!-- /END THE FEATURETTES -->
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>