const imgCase = (num) => {
  switch (num) {
    case 1:
      return 'https://www3.nhk.or.jp/news/html/20221208/K10013917441_2212081856_1208191618_01_02.jpg'
      break
    case 2:
      return 'https://www3.nhk.or.jp/news/html/20221204/K10013912691_2212041544_1204155659_01_02.jpg'
      break
    case 3:
      return 'https://www3.nhk.or.jp/news/html/20230104/K10013940331_2301031450_0103152833_01_02.jpg'
      break
    case 4:
      return 'https://www3.nhk.or.jp/news/html/20221122/K10013900291_2211221718_1122181633_01_02.jpg'
      break
    case 5:
      return 'https://www3.nhk.or.jp/news/html/20221101/K10013876431_2210312057_1031210145_01_02.jpg'
      break
    case 6:
      return 'https://www3.nhk.or.jp/news/html/20221108/K10013883761_2211072004_1108062600_01_02.jpg'
      break
    default:
      break
  }
}
const titleCase = (num) => {
  switch (num) {
    case 1:
      return '今年いちばんすばらしい車は軽自動車の大きさの電気自動車'
      break
    case 2:
      return '日本での生産を増やす会社が増える'
      break
    case 3:
      return '今年もいろいろな食べ物の値段が上がる'
      break
    case 4:
      return '外国人のために食事の材料を絵で知らせる'
      break
    case 5:
      return '食べ物の値段が上がる　家庭はもっと大変になりそう'
      break
    case 6:
      return '品物を届ける人が足りない　買い物した人に遅く届ける実験'
      break
    default:
      break
  }
}
const dateCase = (num) => {
  switch (num) {
    case 1:
      return '12月9日 16時30分'
      break
    case 2:
      return '12月6日 12時00分'
      break
    case 3:
      return '1月5日 12時00分'
      break
    case 4:
      return '11月24日 16時10分'
      break
    case 5:
      return '11月2日 16時15分'
      break
    case 6:
      return '11月10日 12時00分'
      break
    default:
      break
  }
}
const descriptionCase = (num) => {
  switch (num) {
    case 1:
      return '     自動車の専門家は毎年、1年に売り出した新しいタイプの車の中から、いちばんすばらしい車を選んで賞を決めています。\n        今年は、日産自動車と三菱自動車工業が一緒に作った電気自動車の「サクラ」と「eKクロスEV」がいちばんになりました。普通の車より小さい軽自動車のタイプの電気自動車です。\n        専門家は、高すぎない値段の小さい車を作って、電気自動車を買いやすくしたことがよかったと言っています。軽自動車の電気自動車がこの賞をもらったのは、初めてです。\n        今年は、日本で電気自動車を売る会社が増えて、1月から10月までに3万9000台以上売れました。これは去年の2.8倍で、今まででいちばん多くなっています。来年は中国の会社が日本で電気自動車を売り始める予定で、競争が激しくなりそうです。'
      break
    case 2:
      return '     円が安くなったことや、外国で働く人の給料が高くなったことが原因で、日本での生産を増やす会社が増えています。\n        福岡市の「やまやコミュニケーションズ」は、魚の卵から作るめんたいこの会社です。この会社は、40年前から外国でめんたいこを生産しています。ベトナムでは、生産を始めた2014年と比べて、給料などに必要なお金が3倍以上になりました。このため会社は、来年4月から日本で売るめんたいこを福岡県で生産します。\n        新型コロナウイルスの問題などで、外国から部品が届かなくなることを心配する会社もあります。「JVCケンウッド」は、日本で売るカーナビをインドネシアで生産していましたが、今年から長野県で生産しています。\n        経済産業省は、日本に新しい工場などを作る会社にお金を出しています。'
      break
    case 3:
      return '     材料などが高くなっているため、今年もいろいろな食べ物の値段が上がりそうです。1月はお好み焼きの粉やパスタなど、小麦粉を使った物が高くなります。パスタのソースやドレッシング、缶詰、お菓子も高くなる物があります。\n        調査会社によると、今年1月から4月に高くなる食べ物や飲み物は7152種類です。1年前の1.5倍に増えています。2月は特に多くて、4200種類以上あります。\n        別の会社によると、食べ物などの値段が上がったため、今年3月までの1年に2人以上の家庭が使うお金は、去年3月までの1年より9万6000円以上増えそうです。会社は、4月からも値段が上がるため、収入が少ない家庭がこれからもっと大変になると言っています。'
      break
    case 4:
      return '     物の値段が上がっています。11月もいろいろな食べ物の値段が上がっています。\n        明治や森永乳業などは、牛乳やヨーグルトを今までより2％から12.5％高くしました。エバラ食品工業は「焼肉のたれ」など29の商品を7％から38％高くしました。会社は30年以上この商品を高くしていませんでした。お湯を入れるだけで食べることができるお茶漬けやみそ汁なども高くなりました。\n        毎日必要な赤ちゃんのミルクや、体が弱いお年寄りのための食べ物も11月から高くなっています。食べ物の値段が上がって、家庭は今までよりももっと大変になりそうです。'
      break
    case 5:
      return '     2025年に大阪で、世界の国が文化や技術などを紹介する「大阪・関西万博」があります。\n        関西の経済団体などは22日、大阪市のホテルで、食事に使っている材料を「ピクトグラム」というわかりやすい絵で知らせる実験をしました。外国人が宗教やアレルギーなどで食べることができない物があっても、安心して食事を楽しんでもらうためです。\n        インドネシアやベトナムからの留学生など19人が集まって、ホテルが用意した朝ごはんを食べました。料理のそばに、卵や牛肉、豚肉など使っている材料がすぐにわかるようなピクトグラムがあります。\n        インドネシアから来たイスラム教の留学生は「豚肉を食べることができませんが、絵があるとわかりやすいです。旅行に来る外国人にも役に立つと思います」と話していました。'
      break
    case 6:
      return '     インターネットで品物を売る会社は、買い物した人にできるだけ早く品物を届けようとしています。しかし、品物を運ぶ仕事をする人が足りないため、品物を遅く届ける実験をしています。\n        生活に必要な物を売る「LOHACO」では、買い物した人が、品物が着く日を、買った日の3日あとから7日あとまで選ぶことができます。品物が着く日を遅くした人には、ポイントをあげます。\n        このやり方で、同じときに届ける品物が集まらないようにします。8月から決まった日にこの実験を行っていて、買い物した人の半分ぐらいが、品物が着く日を遅くしています。\n        会社の人は「品物がとても多いと、運ぶ人が大変です。運ぶ人にも買い物した人にもいいやり方を考えたいです」と話しています。'
      break
    default:
      break
  }
}

export { imgCase, titleCase, dateCase, descriptionCase }