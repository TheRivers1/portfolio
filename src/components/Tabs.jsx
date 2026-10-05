export default function Tabs({ buttons, children, TabsContainer = "menu" }) {
  return (
    <>
      <TabsContainer>{buttons}</TabsContainer>
      {children}
    </>
  );
}
