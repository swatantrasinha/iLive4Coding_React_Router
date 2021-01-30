Here I have used material-ui to create top-nav similar to the one shown in video

we will see use of : 
- useLocation hook 
- how to get query param using useLocation hook


--------------------------------------------------------------------------------------------------------------
HeaderComp.js
==============
 <li className="nav-item">
    
            <Button onClick={openMenu}>Award</Button>
                      <Menu open={buttonStatus} >
                          <MenuItem onClick={closeMenu}>
                              <Link to="/national?language=kanada"> National</Link>
                          </MenuItem>

                          <MenuItem onClick={closeMenu}>
                              <Link to="/international?language=french">International</Link>
                          </MenuItem>
                      </Menu>
</li>

--------------------------------------------------------------------------------------------------------------  
MyRoutes.js
===========
 <Route path="/national" component={Natinal_Award_Comp}/> 
 <Route path="/international" component={International_Award_Comp}/> 

--------------------------------------------------------------------------------------------------------------  
National_Award-Comp.js
======================
  const myQuery = new URLSearchParams(useLocation().search);
    const lang = myQuery.get('language');
    console.log('language is  : ' , lang);

--------------------------------------------------------------------------------------------------------------

