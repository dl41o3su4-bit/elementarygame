# 生活偵探（5–7 歲）

這不是學齡前的「小狐狸學堂」。這是第一個國小生活遊戲：孩子當偵探，看家裡真的發生的事。

螢幕是教練，不是做家事模擬。這裡不會把衣服拖進籃子、不會點一下就假裝洗好。孩子看圖、看真的照片，再回到家裡真的動手。

## 現在可以玩

- 第一案：**白衣服洗完為什麼變粉紅？**
- 第二案：**葉子為什麼軟掉了？**（土還濕，先不要澆）

## 怎麼玩

用手機或電腦打開 `index.html`，點第一張卡片。

1. 先看到現象：白衣服洗完變粉紅。
2. 看四個線索。每一個都是 **圖畫 + 真的照片** 並排。
3. 指一下是誰把顏色跑出來。答對是「新的紅衣服」。答錯不會罵，再看就好。
4. 用小朋友的話記住規則：新的、紅的、深的，下次分開洗。
5. 結束不是分數。是下次真的洗衣服時，站旁邊分一分。

## 為什麼 5–7 歲這樣做

這個年紀，螢幕負責講清楚、帶著看。手要在家裡真的衣服上練習。

**AR 是之後 8–10 歲的事。** 現在不要做成掃一掃、點虛假家事。5–7 歲是教練 + 真實對照 + 下次真的做。

## 圖畫跟「真的」

- **圖畫**：給小朋友看故事的插畫。標了「圖畫」，不是照片。
- **真的**：從網路上載下來的真實照片（Wikimedia Commons、Pexels）。不是電腦生出來假裝成真的圖。
- 沒找到「剛好洗成粉紅那一次」的完美照片。粉紅衣服那張，用的是真的粉紅衣服，畫面會老實講。

## 真實照片來源

| 用在哪 | 檔案 | 來源 | 授權 |
| --- | --- | --- | --- |
| 開場：從洗衣機拿衣服（紅衣服混在白衣服裡） | `photos/real-laundry-out.jpg` | [Pexels / cottonbro studio #5901622](https://www.pexels.com/photo/man-taking-laundry-out-of-the-washing-machine-5901622/) | Pexels License |
| 線索：粉紅衣服 | `photos/real-pink-tee.jpg` | [Wikimedia：Pink "Welders" T-Shirt](https://commons.wikimedia.org/wiki/File:Pink_%22Welders%22_T-Shirt_Worn_by_the_Welders_-_DPLA_-_b0a00013064a4280e484f55149cb7174_(page_1).jpg)（Missouri Historical Society / DPLA） | 美國公有領域標示 |
| 線索：新的紅衣服 | `photos/real-red-new.jpg` | [Wikimedia：Red T shirt "Gaillard"](https://commons.wikimedia.org/wiki/File:Red_T_shirt_%22Gaillard,_fabriqu%C3%A9_%C3%A0_Brive%22.JPG)，Le grand Cricri | CC BY-SA 3.0 |
| 線索：舊的深色衣服 | `photos/real-dark-old.jpg` | [Wikimedia：Full Count Denim Fade](https://commons.wikimedia.org/wiki/File:Full_Count_Denim_Fade.jpg)，Coldwrld | CC BY-SA 4.0 |
| 線索：顏色跑進水裡 | `photos/real-dye-water.jpg` | [Wikimedia：CSIRO Textile Dye in Water](https://commons.wikimedia.org/wiki/File:CSIRO_ScienceImage_2797_Textile_Dye_in_Water.jpg)，CSIRO | CC BY 3.0 |


| 開場：葉子軟掉 | `photos/real-wilt.jpg` | Wikimedia PeperomiaDying | 依原檔授權 |
| 線索：土還濕 | `photos/real-wet-pot.jpg` | Pexels 澆水／噴霧 | Pexels License |
| 線索：土的乾濕對照 | `photos/real-dry-soil.jpg` | Pexels 乾裂地（不是花盆底） | Pexels License |
| 線索：它站在有光的地方 | `photos/real-shade.jpg` | 窗邊植物（不是沙發後面的暗） | 依原檔授權 |

插畫在 `art/`。標「圖畫」的不會假裝是照片。

## 怎麼打開

這是單一連靜態網站，不用安裝、不用 build。

在盒子上：

```bash
cd /workspace/elementarygame
python3 -m http.server 8765
```

瀏覽器打開：

- 首頁：http://127.0.0.1:8765/
- 粉紅衣服案：http://127.0.0.1:8765/cases/pink-laundry/
- 葉子軟掉案：http://127.0.0.1:8765/cases/droop-leaf/

也可以直接用瀏覽器開 `index.html`。手機直式最好看，按鈕很大。

## 還薄的地方

- 沒有「白衣服剛洗成粉紅」的現場照片。粉紅線索用真的粉紅衣服代替，文案有講。
- 染料入水是紡織染料在水裡，不是家裡洗衣槽特寫。意思對，場景不是廚房。
- 舊衣服圖畫是深色上衣，真的照片是舊牛仔褲。都是「舊的深色」，形狀不一樣。
- 結束畫面的分籃圖還比較簡。
- 植栽案：沒有「盆底積水」照片。乾裂地只拿來對乾濕；回家看自己的盆底。
- 還沒有語音朗讀，也還沒有家裡自己拍的對照照。

## 不要做的事

不要做成拖衣服、點洗、虛擬家事。不要碰 `childgame`。AR 以後再說。
