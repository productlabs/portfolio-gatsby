exports.createPages = async({ actions }) => {
    actions.createSlice({
      id: `navbar`,
      component: require.resolve(`./src/components/Navbar.tsx`),
    });
    actions.createSlice({
        id: `footer`,
        component: require.resolve(`./src/components/Footer.tsx`),
      });
  }