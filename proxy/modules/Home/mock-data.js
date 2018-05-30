module.exports = {
  'GET:/home/novice': [
    { id: '1', title: '京渤随享盈', subtitle: '90天可质押', number: '5.50%', text: '历史年化收益率' },
    { id: '2', title: '年年盈', subtitle: '理财推荐', number: '5.10%', text: '综合年化收益率' },
    { id: '3', title: '建信养老飞益鑫', subtitle: '1000起投', number: '4.72%', text: '近7日年化收益' },
    { id: '4', title: '小白基金', subtitle: '超短期', number: '4.50%', text: '7日年化收益率' }
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
