import Button from 'vbcc-nextjs-starter/dist/components/Button';

export default function Home() {
  const handleClick = () => {
    alert('企业风格按钮被点击！');
  };

  return (
    <div style={{ padding: '24px' }}>
      <h1>业务系统首页</h1>
      <Button onClick={handleClick}>点击我</Button>
    </div>
  );
}