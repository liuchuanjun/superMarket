export default {
  // banner图片资源
  imgList: [
    {"id":0,"image":require('@/assets/img/banner/timg.jpg')} ,
    {"id":1,"image":require('@/assets/img/banner/timg1.jpg')} ,
    {"id":2,"image":require('@/assets/img/banner/timg2.jpg')} ,
    {"id":3,"image":require('@/assets/img/banner/timg3.jpg')} ,
    {"id":4,"image":require('@/assets/img/banner/timg4.jpg')} ,
    {"id":5,"image":require('@/assets/img/banner/timg5.jpg')}
  ],
  popImags: [

    {"id":0,"title":"十点抢劵","image":require('@/assets/img/pop/pop1.jpg')} ,
    {"id":1,"title":"好物特卖","image":require('@/assets/img/pop/pop2.jpg')} ,
    {"id":2,"title":"内购福利","image":require('@/assets/img/pop/pop3.jpg')} ,
    {"id":3,"title":"初秋上新","image":require('@/assets/img/pop/pop4.jpg')}
  ],
  // home页动物展示数据
  petLists: {
    dog: {
      "page": 0,
      "list": [
        {"id":'dl00',"title":"博美犬","image":require('@/assets/img/dog/bo_mei_quan.jpg')},
        {"id":'dl01',"title":"柴犬","image":require('@/assets/img/dog/chai_quan.jpg')},
        {"id":'dl02',"title":"哈土奇","image":require('@/assets/img/dog/ha_tu_qi.jpg')},
        {"id":'dl03',"title":"吉娃娃","image":require('@/assets/img/dog/jie_wa_wa.jpg')},
        {"id":'dl04',"title":"牧羊犬","image":require('@/assets/img/dog/mu_yang_quan.jpg')},
        {"id":'dl05',"title":"秋田犬","image":require('@/assets/img/dog/qiu_tian_quan.jpg')},
        {"id":'dl06',"title":"萨摩","image":require('@/assets/img/dog/sa_mo.jpg')},
        {"id":'dl07',"title":"松狮","image":require('@/assets/img/dog/song_shi.jpg')}
      ]
    },
    cat: {
      "page": 0,
      "list": [
        {"id":0,"title":"宠物01","image":require('@/assets/img/cat/cat1.jpg')} ,
        {"id":1,"title":"宠物02","image":require('@/assets/img/cat/cat2.jpg')} ,
        {"id":2,"title":"宠物03","image":require('@/assets/img/cat/cat3.jpg')} ,
        {"id":3,"title":"宠物04","image":require('@/assets/img/cat/cat4.jpg')} ,
        {"id":4,"title":"宠物05","image":require('@/assets/img/cat/cat5.jpg')} ,
        {"id":5,"title":"宠物06","image":require('@/assets/img/cat/cat6.jpg')} ,
        {"id":6,"title":"宠物07","image":require('@/assets/img/cat/cat7.jpg')} ,
        {"id":7,"title":"宠物08","image":require('@/assets/img/cat/cat8.jpg')}
      ]
    },
    tiger: {
      "page": 0,
      "list": [
        {"id":0,"title":"宠物01","image":require('@/assets/img/tiger/tiger1.jpg')} ,
        {"id":1,"title":"宠物02","image":require('@/assets/img/tiger/tiger2.jpg')} ,
        {"id":2,"title":"宠物03","image":require('@/assets/img/tiger/tiger3.jpg')} ,
        {"id":3,"title":"宠物04","image":require('@/assets/img/tiger/tiger4.jpg')} ,
        {"id":4,"title":"宠物05","image":require('@/assets/img/tiger/tiger5.jpg')} ,
        {"id":5,"title":"宠物06","image":require('@/assets/img/tiger/tiger6.jpg')} ,
        {"id":6,"title":"宠物07","image":require('@/assets/img/tiger/tiger7.jpg')} ,
        {"id":7,"title":"宠物08","image":require('@/assets/img/tiger/tiger8.jpg')}
      ]
    }

  },
  // home页加载更多的图片
  loadMoreImages: {
      dog: {
        "page": 1,
        "list": [
          {"id":16,"title":"巴哥犬","image":require('@/assets/img/dogMore/ba_ge.jpg')} ,
          {"id":17,"title":"大丹犬","image":require('@/assets/img/dogMore/da_dan.jpg')} ,
          {"id":18,"title":"斗牛犬","image":require('@/assets/img/dogMore/dou_niu.jpg')} ,
          {"id":19,"title":"腊肠犬","image":require('@/assets/img/dogMore/la_chang.jpg')} ,
          {"id":20,"title":"阿富汗猎犬","image":require('@/assets/img/dogMore/lie_quan.jpg')} ,
          {"id":21,"title":"西施犬","image":require('@/assets/img/dogMore/luo_wei_na.jpg')} ,
          {"id":22,"title":"罗威纳犬","image":require('@/assets/img/dogMore/xi_shi.jpg')} ,
          {"id":23,"title":"圣伯纳犬","image":require('@/assets/img/dogMore/shen_bo_na.jpg')},
        ]
      },
      cat: {
        "page": 1,
        "list": [
          {"id":8,"title":"宠物08","image":require('@/assets/img/catMore/cat11.jpg')} ,
          {"id":9,"title":"宠物09","image":require('@/assets/img/catMore/cat12.jpg')} ,
          {"id":10,"title":"宠物10","image":require('@/assets/img/catMore/cat13.jpg')} ,
          {"id":11,"title":"宠物11","image":require('@/assets/img/catMore/cat14.jpg')} ,
          {"id":12,"title":"宠物12","image":require('@/assets/img/catMore/cat15.jpg')} ,
          {"id":13,"title":"宠物13","image":require('@/assets/img/catMore/cat16.jpg')} ,
          {"id":14,"title":"宠物14","image":require('@/assets/img/catMore/cat17.jpg')} ,
          {"id":15,"title":"宠物15","image":require('@/assets/img/catMore/cat18.jpg')}
        ]
      },
      tiger: {
        "page": 1,
        "list": [
          {"id":8,"title":"宠物08","image":require('@/assets/img/tigerMore/tiger11.jpg')} ,
          {"id":9,"title":"宠物09","image":require('@/assets/img/tigerMore/tiger12.jpg')} ,
          {"id":10,"title":"宠物10","image":require('@/assets/img/tigerMore/tiger13.jpg')} ,
          {"id":11,"title":"宠物11","image":require('@/assets/img/tigerMore/tiger14.jpg')} ,
          {"id":12,"title":"宠物12","image":require('@/assets/img/tigerMore/tiger15.jpg')} ,
          {"id":13,"title":"宠物13","image":require('@/assets/img/tigerMore/tiger16.jpg')} ,
          {"id":14,"title":"宠物14","image":require('@/assets/img/tigerMore/tiger17.jpg')} ,
          {"id":15,"title":"宠物15","image":require('@/assets/img/tigerMore/tiger18.jpg')}
        ]
      }
    },
  // detail 概述
  detailMore:{
    'dl00':{
        imgaes:[
          {"id":0,"image":require('@/assets/img/detail/bo_mei/bo_mei_01.jpg')} ,
          {"id":1,"image":require('@/assets/img/detail/bo_mei/bo_mei_02.jpg')} ,
          {"id":2,"image":require('@/assets/img/detail/bo_mei/bo_mei_03.jpg')} ,
          {"id":3,"image":require('@/assets/img/detail/bo_mei/bo_mei_04.jpg')} ,
          {"id":4,"image":require('@/assets/img/detail/bo_mei/bo_mei_05.jpg')} ,
          {"id":5,"image":require('@/assets/img/detail/bo_mei/bo_mei_06.jpg')}
        ],
        title: '哈多利系博美犬',
        price: '$150',
        detail:'德国狐狸犬，包括毛狮犬和博美犬。德国狐狸犬是石器时代泥炭博美犬和后来的湖上生活者的狐狸犬的后代：德国狐狸犬是中欧最大的犬种。这种犬以后产生了不计其数的犬种。在非德语国家，狼狐狸犬被称为是毛狮犬，玩具狐狸犬被称为博美犬'
    },
    'dl01':{
        imgaes:[
          {"id":0,"image":require('@/assets/img/detail/chai_quan/chai_quan_01.jpg')} ,
          {"id":1,"image":require('@/assets/img/detail/chai_quan/chai_quan_02.jpg')} ,
          {"id":2,"image":require('@/assets/img/detail/chai_quan/chai_quan_03.jpg')} ,
          {"id":3,"image":require('@/assets/img/detail/chai_quan/chai_quan_04.jpg')} ,
          {"id":4,"image":require('@/assets/img/detail/chai_quan/chai_quan_05.jpg')} ,
          {"id":5,"image":require('@/assets/img/detail/chai_quan/chai_quan_06.jpg')}
        ],
        title: '柴犬',
        price: '$200',
        detail:'德国狐狸犬，包括毛狮犬和博美犬。德国狐狸犬是石器时代泥炭博美犬和后来的湖上生活者的狐狸犬的后代：德国狐狸犬是中欧最大的犬种。这种犬以后产生了不计其数的犬种。在非德语国家，狼狐狸犬被称为是毛狮犬，玩具狐狸犬被称为博美犬'
      },
      'dl02':{
        imgaes:[
          {"id":0,"image":require('@/assets/img/detail/bo_mei/bo_mei_01.jpg')} ,
          {"id":1,"image":require('@/assets/img/detail/bo_mei/bo_mei_02.jpg')} ,
          {"id":2,"image":require('@/assets/img/detail/bo_mei/bo_mei_03.jpg')} ,
          {"id":3,"image":require('@/assets/img/detail/bo_mei/bo_mei_04.jpg')} ,
          {"id":4,"image":require('@/assets/img/detail/bo_mei/bo_mei_05.jpg')} ,
          {"id":5,"image":require('@/assets/img/detail/bo_mei/bo_mei_06.jpg')}
        ],
        title: '哈多利系博美犬',
        price: '$150',
        detail:'德国狐狸犬，包括毛狮犬和博美犬。德国狐狸犬是石器时代泥炭博美犬和后来的湖上生活者的狐狸犬的后代：德国狐狸犬是中欧最大的犬种。这种犬以后产生了不计其数的犬种。在非德语国家，狼狐狸犬被称为是毛狮犬，玩具狐狸犬被称为博美犬'
    },
    'dl03':{
      imgaes:[
        {"id":0,"image":require('@/assets/img/detail/bo_mei/bo_mei_01.jpg')} ,
        {"id":1,"image":require('@/assets/img/detail/bo_mei/bo_mei_02.jpg')} ,
        {"id":2,"image":require('@/assets/img/detail/bo_mei/bo_mei_03.jpg')} ,
        {"id":3,"image":require('@/assets/img/detail/bo_mei/bo_mei_04.jpg')} ,
        {"id":4,"image":require('@/assets/img/detail/bo_mei/bo_mei_05.jpg')} ,
        {"id":5,"image":require('@/assets/img/detail/bo_mei/bo_mei_06.jpg')}
      ],
      title: '哈多利系博美犬',
      price: '$150',
      detail:'德国狐狸犬，包括毛狮犬和博美犬。德国狐狸犬是石器时代泥炭博美犬和后来的湖上生活者的狐狸犬的后代：德国狐狸犬是中欧最大的犬种。这种犬以后产生了不计其数的犬种。在非德语国家，狼狐狸犬被称为是毛狮犬，玩具狐狸犬被称为博美犬'
    },
    'dl04':{
      imgaes:[
        {"id":0,"image":require('@/assets/img/detail/bo_mei/bo_mei_01.jpg')} ,
        {"id":1,"image":require('@/assets/img/detail/bo_mei/bo_mei_02.jpg')} ,
        {"id":2,"image":require('@/assets/img/detail/bo_mei/bo_mei_03.jpg')} ,
        {"id":3,"image":require('@/assets/img/detail/bo_mei/bo_mei_04.jpg')} ,
        {"id":4,"image":require('@/assets/img/detail/bo_mei/bo_mei_05.jpg')} ,
        {"id":5,"image":require('@/assets/img/detail/bo_mei/bo_mei_06.jpg')}
      ],
      title: '哈多利系博美犬',
      price: '$150',
      detail:'德国狐狸犬，包括毛狮犬和博美犬。德国狐狸犬是石器时代泥炭博美犬和后来的湖上生活者的狐狸犬的后代：德国狐狸犬是中欧最大的犬种。这种犬以后产生了不计其数的犬种。在非德语国家，狼狐狸犬被称为是毛狮犬，玩具狐狸犬被称为博美犬'
    },
    'dl05':{
      imgaes:[
        {"id":0,"image":require('@/assets/img/detail/bo_mei/bo_mei_01.jpg')} ,
        {"id":1,"image":require('@/assets/img/detail/bo_mei/bo_mei_02.jpg')} ,
        {"id":2,"image":require('@/assets/img/detail/bo_mei/bo_mei_03.jpg')} ,
        {"id":3,"image":require('@/assets/img/detail/bo_mei/bo_mei_04.jpg')} ,
        {"id":4,"image":require('@/assets/img/detail/bo_mei/bo_mei_05.jpg')} ,
        {"id":5,"image":require('@/assets/img/detail/bo_mei/bo_mei_06.jpg')}
      ],
      title: '哈多利系博美犬',
      price: '$150',
      detail:'德国狐狸犬，包括毛狮犬和博美犬。德国狐狸犬是石器时代泥炭博美犬和后来的湖上生活者的狐狸犬的后代：德国狐狸犬是中欧最大的犬种。这种犬以后产生了不计其数的犬种。在非德语国家，狼狐狸犬被称为是毛狮犬，玩具狐狸犬被称为博美犬'
    },
    'dl06':{
      imgaes:[
        {"id":0,"image":require('@/assets/img/detail/bo_mei/bo_mei_01.jpg')} ,
        {"id":1,"image":require('@/assets/img/detail/bo_mei/bo_mei_02.jpg')} ,
        {"id":2,"image":require('@/assets/img/detail/bo_mei/bo_mei_03.jpg')} ,
        {"id":3,"image":require('@/assets/img/detail/bo_mei/bo_mei_04.jpg')} ,
        {"id":4,"image":require('@/assets/img/detail/bo_mei/bo_mei_05.jpg')} ,
        {"id":5,"image":require('@/assets/img/detail/bo_mei/bo_mei_06.jpg')}
      ],
      title: '哈多利系博美犬',
      price: '$150',
      detail:'德国狐狸犬，包括毛狮犬和博美犬。德国狐狸犬是石器时代泥炭博美犬和后来的湖上生活者的狐狸犬的后代：德国狐狸犬是中欧最大的犬种。这种犬以后产生了不计其数的犬种。在非德语国家，狼狐狸犬被称为是毛狮犬，玩具狐狸犬被称为博美犬'
    },
    'dl07':{
      imgaes:[
        {"id":0,"image":require('@/assets/img/detail/bo_mei/bo_mei_01.jpg')} ,
        {"id":1,"image":require('@/assets/img/detail/bo_mei/bo_mei_02.jpg')} ,
        {"id":2,"image":require('@/assets/img/detail/bo_mei/bo_mei_03.jpg')} ,
        {"id":3,"image":require('@/assets/img/detail/bo_mei/bo_mei_04.jpg')} ,
        {"id":4,"image":require('@/assets/img/detail/bo_mei/bo_mei_05.jpg')} ,
        {"id":5,"image":require('@/assets/img/detail/bo_mei/bo_mei_06.jpg')}
      ],
      title: '哈多利系博美犬',
      price: '$150',
      detail:'德国狐狸犬，包括毛狮犬和博美犬。德国狐狸犬是石器时代泥炭博美犬和后来的湖上生活者的狐狸犬的后代：德国狐狸犬是中欧最大的犬种。这种犬以后产生了不计其数的犬种。在非德语国家，狼狐狸犬被称为是毛狮犬，玩具狐狸犬被称为博美犬'
    }
  }
}