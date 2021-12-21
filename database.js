
const producs = [
    {
        id: 1,
        name: '20 quả trứng vịt lộn',
        price: 200,
        address: 'Hà Nội',
        img: 'https://64.media.tumblr.com/7111feb3f9b20cadb1fca92d4aaf62f9/tumblr_of8kz3Im0h1qbd81ro1_1280.jpg'
    },
    {
        id: 2,
        name: 'Củ Hoa Ly Lùn Đủ màu',
        price: 150,
        address: 'Hải Phòng',
        img: 'https://64.media.tumblr.com/d1b06afb69cf8b615690ff734129e902/f04605d2cb559bfc-d8/s1280x1920/f91d82446d71c5ee9ace99af4936adcd5549d93f.jpg'
    },
    {
        id: 3,
        name: 'Chai nhựa Tròn Nắp Đen 500ml- Chai Nhựa Tròn 500ml-Sản Phẩm Đã Kèm Nắp',
        price: 300,
        address: 'Cần thơ',
        img: 'https://64.media.tumblr.com/a22dda63a0e8494c72014ba494697cad/3107f3becb2c1c93-84/s1280x1920/63adcda31e4e6c9a9c99d2a99d848838ee398f2c.jpg'
    },
    {
        id: 4,
        name: 'Sơn phun bóng , Sơn sít ATM không màu A10',
        price: 5000,
        address: 'Ba Vì',
        img: 'https://64.media.tumblr.com/8557efab510c5fde895b13e7ec0b9a02/a18bea4e7acd8b18-b0/s1280x1920/fde6d88a3e7293d333eb485f7e0cfb2ccc5fef88.jpg'
    },
    {
        id: 5,
        name: 'Bộ 3 nồi inox SHARP dùng được cho cả bếp từ và gas',
        price: 2200,
        address: 'Tuyên Quang',
        img: 'https://64.media.tumblr.com/7c367a2afa980cc707c235dba9209f91/tumblr_ptjwbdpM0b1qzer7p_1280.png'
    },
    {
        id: 6,
        name: 'Chai nhựa pet 1lit nắp nhựa, nắp thiếc loại dày fi 28',
        price: 21200,
        address: 'Hải Phòng',
        img: 'https://64.media.tumblr.com/c081f03eed64c2fc7e44c5302629c9e0/tumblr_oqphqntx3W1qbd81ro1_1280.jpg'
    },
    {
        id: 7,
        name: 'Combo 20 Kẹp Ảnh Gỗ Thông+Dây Đèn Led Xài Điện 8M Không Chớp Nháy Trang Trí Decor',
        price: 2030,
        address: 'Bắc Ninh',
        img: 'https://64.media.tumblr.com/4f648fb365c1501f91d3b3cb9415dcf0/tumblr_oqi1tr4Wpb1qbd81ro1_1280.jpg'
    },
    {
        id: 8,
        name: 'Hạt Giống Bí Đỏ Hạt Đậu Lai F1 Năng Suất Cao 1gr',
        price: 2080,
        address: 'Hà Giang',
        img: 'https://64.media.tumblr.com/126ac5aa7f2ac01ff40c5ddc4aa5dc88/tumblr_oq9eestVEW1qbd81ro1_1280.jpg'
    },
    {
        id: 9,
        name: 'Mặt nạ phòng độc Liên Xô cỡ 2Y, 3Y, 4Y',
        price: 220,
        address: 'Nam Định',
        img: 'https://64.media.tumblr.com/cc3475c196cd02ed14394c2125fbe1df/tumblr_oq2xixXJPw1qbd81ro1_1280.jpg'
    },
    {
        id: 10,
        name: 'Quạt mini tích điện cầm tay có đế để bàn 3 tốc độ gió N9 -GD220',
        price: 85620,
        address: 'Bắc Giang',
        img: 'https://64.media.tumblr.com/699f76f769c67a7040fd08994c5d777c/tumblr_oq2xipwbRo1qbd81ro1_1280.jpg'
    },
    {
        id: 11,
        name: 'Combo 10 miếng sáp Chấm Đá dùng cho tranh đính đá',
        price: 523,
        address: 'Trung Quốc',
        img: 'https://64.media.tumblr.com/831f5ccd1485dc422ce50451c87a5907/tumblr_oq057wgqY31qbd81ro1_1280.jpg'
    },
    {
        id: 12,
        name: 'Hạt Giống Hoa Mười Giờ Mỹ Mix gói 100 Hạt',
        price: 4582,
        address: 'America',
        img: 'https://64.media.tumblr.com/023b3f8c53c3c42b68de422961b083cc/tumblr_oq057uTo5H1qbd81ro1_1280.jpg'
    },
    {
        id: 13,
        name: '10 quả trứng gà',
        price: 856,
        address: 'Hàn Quốc',
        img: 'https://64.media.tumblr.com/2e92492b4ef515124540a47aeb987e07/tumblr_oq057oN7le1qbd81ro1_1280.jpg'
    },
    {
        id: 14,
        name: 'Set nỉ kian năng động đầy phong cách',
        price: 572,
        address: 'Cần Thơ',
        img: 'https://64.media.tumblr.com/e8dadc184fe67cb00511e3e243f5513f/tumblr_oq057bxGTL1qbd81ro1_1280.jpg'
    },
    {
        id: 15,
        name: 'Chai Nhựa Vuông Dẹp 330ml - Kho Sỉ Chai Lọ Huỳnh Hiệp - Sản Phẩm đã kèm nắp',
        price: 85752,
        address: 'Ninh Bình',
        img: 'https://64.media.tumblr.com/c2b359d90b868247565a37b4f70ea2d9/tumblr_omu6agTv6b1qbd81ro1_1280.jpg'
    },
    {
        id: 16,
        name: 'Cơm cháy lắc khô bò 300g DumBum đồ ăn vặt Hà Nội vừa ngon vừa rẻ',
        price: 555,
        address: 'Hà Nội',
        img: 'https://64.media.tumblr.com/fdce8d90185f8f38a5f36a69b198a271/tumblr_ojqkfv1h7c1qbd81ro1_1280.jpg'
    }
]

const cart = [
    {
        id: 1,
        name: '20 Quả trứng vịt lộn',
        price: 200,
        quantity: 1
    }
]

export default producs