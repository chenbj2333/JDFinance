module.exports = {
  'GET:/home/novice': [
    { id: '1', title: '京渤随享盈', subtitle: '90天可质押', number: '5.50%', text: '历史年化收益率' },
    { id: '2', title: '年年盈', subtitle: '理财推荐', number: '5.10%', text: '综合年化收益率' },
    { id: '3', title: '建信养老飞益鑫', subtitle: '1000起投', number: '4.72%', text: '近7日年化收益' },
    { id: '4', title: '小白基金', subtitle: '超短期', number: '4.50%', text: '7日年化收益率' }
  ],
  'GET:/home/product': [
    {
      id: '01',
      url: 'https://img12.360buyimg.com/jrpmobile/jfs/t21559/102/59104594/47942/f8d9e459/5af9055dN55aa9554.jpg?width=335&height=421',
      href: '',
    },
    {
      id: '02',
      url: 'https://img12.360buyimg.com/jrpmobile/jfs/t21364/117/63805922/48719/7d9b8fb4/5af9056aN106a173e.jpg?width=335&height=421',
      href: '',
    },
    {
      id: '03',
      url: 'https://img12.360buyimg.com/jrpmobile/jfs/t16717/179/2537323270/43542/a5a5e4c/5af90576Ndba39333.jpg?width=335&height=421',
      href: '',
    }
  ],
  'GET:/home/secure': [
    {
      id: '01',
      url: 'https://img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&height=260',
      href: '',
    },
    {
      id: '02',
      url: 'https://img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260',
      href: '',
    },
    {
      id: '03',
      url: 'https://img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260',
      href: '',
    },
    {
      id: '04',
      url: 'https://img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260',
      href: '',
    },
    {
      id: '05',
      url: 'https://img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260',
      href: '',
    }
  ],
  'POST:/sys/noticeinfo': (req, res) => {
    res.status(200).send('保存成功')
  },
  'DELETE:/sys/noticeinfo/:id': (req, res) => {
    res.status(200).send('')
  },
  'PUT:/sys/noticeinfo/:id': (req, res) => {
    // res.setHeader('X-PEP-ERR-TYPE', 'PEP_BIZ_ERR');
    // res.status(500).send('保存失败!!!');
    res.status(200).send('保存成功')
  }
}
