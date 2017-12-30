
/** quan indexes **/
db.getCollection("quan").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** quan records **/
db.getCollection("quan").insert({
  "_id": ObjectId("5a3cfca46803faf25e3c9870"),
  "tenquan": "Cẩm Ký - Cơm Gà Xối Mỡ",
  "diachi": "37 Đề Thám, Q.Ninh Kiều, TP. Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.7915134063583!2d105.78012931431292!3d10.034055992827819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a062a074e964bd%3A0xcf3968a5665b6e62!2zMzcgxJDhu4EgVGjDoW0sIEFuIEPGsCwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1513945908562",
  "loaithucan": "Cơm",
  "giomocua": [
    {
      "gio": "6",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "22",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Cơm gà xối mỡ",
      "gia": "40000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3cfe836803fa89493c9871"),
  "tenquan": "Cơm Gà 6 Quận",
  "diachi": "109 Trần Văn Khéo, Q. Ninh Kiều, TP Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.6542060378065!2d105.78322361431294!3d10.045366692820085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a062a8fa725517%3A0x6eba8156309570ee!2zMTA5IFRy4bqnbiBWxINuIEtow6lvLCBDw6FpIEto4bq_LCBOaW5oIEtp4buBdSwgQ-G6p24gVGjGoSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1513946716686",
  "loaithucan": "Cơm",
  "giomocua": [
    {
      "gio": "7",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "21",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Cơm đùi gà",
      "gia": "45000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d2c966803fa705e3c987a"),
  "tenquan": "Ngọc Ngân - Hủ Tiếu Nam Vang",
  "diachi": "16\/45 Nguyễn Khuyến, P. An Cư, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.7903365160805!2d105.78087531431291!3d10.034152992827744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a062a06c43d385%3A0xd448508928d4b5fa!2zMTYvNDUgTmd1eeG7hW4gS2h1eeG6v24sIEFuIEPGsCwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1513958528756",
  "loaithucan": "Hủ tiếu",
  "giomocua": [
    {
      "gio": "6",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "21",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Hủ tiếu xương",
      "gia": "35000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d2dde6803fa045f3c987a"),
  "tenquan": "Hủ Tiếu Gõ - Mậu Thân",
  "diachi": "49A Mậu Thân, P. An Nghiệp, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.750279135969!2d105.76923031431289!3d10.037453992825517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08819e95fcc07%3A0xf03ce335bd998192!2zNDlBIE3huq11IFRow6JuLCBYdcOibiBLaMOhbmgsIE5pbmggS2nhu4F1LCBD4bqnbiBUaMahLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1513958852630",
  "loaithucan": "Hủ tiếu",
  "giomocua": [
    {
      "gio": "16",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "22",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Hủ tiếu",
      "gia": "10000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3db27f6803fa735e3c987c"),
  "tenquan": "Tên quán",
  "diachi": "Địa chỉ quán",
  "glmapcode": "https:\/\/goo.gl\/maps\/9E9CcjR9v3F2",
  "loaithucan": "Chay , Mặn",
  "giomocua": [
    {
      "gio": "8",
      "phut": "0"
    }
  ],
  "giodongcua": [
    {
      "gio": "10",
      "phut": "0"
    }
  ],
  "tenmon": [
    {
      "ten": "Mì hít hà bò + trà hibiscus Mì hít hà bò + trà hibiscus",
      "gia": "300000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a4687fa6803fafd093c9869"),
  "tenquan": "Bingsu Cần Thơ",
  "diachi": "Ninh kiều - cần thơ",
  "glmapcode": null,
  "loaithucan": null,
  "giomocua": [
    {
      "gio": "10",
      "phut": "20"
    }
  ],
  "giodongcua": [
    {
      "gio": "22",
      "phut": "0"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d06736803fa675e3c9871"),
  "tenquan": "Phúc - Cơm Thố & Hủ Tiếu Mực",
  "diachi": "39, đường số 4, KDC Metro, P.Hưng Lợi, Q.Ninh Kiều, TP.Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.92458945829!2d105.75966511431271!3d10.023081792835294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08839d4064eef%3A0x6d03c8b80f5182fe!2sKDC+Metro!5e0!3m2!1svi!2s!4v1513948765700",
  "loaithucan": "Cơm, Hủ tiếu",
  "giomocua": [
    {
      "gio": "9",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "22",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Bún mực đặc biệt",
      "gia": "38000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d07bc6803fa045f3c9873"),
  "tenquan": "Cơm Tấm Trương Định",
  "diachi": "19\/9 Trương Định, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.7704089624444!2d105.78015851431284!3d10.035795292826647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a062a084e9720d%3A0xd6dc96c48dd8f776!2zMTkgVHLGsMahbmcgxJDhu4tuaCwgQW4gQ8awLCBOaW5oIEtp4buBdSwgQ-G6p24gVGjGoSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1513949100277",
  "loaithucan": "Cơm",
  "giomocua": [
    {
      "gio": "6",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "11",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Cơm sườn bì chả",
      "gia": "10000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d087b6803fab0593c9874"),
  "tenquan": "Cơm Gà Tý Đô",
  "diachi": "132\/2 Đường 3 Tháng 2, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.8730080987166!2d105.76733901431277!3d10.027336892832423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0883b50836eaf%3A0xe394fe5c0e3eeeab!2zMTMyIEjhurttIDQzIDMgVGjDoW5nIDIsIFh1w6JuIEtow6FuaCwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1513949284026",
  "loaithucan": "Cơm",
  "giomocua": [
    {
      "gio": "8",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "18",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Cơm sườn bì",
      "gia": "16000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d0a256803fa2e6e3c9877"),
  "tenquan": "Quán Cơm Cà Ri Chà",
  "diachi": "210 Nguyễn Văn Cừ Nối Dài, P. Anh Khánh, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d15715.424409278394!2d105.74339220205735!3d10.028731112097335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a088448d1ad281%3A0xe9d6dfaae63eb3b9!2zQ2FmZSBRdXnhur9uIEx1eeG6v24!5e0!3m2!1svi!2s!4v1513949709272",
  "loaithucan": "Cơm",
  "giomocua": [
    {
      "gio": "8",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "21",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Cơm cà ri",
      "gia": "25000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d0bb56803fa045f3c9875"),
  "tenquan": "Cơm Gà Thanh Mai",
  "diachi": "Nguyễn Văn Cừ, P. An Khánh, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.7667963458207!2d105.75548351431286!3d10.036092992826433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0886a866bbc19%3A0xf81fef8a6cf87f0f!2zxJDGsOG7nW5nIE5ndXnhu4VuIFbEg24gQ-G7qywgQW4gSMOyYSwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1513950115101",
  "loaithucan": "Cơm",
  "giomocua": [
    {
      "gio": "7",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "17",
      "phut": "30"
    }
  ],
  "tenmon": [
    {
      "ten": "Cơm gà chiên",
      "gia": "17000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d0d9e6803fa681d3c987f"),
  "tenquan": "Cơm Phần Trung Ký",
  "diachi": "Nguyễn Văn Cừ Nối Dài , Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.9567569787155!2d105.73954791431275!3d10.02042729283717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a088452d561c85%3A0x2af0affc260efab4!2zTmd1eeG7hW4gVsSDbiBD4burIG7hu5FpIGTDoGksIE5pbmggS2nhu4F1LCBD4bqnbiBUaMahLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1513950602928",
  "loaithucan": "Cơm",
  "giomocua": [
    {
      "gio": "8",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "22",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Cơm sườn chiên",
      "gia": "15000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d27836803faf25e3c9878"),
  "tenquan": "Cơm Tấm Sáu Mủ",
  "diachi": "172 Đường 3 Tháng 2, P. Hưng Lợi, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.9292287908097!2d105.76396931431273!3d10.022698992835595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0883a75b20eeb%3A0xbefcb6455063c5c8!2zMTc2IEJhIFRow6FuZyBIYWksIEjGsG5nIEzhu6NpLCBOaW5oIEtp4buBdSwgQ-G6p24gVGjGoSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1513957123257",
  "loaithucan": "Cơm",
  "giomocua": [
    {
      "gio": "4",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "20",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Cơm tấm sườn bì",
      "gia": "15000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d28b96803fa675e3c9877"),
  "tenquan": "Bún Thái 68",
  "diachi": "Nguyễn Văn Linh, P. Hưng Lợi, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.944190291618!2d105.76276371431268!3d10.02146439283644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08830e54e5f25%3A0xd7d159025caa8609!2zTmd1eeG7hW4gVsSDbiBMaW5oLCBOaW5oIEtp4buBdSwgQ-G6p24gVGjGoSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1513957534907",
  "loaithucan": "Bún",
  "giomocua": [
    {
      "gio": "6",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "22",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Bún Thái",
      "gia": "30000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d29bf6803faf25e3c9879"),
  "tenquan": "Bún Mắm 173",
  "diachi": "594 Đường 30 Tháng 4, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3929.0177206349067!2d105.7612468143127!3d10.015394592840629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08834663194a5%3A0x2c7947fcd28b2970!2zNTk0IEJhIE3GsMahaSBUaMOhbmcgVMawLCBIxrBuZyBM4bujaSwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1513957800320",
  "loaithucan": "Bún",
  "giomocua": [
    {
      "gio": "13",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "21",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Bún mắm bình thường",
      "gia": "29000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d2aa06803fa675e3c9878"),
  "tenquan": "Bún Mực Phú Quốc",
  "diachi": "251\/18 Trần Ngọc Quế, P. Hưng Lợi, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.942802800049!2d105.76905331431277!3d10.021578892836398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0882fefcd5b33%3A0x982322ab7e40022d!2zMjUxLzE4IFRy4bqnbiBOZ-G7jWMgUXXhur8sIFh1w6JuIEtow6FuaCwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1513958021178",
  "loaithucan": "Bún",
  "giomocua": [
    {
      "gio": "7",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "11",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Bún cá mực",
      "gia": "30000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d2bca6803fa89493c9875"),
  "tenquan": "Huỳnh Châu - Bún Bò Huế",
  "diachi": "166B Phan Đình Phùng, P. An Lạc, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.865524450336!2d105.78400741431282!3d10.027954092831996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0629e969fba29%3A0x294dfcbfab5fcf40!2zMTY2IFBoYW4gxJDDrG5oIFBow7luZywgQW4gTOG6oWMsIE5pbmggS2nhu4F1LCBD4bqnbiBUaMahLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1513958253500",
  "loaithucan": "Bún",
  "giomocua": [
    {
      "gio": "7",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "21",
      "phut": "30"
    }
  ],
  "tenmon": [
    {
      "ten": "Bún bò đặc biệt",
      "gia": "60000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d2ed96803fa705e3c987c"),
  "tenquan": "Hủ Tiếu Minh",
  "diachi": "72 Đề Thám, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.78982693123!2d105.78008821431283!3d10.034194992827706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a062a074494fe9%3A0x35727c0064486226!2zNzIgxJDhu4EgVGjDoW0sIEFuIEPGsCwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1513959051667",
  "loaithucan": "Hủ tiếu",
  "giomocua": [
    {
      "gio": "6",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "22",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Hủ tiếu xương",
      "gia": "35000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d30006803fa675e3c987c"),
  "tenquan": "Dì Vân - Hủ Tiếu Hoành Thánh",
  "diachi": "78 Đề Thám, P. Tân An, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.7873639080226!2d105.77987331431287!3d10.03439799282758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0881fd89feb3d%3A0xd505671b04299d6f!2zNzggxJDhu4EgVGjDoW0sIEFuIEPGsCwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1513959401000",
  "loaithucan": "Hủ tiếu",
  "giomocua": [
    {
      "gio": "7",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "22",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Hủ tiếu xương lớn",
      "gia": "38000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d319c6803fa89493c9879"),
  "tenquan": "Cháo Sò",
  "diachi": "85 Lý Tự Trọng, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.7688835944296!2d105.7758673143129!3d10.03592099282654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0881ee41bfe5b%3A0x78258db657f96664!2zODUgTMO9IFThu7EgVHLhu41uZywgQW4gUGjDuiwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1513959813179",
  "loaithucan": "Cháo",
  "giomocua": [
    {
      "gio": "17",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "21",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Cháo thập cẩm",
      "gia": "20000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d32e06803fa89493c987a"),
  "tenquan": "Will & Cin - Cháo & Cơm Ếch Singapore ",
  "diachi": "205A Nguyễn Thị Minh Khai, P. Xuân Khánh, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.8941773702!2d105.7760168143128!3d10.025590792833613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08826ef1bc8af%3A0x272eafd9f70fa8f9!2zMjA1IE5ndXnhu4VuIFRo4buLIE1pbmggS2hhaSwgWHXDom4gS2jDoW5oLCBOaW5oIEtp4buBdSwgQ-G6p24gVGjGoSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1513960143308",
  "loaithucan": "Cháo",
  "giomocua": [
    {
      "gio": "17",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "20",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Cháo ếch",
      "gia": "35000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d33c56803fa705e3c987f"),
  "tenquan": "Cháo Quảng",
  "diachi": "40 Nguyễn Khuyến, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.793187725699!2d105.78072031431289!3d10.033917992827895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a062a012cba0e7%3A0x4d212065779e8596!2zNDAgTmd1eeG7hW4gS2h1eeG6v24sIEFuIEPGsCwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1513960357138",
  "loaithucan": "Cháo",
  "giomocua": [
    {
      "gio": "6",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "21",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Cháo Quãng",
      "gia": "28000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d9aa76803fa705e3c9880"),
  "tenquan": "Enishi - Nhà Hàng Nhật",
  "diachi": "21 Trần Ðại Nghĩa, Phường Cái Khế, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.6615434400987!2d105.78394891431294!3d10.044762592820481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a062a8eb7982c5%3A0x644cd57047406b4e!2zMjEgVHLhuqduIMSQ4bqhaSBOZ2jEqWEsIEPDoWkgS2jhur8sIE5pbmggS2nhu4F1LCBD4bqnbiBUaMahLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1513066922346",
  "loaithucan": "Nhà hàng",
  "giomocua": [
    {
      "gio": "11",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "22",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Sushi tổng hợp 5 loại",
      "gia": "150000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d9c936803faf25e3c9880"),
  "tenquan": "Pappa Roti - Sense City",
  "diachi": "1 Hòa Bình, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.77509659003!2d105.78440831431286!3d10.035408992826909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a062a1749af73b%3A0xf1ef92281ccd07ed!2zMSBIb8OgIELDrG5oLCBUw6JuIEFuLCBOaW5oIEtp4buBdSwgQ-G6p24gVGjGoSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1513987054436",
  "loaithucan": "Bánh",
  "giomocua": [
    {
      "gio": "8",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "21",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Pappa Roti",
      "gia": "12000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d9d6b6803fa705e3c9881"),
  "tenquan": "Bánh Ngọt 29",
  "diachi": "33 Đề Thám, P. An Cư, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.7954540868773!2d105.78075441431287!3d10.033731192828043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a062a013d8c11f%3A0x1738c8e759d8a6ca!2zMzMgxJDhu4EgVGjDoW0sIEFuIEPGsCwgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1513987404235",
  "loaithucan": "Bánh ngọt",
  "giomocua": [
    {
      "gio": "16",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "22",
      "phut": "00"
    }
  ],
  "tenmon": [
    {
      "ten": "Bông lan trứng muối",
      "gia": "7000"
    }
  ]
});
db.getCollection("quan").insert({
  "_id": ObjectId("5a3d9e5e6803fab0593c9883"),
  "tenquan": "Bánh Ngọt Delimanjoo - Lotte Mart",
  "diachi": "84 Mậu Thân, P. An Hòa, Quận Ninh Kiều, Cần Thơ",
  "glmapcode": "https:\/\/www.google.com\/maps\/embed?pb=!1m18!1m12!1m3!1d3928.700908474084!2d105.76494431431284!3d10.041520992822692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08811aa6dada3%3A0x46a23eaa81de794e!2zODQgTeG6rXUgVGjDom4sIEFuIEjDsmEsIE5pbmggS2nhu4F1LCBD4bqnbiBUaMahLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1513987563880",
  "loaithucan": "Bánh ngọt",
  "giomocua": [
    {
      "gio": "8",
      "phut": "00"
    }
  ],
  "giodongcua": [
    {
      "gio": "21",
      "phut": "30"
    }
  ],
  "tenmon": [
    {
      "ten": "Dell Majoo (bánh bắp)",
      "gia": "2300"
    }
  ]
});
