# Term Project | RESERVE A TENT @เชียงราย
<h3 align="center">ระบบจองลานกางเต็นท์ภายในจังหวัดเชียงราย</h3>
<h4 align="center">ระบบจองลานกางเต็นท์โดยจะถูกออกแบบมาเพื่อผู้ใช้งานทั่วไป (Client) </h4> <br>
<h4> โดยในไฟล์ index.html จะมีตัวเลือกให้เลือก 2 ตัวเลือก</h4>
<b><u>(ซึ่งหากนำผลงานไป Implement จริงจะไม่มีการใส่หน้า Index.html ให้ผู้ใช้เลือก)</u></b>
<ul>
    <li>User Mode</li>
    <li>Admin Mode</li>
</ul>

# Data Dictionary 📖

```
{
"booking": [
{
"id": 1,
"location": "Camping is life",
"check in": "2023-01-08",
"check out": "2023-01-09",
"adult": "1",
"children": "0",
"firstname": "qwert",
"lastname": "yuio",
"email": "tinegak215@nubotel.com",
"phone": "0661140738",
"tent": "N/A",
"tent_amount": "N/A",
"fishing": 200,
"moo-gata": "N/A",
"moo-gata-size": "N/A",
"total price": 400
}
],
"location": [
{
"id": 1,
"name": "Camping is life",
"img":
"https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/314120393_564962512276044_307674118878567834_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGljxcPszkRHwmxxY2NFo0kKVD-24RqEsQpUP7bhGoSxBPAVTWdM5aT4HO_vRld3v3FaiA2wpVgyamuStU3S0N_&_nc_ohc=32xjuF3AEaMAX_dwr-W&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfCU1ZaToHIqoTZsC8JC1G_cTB_zoG7rzysSbyA_M1TYHg&oe=63B9BA8A"
},
{
"id": 2,
"name": "Pha hee",
"img": "https://www.palapilii.com/wp-content/uploads/2019/09/DJI_0031.jpg"
},
{
"id": 3,
"name": "Phu chee dao",
"img": "https://s359.kapook.com/pagebuilder/88bb96f1-d403-4430-bb0f-51e17010c802.jpg"
}
]
}
```
<table style="border: red solid 1px;">
    <thead>
        <h2><b>booking :</b></h2>
    </thead>
    <tr>
        <th>Attribute Name</th>
        <th>Description</th>
        <th>Data Type</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>id</td>
        <td>ID ของผู้ใช้</td>
        <td>Int</td>
        <td>1</td>
    </tr>
    <tr>
        <td>location</td>
        <td>ข้อมูลสถานที่ที่ผู้ใช้จอง</td>
        <td>String</td>
        <td>Camping is life</td>
    </tr>
    <tr>
        <td>check in</td>
        <td>วันที่ผู้ใช้จะ Check in</td>
        <td>String</td>
        <td>2023-01-08</td>
    </tr>
    <tr>
        <td>check out</td>
        <td>วันที่ผู้ใช้จะ Check out</td>
        <td>String</td>
        <td>2023-01-10</td>
    </tr>
    <tr>
        <td>adult</td>
        <td>จำนวนคน(ผู้ใหญ่)</td>
        <td>String</td>
        <td>1</td>
    </tr>
    <tr>
        <td>children</td>
        <td>จำนวนคน(เด็ก)</td>
        <td>String</td>
        <td>1</td>
    </tr>
    <tr>
        <td>firstname</td>
        <td>ชื่อจริงของผู้จอง</td>
        <td>String</td>
        <td>Lorem</td>
    </tr>
    <tr>
        <td>lastname</td>
        <td>นามสกุลจริงของผู้จอง</td>
        <td>String</td>
        <td>Ipsum</td>
    </tr>
    <tr>
        <td>email</td>
        <td>อีเมลของผู้จอง</td>
        <td>String</td>
        <td>example@mail.com</td>
    </tr>
    <tr>
        <td>phone</td>
        <td>เบอร์โทรศัพท์ของผู้จอง</td>
        <td>String</td>
        <td>0845681275</td>
    </tr>
    <tr>
        <td>tent</td>
        <td>ราคาเต็นท์ที่ผู้จองเลือก(หากมีให้เช่า)</td>
        <td>String</td>
        <td>500</td>
    </tr>
    <tr>
        <td>tent_amount</td>
        <td>จำนวนเต็นท์ที่ผู้จองต้องการ (หากมี)</td>
        <td>Int</td>
        <td>2</td>
    </tr>
    <tr>
        <td>fishing</td>
        <td>ค่าใช้จ่ายสำหรับการตกปลา (หากมี)</td>
        <td>Int</td>
        <td>200</td>
    </tr>
    <tr>
        <td>moo-gata</td>
        <td>ราคาหมูกระทะ</td>
        <td>Int</td>
        <td>500</td>
    </tr>
    <tr>
        <td>moo-gata-size</td>
        <td>Size ของหมูกระทะ</td>
        <td>String</td>
        <td>Large</td>
    </tr>
    <tr>
        <td>total price</td>
        <td>ราคารวมทั้งหมด</td>
        <td>Int</td>
        <td>1250</td>
    </tr>
</table>


<table style="border: red solid 1px;">
    <thead>
        <h2><b>location :</b></h2>
    </thead>
    <tr>
        <th>Attribute Name</th>
        <th>Description</th>
        <th>Data Type</th>
        <th>Example</th>
    </tr>
    <tr>
        <td>id</td>
        <td>id ของสถานที่ที่มีลานกางเต็นท์ให้บริการ</td>
        <td>Int</td>
        <td>1</td>
    </tr>
    <tr>
        <td>name</td>
        <td>ชื่อสถานที่ที่มีลานกางเต็นท์ให้บริการ</td>
        <td>String</td>
        <td>Camping is life</td>
    </tr>
    <tr>
        <td>img</td>
        <td>รูป Thumbnail ของสถานที่</td>
        <td>String</td>
        <td>https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/314120393_564962512276044_307674118878567834_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGljxcPszkRHwmxxY2NFo0kKVD-24RqEsQpUP7bhGoSxBPAVTWdM5aT4HO_vRld3v3FaiA2wpVgyamuStU3S0N_&_nc_ohc=32xjuF3AEaMAX_dwr-W&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfCU1ZaToHIqoTZsC8JC1G_cTB_zoG7rzysSbyA_M1TYHg&oe=63B9BA8A</td>
    </tr>
</table>



# Languages and Tools: 🛠
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="30" width="42"
    alt="javascript logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="30" width="42"
    alt="html5 logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="30" width="42"
    alt="css3 logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="30" width="42"
    alt="nodejs logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" height="30" width="42"
    alt="bootstrap logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="30" width="42"
    alt="vscode logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="30" width="42"
    alt="git logo" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" height="30" width="42"
    alt="photoshop logo" />
<br><br>


# ลิงค์คลิป Youetube :
<div align="left">
    <a href="https://youtu.be/BZJGVPRGCu8"> <img
            src="https://img.shields.io/static/v1?message=Youtube&logo=youtube&label=&color=FF0000&logoColor=white&labelColor=&style=for-the-badge"
            height="35" alt="youtube logo" /></a>
</div>

# สมาชิคในกลุ่ม : 🤷‍♀️🤷‍♂️
- 64100738 นายกษิดิศ บุญชัย
- 64107899 นายปณชัช เอี่ยมน้ำ
- 64110455 นายภัครศักดิ์ ผลสนอง
- 64105653 นายธนวัฒน์ ศรีวิไล
<br><br>

<img height="150" width="150"
    src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.6435-9/201405049_1847816755385571_2670212922367768769_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFAFKYz2ArYiUbeeIGRUaJs4xgaf3KlH0PjGBp_cqUfQ_twLZ5XiNJzyFJKLfTZwgityaQCNiLTciDVMGveIblS&_nc_ohc=GA8y5qsG7q0AX9-4LbX&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfCBWK_tYkDCAvh3U9EbWDpOuXLOttmVRNFpqq-a4npsVw&oe=63E1222F" />
<img height="150" width="150"
    src="https://scontent.fbkk5-1.fna.fbcdn.net/v/t39.30808-6/305394568_3276453505919533_6814107495766527086_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFtfLmnJIbEEMUuJPekWh1Haut3pq7ujSJq63emru6NIh3eKMHNmzOvwj0Y9v3SOEeMqA_H1VN85iWzgyaVL23I&_nc_ohc=_axZ95bpn3AAX_mbTFI&_nc_ht=scontent.fbkk5-1.fna&oh=00_AfC8sCwscAIqVUMNALUfRUcr0fRV-Pv-rYAk7RnH_lftng&oe=63BF2B20" />
<img height="150" width="150"
    src="https://scontent.fbkk5-7.fna.fbcdn.net/v/t1.6435-9/117971784_816525632424689_2384813281654072884_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEN7MGgIAbeyDL_pgrw8-AitI5aAtXyEyy0jloC1fITLHIGaBbDb7lerMxthBWYDh9ID9CWIKW8nkKLveICm0EC&_nc_ohc=2K0YxgLCZ0gAX-UA_2s&tn=1pOkLK-yWkOb_Jrk&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfD2LRMsL6JhYHV9YMsmnay8-4X17Bv-S2x1rpoBhGv4Cg&oe=63E106B7" />
<img height="150" width="150" src="https://www.dip.go.th/uploadcontent/MSA/Contact/executive_SQUARE_unoccupy.png" />
<br><br>


# หลักสูตรเทคโนโลยีสารสนเทศและนวัตกรรมดิจิทัล สำนักวิชาสารสนเทศศาสตร์ 🏫
<div>
    <img height="300" width="300"
        src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/279560270_5821053641244444_1641496247686643675_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF0EY1X0Qdhl07UJiFQsaVZWylXctbtv-pbKVdy1u2_6tf9k1Ytpc8jIphmM3ZHSVw5BcDktrmF-SyZmjBluAYm&_nc_ohc=cuLkhutHAIsAX-6WoFW&_nc_ht=scontent.fbkk5-5.fna&oh=00_AfChkK43-YQ1dkymkyoYMlRPgTSO4xj8-EzDtsU5lP-ipw&oe=63BDC9E6" />