javascript:(function(A)%7Bvar%20R%3D%22hide%22%3Bvar%20h%3D%22%23e3cebd%22%3Bvar%20z%3D%22%23moderator_tools_menu%7Bposition%3Afixed%3Btop%3A10px%3Bleft%3A65px%3Bbackground%3Awhite%3Bborder%3A3px%20solid%3B%20padding%3A%200%203em%200%2010px%3B%7D%23moderator_tools_menu%20a%7Btext-decoration%3Anone%7D%23wordpress-org%20%23moderator_tools_menu%7Bfont-size%3A13px%7D%23wordpress-org%20%23moderator_tools_menu%20span%23close_menu%20span%7Bdisplay%3Anone%3B%20%7Dspan%23detected%20span%7Bdisplay%3Ainline-block%3Bmargin%3A5px%200%3B%7D%20%20%20.shortcut%7Bbackground-color%3A%23cae8f7%3Bpadding%3A1px%203px%3Bdisplay%3Ainline-block%3Bmargin-bottom%3A4px%3Bfont-weight%3Abold%7D%23shortcut_title%7Bdisplay%3Ablock%3Bfont-weight%3Abold%3Bmargin%3A1em%200%7D%23wordpress-org%20%23shortcut_title%7Bdisplay%3Ainline%7D%23shortcut_top%7Bmargin-bottom%3A1em%7D%23close_menu%7Bposition%3A%20absolute%3B%20right%3A%200%3B%20top%3A%205px%3Bpadding%3A0%3Bmargin%3A4px%201em%200%200%3B%20%7D%23close_menu%20a%7Bfont-size%3A1.8em%3Bborder%3A0%3B%7D%23extra_info_text%7Bmargin-right%3A40px%7D.edit_profile_link%7Bdisplay%3Ablock%3Bmargin-top%3A5px%7D%22%2CQ%3D'%3Cspan%20id%3D%22shortcut_title%22%3EShortcuts%20available%20for%20this%20page%3A%3C%2Fspan%3E'%2Cv%3DA('%3Cspan%20id%3D%22shortcuts%22%3E(h)%20%3C%2Fspan%3E%3Ca%20href%3D%22%23%22%3Eshortcuts%3C%2Fa%3E')%2CD%3D'%3Cspan%20class%3D%22shortcut%22%3Em%3C%2Fspan%3E%20-%20show%2Fhide%20menu%3Cbr%2F%3E%3Cspan%20class%3D%22shortcut%22%3Et%3C%2Fspan%3E%20-%20go%20to%20the%20top%20of%20this%20page%20%20%7C%20%3Cspan%20class%3D%22shortcut%22%3Eb%3C%2Fspan%3E%20-%20go%20to%20the%20bottom%20of%20this%20page%3Cbr%2F%3E'%2CN%3DA('%3Cspan%20id%3D%22close_menu%22%3E%3Ca%20href%3D%22%23%22%20%3E%26%2310006%3B%3C%2Fa%3E%3C%2Fspan%3E')%2CV%3DA('%3Cdiv%20id%3D%22moderator_tools_menu%22%3E%3C%2Fdiv%3E')%2Ck%2CE%2CX%2Cl%2CM%3Dfalse%2CI%2CJ%2CY%2Ct%2Cg%2CC%2Cu%2Ce%2Cn%2Cs%2CW%2CG%3Dfalse%2Ci%3D%7B%7D%2Ca%3Dfalse%2Cc%3Dfalse%2Cw%3DA('%3Cspan%20id%3D%22extra_info_text%22%3E%3C%2Fspan%3E')%3Bfunction%20b()%7Bif(%22hide%22%3D%3D%3DR)%7BV.hide()%3BA(%22%23extra_info_text%22).text(%22type%20m%20to%20display%20menu%22)%7Delse%7Bif(%22show%22%3D%3D%3DR)%7BA(%22%23extra_info_text%22).text(%22type%20m%20to%20hide%20menu%22)%7Delse%7BR%3D%22hide%22%3BV.hide()%3BA(%22%23extra_info_text%22).text(%22type%20m%20to%20display%20menu%22)%7D%7D%7Dfunction%20P()%7Bif(A(%22%23moderator_tools_menu%22).length%7C%7CA(%22%23moderator_tools_ed_uncap%22).length)%7Breturn%7Dif(A(%22%23posts-list%22).length)%7Ba%3Dtrue%3Bc%3Dtrue%3BF(%22%23posts%22%2C%22%23post%22)%7Dif(A(%22%23topics-list%22).length)%7BM%3Dtrue%3Ba%3Dtrue%3Bc%3Dtrue%3BF(%22%23topics%22%2C%22%23topic%22)%7Dif(!a)%7Bif(A(%22.mod-login%22).length)%7Bc%3Dtrue%3Bif(A(%22%23profile-form%22).length)%7Bp()%7Dif(A(%22%23user-replies%22).length%7C%7CA(%22%23user-threads%22).length)%7Bm()%7Dif(A(%22.edit-form%22).length)%7Bj()%7Dif(A(%22.forumlist%22).length)%7BS(%22.widefat%22)%7D%7Dif(A(%22%23thread%22).length)%7Br()%7D%7D%7Dfunction%20j()%7Bvar%20ac%3D0%2Cd%3D0%2Caa%3D0%3Bvar%20ab%3DA(%22%23ed_toolbar%22)%3Bif(ab.length)%7Bvar%20Z%3DA('%3Cinput%20id%3D%22moderator_tools_ed_uncap%22%20class%3D%22moderator_tools_ed_button%22%20type%3D%22button%22%20value%3D%22l-case%22%20accesskey%3D%22d%22%3E')%3Bab.append(Z)%3BA(%22%23post_content%22).add(A(%22%23topic%22)).select(function(ad)%7Bac%3Dad.target.selectionStart%3Bd%3Dad.target.selectionEnd%3Baa%3DA(this)%7D)%3BZ.bind(%22click.wpmt%22%2Cfunction(ag)%7Bag.preventDefault()%3Bif(aa)%7Bvar%20af%3Daa.val().substring(ac%2Cd).toLowerCase()%3Bvar%20ad%3Daa.val().substring(0%2Cac)%2Baf%2Baa.val().substring(d)%3Baa.val(ad)%3Baa.focus()%3Bvar%20ae%3Daa.get(0)%3Bae.selectionStart%3Dd%3Bae.selectionEnd%3Dd%7Dac%3Dd%3Daa%3D0%7D)%7D%7Dfunction%20F(ab%2Cd)%7Bvar%20Z%3D%22table.widefat%20tr.current_post%20td%7Bborder%3Asolid%20%239f9f9f%3Bborder-width%3A2px%200%7Dtable.widefat%20tr.current_post%20td.check-column%7Bborder-left%3A2px%20solid%20%239f9f9f%7Dtable%23posts-list%20tr.current_post%20td.date%2Ctable%23topics-list%20tr.current_post%20td.freshness%7Bborder-right%3A2px%20solid%20%239f9f9f%7D%7Bborder-right%3A2px%20solid%20%239f9f9f%7D.normal_span%2C.bozo_span%7Bdisplay%3Ablock%3Bmargin-top%3A10px%3Bcolor%3Awhite%3Btext-align%3Acenter%3Bbackground%3Ared%7D.normal_span%7Bbackground%3Agreen%7D.profile_type%7Bpadding%3A4px%206px%3Bborder%3A1px%20solid%20red%7D.profile_type.green%7Bborder%3A1px%20solid%20green%7D%22%2Caa%3D'%3Cspan%20class%3D%22shortcut%22%3Eh%3C%2Fspan%3E%20-%20show%2Fhide%20shortcuts%3Cbr%2F%3E%3Cspan%20class%3D%22shortcut%22%3Ed%3C%2Fspan%3E%20-%20loop%20through%20Bulk%20Actions%20dropdown%20options%3Cbr%2F%3E%3Cspan%20class%3D%22shortcut%22%3Ea%3C%2Fspan%3E%20-%20select%2Fdeselect%20all%20posts%3Cbr%2F%3E%3Cspan%20class%3D%22shortcut%22%3Es%3C%2Fspan%3E%20-%20select%2Fdeselect%20current%20post%3Cbr%2F%3E%3Cspan%20class%3D%22shortcut%22%3Ee%3C%2Fspan%3E%20-%20edit%20the%20user%20profile%20from%20the%20current%20post%20in%20a%20new%20tab.%20(depending%20on%20your%20browser%20setting)%3Cbr%2F%3E%3Cspan%20class%3D%22shortcut%22%3Ei%3C%2Fspan%3E%20-%20edit%20all%20%3Cspan%20style%3D%22background%3A'%2Bh%2B'%3B%22%3Eselected%20posts%3C%2Fspan%3E%20user%20profiles%20in%20new%20tabs.%20(depending%20on%20your%20browser%20setting)%3Cbr%2F%3E%3Cspan%20class%3D%22shortcut%22%3En%3C%2Fspan%3E%20-%20go%20to%20the%20next%20post%20%7C%20%3Cspan%20class%3D%22shortcut%22%3Ep%3C%2Fspan%3E%20-%20go%20to%20the%20previous%20post%3Cbr%2F%3E'%3Bif(!M)%7Baa%2B%3D'%3Cspan%20class%3D%22shortcut%22%3Ez%3C%2Fspan%3E%20-%20go%20to%20the%20next%20normal%20profile%20post%20%7C%20%3Cspan%20class%3D%22shortcut%22%3Ex%3C%2Fspan%3E%20-%20go%20to%20the%20previous%20normal%20profile%20post%3Cbr%2F%3E%3Cspan%20class%3D%22shortcut%22%3Eshift%20z%3C%2Fspan%3E%20-%20go%20to%20the%20next%20bozo%20profile%20post%20%7C%20%3Cspan%20class%3D%22shortcut%22%3Eshift%20x%3C%2Fspan%3E%20-%20go%20to%20the%20previous%20bozo%20profile%20post%3Cbr%2F%3E'%7Daa%2B%3D'%3Cspan%20class%3D%22shortcut%22%3Emouse%20click%3C%2Fspan%3E%20-%20Click%20in%20the%20%22Author%22%20column%20to%20select%2Fdeselect%20a%20post%20(also%20sets%20the%20post%20to%20current)%3Cbr%2F%3E%3Cspan%20class%3D%22shortcut%22%3Emouse%20click%3C%2Fspan%3E%20-%20Click%20anywhere%20in%20a%20post%20to%20set%20it%20to%20current%2C%20for%20navigation%20with%20the%20shortcuts%20%3Cspan%20class%3D%22shortcut%22%3En%3C%2Fspan%3E%20and%20%3Cspan%20class%3D%22shortcut%22%3Ep%3C%2Fspan%3E%20(see%20above)'%3BA(%22head%22).append('%3Cstyle%20type%3D%22text%2Fcss%22%3E'%2Bz%2BZ%2B%22%3C%2Fstyle%3E%22)%3Bu%3D'%3Cp%20id%3D%22shortcut_list%22%20style%3D%22display%3A%20none%3B%22%3E'%2BQ%2BD%2Baa%2B%22%3C%2Fp%3E%22%3BV.append(v%2CN%2Cu)%3BA(%22body%22).append(V)%3BA(%22%23bbUserInfo%20%3E%20p%22).prepend(w)%3Bb()%3Be%3D%22current_post%22%3Bn%3D%22tr.current_post%22%3Bs%3D%22tr%3Afirst%22%3BW%3DA(ab%2B%22-list%20tbody%20tr%22)%3Bg%3DA(%22%23bbHead%22)%3BC%3DW.last()%3BX%3D%22.check-column%20%3E%20input%22%3BE%3DA(%22thead%20tr%20%22%2BX%2B%22%2Ctfoot%20tr%20%22%2BX)%3Bl%3DA(%22td.author%22)%3BL(d%2B%22-search-form%22)%3Bx(v%2CN)%3BU()%3By()%3Bq()%7Dfunction%20p()%7BA(%22head%22).append('%3Cstyle%20type%3D%22text%2Fcss%22%3E'%2Bz%2B%22%3C%2Fstyle%3E%22)%3Bvar%20d%3D'%3Cspan%20class%3D%22shortcut%22%3En%3C%2Fspan%3E%20-%20go%20to%20the%20next%20section%20%7C%20%3Cspan%20class%3D%22shortcut%22%3Ep%3C%2Fspan%3E%20-%20go%20to%20the%20previous%20section%3Cbr%2F%3E%3Cspan%20class%3D%22shortcut%22%3Ee%3C%2Fspan%3E%20-%20refresh%20profile%20page%3Cbr%2F%3E%3Cspan%20class%3D%22shortcut%22%3Er%3C%2Fspan%3E%20-%20open%20bb-admin%20profile%20posts%20in%20new%20tab%3Cbr%2F%3E%3Cspan%20class%3D%22shortcut%22%3Ew%3C%2Fspan%3E%20-%20remove%20or%20add%20(back)%20website%20url%3Cbr%2F%3E%3Cspan%20class%3D%22shortcut%22%3Ez%3C%2Fspan%3E%20-%20select%2Fdeselect%20%22This%20user%20is%20a%20bozo%22%20checkbox%3Cbr%2F%3E%3Cspan%20class%3D%22shortcut%22%3Ex%3C%2Fspan%3E%20-%20select%2Fdeselect%20%22Akismet%20Never%20Trust%22%20checkbox%3Cbr%2F%3E'%3Bshortcut_top%3DA('%3Cp%20id%3D%22shortcut_top%22%3E'%2BQ%2B%22%3C%2Fp%3E%22)%3Bshortcut_top.append(N)%3Bu%3D%22%3Cp%3E%22%2BD%2Bd%2B%22%3C%2Fp%3E%22%3BV.append(shortcut_top%2Cu)%3BA(%22body%22).append(V)%3Bw.insertBefore(A(%22%23profile-form%22)).wrap(%22%3Cp%3E%3C%2Fp%3E%22)%3Bb()%3BI%3DA(%22%23user_url%22)%3BJ%3DI.val()%3BY%3DA(%22input%23is_bozo%22)%3Bt%3DA(%22%23elf_not_trusted%22)%3Be%3D%22current_section%22%3Bn%3D%22%23profile-form%20h3.current_section%22%3Bs%3D%22h3.section%3Afirst%22%3BW%3DA(%22%23profile-form%20h3%22)%3BW.addClass(%22section%22)%3BA(%22h3%3Acontains('Mailing%20Lists')%22).removeClass(%22section%22)%3BA(%22h3%3Acontains('Administration')%22).addClass(%22admin_section%22)%3BA(%22label%5Bfor%3D'user_url'%5D%22).append('%20%3Cspan%20class%3D%22shortcut%22%3E(w)%3C%2Fspan%3E')%3BA(%22label%5Bfor%3D'is_bozo'%5D%22).append('%20%3Cspan%20class%3D%22shortcut%22%3E(z)%3C%2Fspan%3E')%3BA(%22label%5Bfor%3D'elf_not_trusted'%5D%22).append('%20%3Cspan%20class%3D%22shortcut%22%3E(x)%3C%2Fspan%3E')%3Bg%3DA(%22%23wporg-header%22)%3BC%3DA(%22%23wporg-footer%22)%3BL(%22%23profile-form%22)%3Bf()%3BK()%3BU()%3By()%3Bq()%7Dfunction%20m()%7BA(%22head%22).append('%3Cstyle%20type%3D%22text%2Fcss%22%3E'%2Bz%2B%22%3C%2Fstyle%3E%22)%3Bvar%20d%3D'%3Cspan%20class%3D%22shortcut%22%3Em%3C%2Fspan%3E%20-%20show%2Fhide%20menu%3Cbr%2F%3E%3Cspan%20class%3D%22shortcut%22%3Ee%3C%2Fspan%3E%20-%20open%20edit%20profile%20in%20new%20tab%3Cbr%2F%3E%3Cspan%20class%3D%22shortcut%22%3Er%3C%2Fspan%3E%20-%20open%20bb-admin%20profile%20posts%20in%20new%20tab%3Cbr%2F%3E'%3Bshortcut_top%3DA('%3Cp%20id%3D%22shortcut_top%22%3E'%2BQ%2B%22%3C%2Fp%3E%22)%3Bshortcut_top.append(N)%3Bu%3D%22%3Cp%3E%22%2Bd%2B%22%3C%2Fp%3E%22%3BV.append(shortcut_top%2Cu)%3BA(%22body%22).append(V)%3Bvar%20Z%3DA(%22.topicnav%22).find(%22p%22)%3BZ.css(%22margin%22%2C%220%200%20.5em%22)%3Bw.insertAfter(Z).wrap(%22%3Cp%3E%3C%2Fp%3E%22)%3Bb()%3BA.each(%5B%22%23user-replies%22%2C%22%23user-threads%22%5D%2Cfunction(aa%2Cab)%7BS(ab)%7D)%3BK()%3Bq()%7Dfunction%20r()%7Bvar%20d%3D%22.wpmtprofile_selected%20%7Bbackground-color%3A%20%23efeef5%3Bpadding%3A%203px%206px%3Bmargin%3A%203px%200%3Bdisplay%3A%20inline-block%3B%7D.ip-warning%7Bcolor%3Ared%3B%7D%22%3BA(%22head%22).append('%3Cstyle%20type%3D%22text%2Fcss%22%3E'%2Bz%2Bd%2B%22%3C%2Fstyle%3E%22)%3Bvar%20aa%3D'%3Cspan%20class%3D%22shortcut%22%3Ee%3C%2Fspan%3E%20-%20go%20to%20current%20post%20profile%20page%3Cbr%2F%3E%3Cspan%20class%3D%22shortcut%22%3En%3C%2Fspan%3E%20-%20go%20to%20the%20next%20section%20%7C%20%3Cspan%20class%3D%22shortcut%22%3Ep%3C%2Fspan%3E%20-%20go%20to%20the%20previous%20section%3Cbr%2F%3E%3Cspan%20class%3D%22shortcut%22%3Emouse%20click%3C%2Fspan%3E%20-%20Click%20anywhere%20in%20a%20post%20to%20set%20it%20to%20current%2C%20for%20navigation%20with%20the%20shortcuts%20%3Cspan%20class%3D%22shortcut%22%3En%3C%2Fspan%3E%20and%20%3Cspan%20class%3D%22shortcut%22%3Ep%3C%2Fspan%3E%20(see%20above)'%3Bshortcut_top%3DA('%3Cp%20id%3D%22shortcut_top%22%3E'%2BQ%2B%22%3C%2Fp%3E%22)%3Bshortcut_top.append(N)%3Bu%3D%22%3Cp%3E%22%2BD%2Baa%2B%22%3C%2Fp%3E%22%3BV.append(shortcut_top%2Cu)%3BA(%22body%22).append(V)%3Bvar%20Z%3DA(%22.topicnav%22).find(%22p%22)%3BZ.css(%22margin%22%2C%220%200%20.5em%22)%3Bw.insertAfter(Z).wrap(%22%3Cp%3E%3C%2Fp%3E%22)%3Bb()%3Be%3D%22current_post%22%3Bn%3D%22li.current_post%22%3Bs%3D%22li%3Afirst%22%3BW%3DA(%22.postitem%22)%3BL(%22%23postform%22)%3BL(%22%23head-search%20%3E%20form%22)%3BL(%22%23tag-form%22)%3Bg%3DA(%22%23wporg-header%22)%3BC%3DW.last()%3BU()%3Bo()%3By()%3Bq()%7Dfunction%20f()%7BA(%22html%22).bind(%22keydown.wpmt%22%2Cfunction(ac)%7Bif(G!%3D%3Dfalse)%7Breturn%7Dvar%20d%3DH(ac)%3Bif((87%3D%3D%3Dac.keyCode)%26%26(1%3D%3D%3Dd))%7Bif(I.length%3D%3D1)%7BA(n).removeClass(e)%3Bvar%20ab%3DW.first()%3Bab.addClass(e)%3BT(ab)%3Bif(J)%7Bif(%22%22%3D%3D%3DI.val())%7BI.val(J)%7Delse%7BI.val(%22%22)%7DclearTimeout(aa)%3BI.parents(%22tr%22).css(%22background-color%22%2C%22%23FFFFCC%22)%3Bvar%20aa%3DsetTimeout(function()%7BI.parents(%22tr%22).css(%22background-color%22%2C%22%23FFFFFF%22)%7D%2C300)%7D%7D%7Dif((ac.keyCode%3D%3D%3D90%7C%7Cac.keyCode%3D%3D%3D88)%26%26(d%3D%3D%3D1))%7Bvar%20Z%3D(ac.keyCode%3D%3D%3D90)%3FY%3At%3Bif(Z)%7BT(A(%22h3.admin_section%22))%3Bif(Z.attr(%22checked%22))%7BZ.removeAttr(%22checked%22)%7Delse%7BZ.click()%7DclearTimeout(ad)%3BZ.parents(%22tr%22).css(%22background-color%22%2C%22%23FFFFCC%22)%3Bvar%20ad%3DsetTimeout(function()%7BZ.parents(%22tr%22).css(%22background-color%22%2C%22%23FFFFFF%22)%7D%2C300)%7D%7D%7D)%7Dfunction%20o()%7BZ()%3Bfunction%20Z()%7Bvar%20ac%3DW%3Bvar%20ab%3D%7B%7D%3Bvar%20ad%3D%7B%7D%3Bvar%20aa%3D%7B%7D%3Bac%3Dac.filter(function()%7Bvar%20ae%3DA(this).find(%22.threadauthor%20%3E%20p%20%3E%20strong%22).text()%3Bif(ab%5Bae%5D)%7Breturn%20false%7Delse%7Bab%5Bae%5D%3Dtrue%3Breturn%20true%7D%7D)%3BA.each(ac%2Cfunction(ae%2Caf)%7Bvar%20ag%3DA(this).find(%22.post-ip-link%22).text()%3Bif(ag.length)%7Bif(ad%5Bag%5D)%7Baa%5Bag%5D%3Dtrue%7Delse%7Bad%5Bag%5D%3Dtrue%7D%7D%7D)%3Bif(!A(aa).length)%7Breturn%7DW.each(function()%7Bvar%20af%3DA(this).find(%22.post-ip-link%22)%3Bif(af.length)%7Bvar%20ae%3Daf.text()%3Bif(aa%5Bae%5D)%7Baf.before(A('%3Cspan%20class%3D%22ip-warning%22%3E(DUPLICATE%20IP)%3C%2Fspan%3E%3Cbr%20%2F%3E'))%7D%7D%7D)%7DW.bind(%22click.wpmt%22%2Cfunction(ab)%7Bif(ab.target.nodeName!%3D%22A%22)%7Bd()%3BO()%3BA(this).addClass(e)%3Bvar%20aa%3DA(this).find(%22.authortitle%20a%22)%3Bif(aa.length)%7Baa.addClass(%22wpmtprofile_selected%22)%7D%7D%7D)%3BA(%22html%22).bind(%22keydown.wpmt%22%2Cfunction(ad)%7Bif(G!%3D%3Dfalse)%7Breturn%7Dvar%20ab%3DH(ad)%3Bvar%20ac%3DA(n)%3Bif(ac.length)%7Bd()%3Bvar%20aa%3DA(ac).find(%22.authortitle%20a%22)%3Bif(aa.length)%7Baa.addClass(%22wpmtprofile_selected%22)%3Bif((ad.keyCode%3D%3D%3D69)%26%26(ab%3D1))%7BB(aa.attr(%22href%22))%7D%7D%7Delse%7Bd()%7D%7D)%3Bfunction%20d()%7BA(%22.authortitle%20%3E%20a%22%2CW).removeClass(%22wpmtprofile_selected%22)%7D%7Dfunction%20x(d%2Cab)%7BZ()%3BA(%22html%22).bind(%22keydown.wpmt%22%2Cfunction(aj)%7Bif(G!%3D%3Dfalse)%7Breturn%7Dvar%20ai%3DH(aj)%3Bvar%20ak%3Bif((aj.keyCode%3D%3D%3D83)%26%26(ai%3D%3D%3D1))%7Bak%3DA(n)%3Bif(ak.length%3D%3D1)%7BT(ak)%3Bvar%20ae%3Dak.find(X)%3Bae.attr(%22checked%22%2C!ae.attr(%22checked%22))%3BZ()%7D%7Dif((aj.keyCode%3D%3D%3D68)%26%26(ai%3D%3D%3D1))%7BA(%22.bulk-form%20select%5Bname%3Daction%5D%20%3E%20option%3Aselected%22).removeAttr(%22selected%22).next(%22option%22).attr(%22selected%22%2C%22selected%22)%7Dif((aj.keyCode%3D%3D%3D65)%26%26(ai%3D%3D%3D1))%7Bk%3D(E.attr(%22checked%22))%3F%22off%22%3A%22on%22%3Baa()%7Dif((aj.keyCode%3D%3D%3D72)%26%26(ai%3D%3D%3D1))%7BA(%22%23shortcut_list%22).toggle()%3Bak%3DA(n)%3Bif(ak.length)%7BT(ak)%7D%7Dif((aj.keyCode%3D%3D%3D73)%26%26(ai%3D%3D%3D1))%7Bvar%20al%3D%5B%5D%3BA(%22.post_selected%22).each(function()%7Bvar%20an%3DA(this).children().first(%22a%22).attr(%22href%22)%3Bif(al.indexOf(an)%3D%3D-1)%7Bal.push(an)%3BB(an%2B%22%2Fedit%22)%7D%7D)%7Dif((aj.keyCode%3D%3D%3D69)%26%26(ai%3D%3D%3D1))%7Bak%3DA(n)%3Bif(ak.length%3D%3D1)%7Bvar%20ad%3Dak.find(%22.edit_profile_link%20%3E%20a%22).attr(%22href%22)%3Bif(ad.length)%7BB(ad)%7D%7D%7Dif(!M%26%26(W.length%3E%3D1))%7Bif(i.hasOwnProperty(90)%7C%7Ci.hasOwnProperty(88))%7Bvar%20ag%3D(i.hasOwnProperty(16)%26%26(ai%3D%3D%3D2))%3F%22bozo%22%3A%22normal%22%3Bif(ag%3D%3D%22bozo%22)%7BW.removeClass(%22current_normal_post%22)%7Delse%7BW.removeClass(%22current_bozo_post%22)%7Dvar%20am%3Di.hasOwnProperty(90)%3F%22z%22%3A%22x%22%2Caf%3DA(%22.%22%2Bag%2B%22_post%22)%3Bif(af.length)%7Bif(A(%22.current_%22%2Bag%2B%22_post%22).length%3D%3D%3D0)%7Bak%3D(am%3D%3D%22z%22)%3Faf.first()%3Aaf.last()%3BW.removeClass(e)%3Bak.addClass(%22current_%22%2Bag%2B%22_post%20%22%2Be)%3BT(ak)%7Delse%7Bif(af.length%3D%3D1)%7Bvar%20ah%3Daf.first()%3BW.removeClass(e)%3Bah.addClass(e)%3BT(ah)%7Delse%7Bvar%20ac%3Bak%3DA(%22.current_%22%2Bag%2B%22_post%22)%3Bif(am%3D%3D%22z%22)%7Bac%3Dak.nextAll(%22.%22%2Bag%2B%22_post%3Afirst%22)%7Dif(am%3D%3D%22x%22)%7Bac%3Dak.prevAll(%22.%22%2Bag%2B%22_post%3Afirst%22)%7Dif(ac.length)%7BW.removeClass(e)%3Bak.removeClass(%22current_%22%2Bag%2B%22_post%22)%3Bac.addClass(%22current_%22%2Bag%2B%22_post%20%22%2Be)%3BT(ac)%7D%7D%7D%7D%7D%7D%7D)%3BA(E).bind(%22click.wpmt%22%2Cfunction()%7Bk%3D(A(this).attr(%22checked%22))%3F%22on%22%3A%22off%22%3Baa()%7D)%3BW.bind(%22click.wpmt%22%2Cfunction(ac)%7Bif(ac.target.nodeName!%3D%22A%22)%7BA(%22tbody%20tr%22).removeClass(e)%3BA(this).addClass(e)%7D%7D)%3BA(%22tbody%20%3E%20tr%20%3E%20%22%2BX).bind(%22click.wpmt%22%2Cfunction(ac)%7BZ()%7D)%3Bl.bind(%22click.wpmt%22%2Cfunction(ac)%7Bif(ac.target.nodeName!%3D%22A%22)%7BZ(A(this).parent().attr(%22id%22))%7D%7D)%3Bd.bind(%22click.wpmt%22%2Cfunction(ac)%7Bac.preventDefault()%3BA(%22%23shortcut_list%22).toggle()%7D)%3Bfunction%20aa()%7Bl.each(function()%7Bvar%20ac%3DA(this).parent().find(X)%3Bif(k%3D%3D%22on%22)%7Bac.attr(%22checked%22%2Ctrue)%7Delse%7Bac.attr(%22checked%22%2Cfalse)%7D%7D)%3BZ()%3Bk%3Dfalse%7Dfunction%20Z(ag)%7BV.children(%22%23detected%22).remove()%3Bvar%20aj%3D0%2Cae%3D0%2Caf%3D0%2Cah%3D0%2Cad%3Dfalse%3Bl.each(function()%7Bvar%20aq%3DA(this).parent().children(%22.check-column%22).css(%22background-color%22)%2Cap%3DA(this).parent().attr(%22class%22)%2Can%3DA.trim(A(this).children().first(%22a%22).text())%2Cao%3DA(this).parent().find(X)%3BA(this).css(%22background%22%2Caq)%3Bif(A(this).children(%22.edit_profile_link%22).length%3D%3D%3D0)%7Bvar%20am%3DA(%22img%22%2CA(this).children().first(%22a%22))%2Cal%3D'%3Cbr%2F%3E%3Cspan%20class%3D%22edit_profile_link%22%3E%3Ca%20href%3D%22'%2BA(this).children().first(%22a%22).attr(%22href%22)%2B'%2Fedit%22%3EEdit%20Profile%3C%2Fa%3E%3C%2Fspan%3E'%3Bif(an.indexOf(%22(BOZO)%22)%3E%3D0)%7Ban%3DA.trim(an.replace(%22(BOZO)%22%2C%22%22))%3BA(this).children().first(%22a%22).text(%22%20%22%2Ban)%3Bif(am)%7BA(this).children().first(%22a%22).prepend(am)%7DA(this).append('%3Cspan%20class%3D%22bozo_span%22%20%3EBOZO%3C%2Fspan%3E')%3BA(this).parent().addClass(%22bozo_post%22)%3B%2B%2Bae%7Delse%7BA(this).parent().addClass(%22normal_post%22)%7DA(this).children().first(%22a%22).after(al)%7Delse%7Bif(A(this).children(%22span.bozo_span%22).length)%7B%2B%2Bae%7Delse%7BA(this).parent().addClass(%22normal_post%22)%7D%7Dif(ao.attr(%22checked%22))%7BA(this).attr(%22style%22%2C%22background%3A%20%22%2Bh%2B%22%3B%22)%3BA(this).addClass(%22post_selected%22)%7Delse%7BA(this).css(%22background%22%2Caq)%3BA(this).removeClass(%22post_selected%22)%7Dif((typeof(ag)!%3D%3D%22undefined%22)%26%26(ag%3D%3DA(this).parent().attr(%22id%22)))%7Bif(ao.attr(%22checked%22))%7BA(this).css(%22background%22%2Caq)%3Bao.attr(%22checked%22%2Cfalse)%3BA(this).removeClass(%22post_selected%22)%7Delse%7BA(this).attr(%22style%22%2C%22background%3A%20%22%2Bh%2B%22%3B%22)%3Bao.attr(%22checked%22%2Ctrue)%3BA(this).addClass(%22post_selected%22)%7D%7D%7D)%3Bvar%20ac%3DA(%22tbody%20%3E%20tr%22).length%3Baf%3DA(%22tbody%20%3E%20tr%20%3E%20%22%2BX%2B%22%3Achecked%22).length%3Bif(af%3Cac)%7BA(E).attr(%22checked%22%2Cfalse)%7Dif(af%3D%3Dac)%7BA(E).attr(%22checked%22%2Ctrue)%7Dvar%20ak%3D%22%22%3Bvar%20ai%3D(M)%3F%22topic%22%3A%22post%22%3Bak%2B%3D%22Current%20Page%3A%20%22%2Bac%2B%22%20%22%2Bai%2B((ac%3D%3D1)%3F%22%22%3A%22s%22)%3Bif(!M)%7Bak%2B%3D'%20%26%2310022%3B%20%3Cspan%20class%3D%22profile_type%22%3E'%3Bak%2B%3D(ae%3E0)%3Fae%2B%22%20bozo%22%2B((ae%3D%3D1)%3F%22%22%3A%22s%22)%3A%220%20bozos%22%3Bak%2B%3D%22%3C%2Fspan%3E%22%3Bak%2B%3D'%20%26%2310022%3B%20%3Cspan%20class%3D%22profile_type%20green%22%3E'%3Bak%2B%3D(ac-ae%3E0)%3F(ac-ae)%2B%22%20normal%20profile%22%2B(((ac-ae)%3D%3D1)%3F%22%22%3A%22s%22)%3A%22no%20normal%20profiles%22%3Bak%2B%3D%22%3C%2Fspan%3E%22%7Dak%2B%3D'%20%7C%20%3Cspan%20style%3D%22background-color%3A%20'%2Bh%2B'%3B%20padding%3A%205px%207px%3B%22%3E'%3Bak%2B%3D(af%3E0)%3Faf%2B%22%20%22%2Bai%2B((af%3D%3D1)%3F%22%22%3A%22s%22)%2B%22%20selected%22%3A%22No%20%22%2Bai%2B%22s%20selected%22%3Bak%2B%3D%22%3C%2Fspan%3E%20%7C%20%22%3BV.children(%22%23shortcuts%22).before('%3Cspan%20id%3D%22detected%22%20style%3D%22padding-bottom%3A%201em%3B%22%3E'%2Bak%2B%22%3C%2Fspan%3E%22)%7D%7Dfunction%20K()%7Bvar%20ad%3DA(%22%23profile-menu%22)%3Bvar%20ac%3Bvar%20Z%3Bvar%20ab%3Bif(A(ad).length)%7Bac%3Dad.find(%22a%22).filter(function(ae)%7Breturn%20A(this).text()%3D%3D%3D%22Edit%22%7D)%7Dif(A(ac).length)%7BA(ac).text(%22Edit%20(e)%22)%3BZ%3DA(ac).attr(%22href%22)%3Bvar%20d%3DA(%22%23userlogin%22)%3Bif(d.length)%7Bab%3D%22http%3A%2F%2Fwordpress.org%2Fsupport%2Fbb-admin%2Fposts.php%3Fforum_id%3D0%26post_author%3D%22%2BA(d).text()%3Bvar%20aa%3DA('%3Cli%3E%3Ca%20href%3D%22'%2Bab%2B'%22%20rek%3D%22_blank%22%3Ebb-admin%20(r)%3C%2Fa%3E%3C%2Fli%3E')%3BA(ac).parent().after(aa)%7D%7Dif((Z.length)%7C%7C(ab.length))%7BA(%22html%22).bind(%22keydown.wpmt%22%2Cfunction(af)%7Bif(G!%3D%3Dfalse)%7Breturn%7Dvar%20ae%3DH(af)%3Bif((af.keyCode%3D%3D%3D69)%26%26(Z.length))%7Bif(ae%3D%3D%3D1)%7Bif(A(%22%23profile-form%22).length)%7Blocation.reload(true)%7Delse%7BB(Z%2B%22%2Fedit%22)%7D%7D%7Dif((af.keyCode%3D%3D%3D82)%26%26(ab.length))%7Bif(ae%3D%3D%3D1)%7BB(ab)%7D%7D%7D)%7D%7Dfunction%20U()%7Bvar%20d%3BA(%22html%22).bind(%22keydown.wpmt%22%2Cfunction(ab)%7Bif(G!%3D%3Dfalse%7C%7C(typeof(W)%3D%3D%3D%22undefined%22))%7Breturn%7Dvar%20aa%3DH(ab)%3Bif(ab.keyCode%3D%3D%3D78%7C%7Cab.keyCode%3D%3D%3D80)%7Bvar%20Z%3Dab.keyCode%3D%3D%3D78%3F%22n%22%3A%22p%22%3BW.removeClass(%22current_normal_post%20current_bozo_post%22)%3Bif(A(n).length%3D%3D%3D0)%7Bif((Z%3D%3D%22n%22)%26%26(aa%3D%3D%3D1))%7Bd%3DW.first()%3BT(d)%3Bd.addClass(e)%7D%7Delse%7Bd%3DA(n)%3Bif((Z%3D%3D%22n%22)%26%26(aa%3D%3D%3D1))%7Bif(d.nextAll(s).length)%7Bd.removeClass(e).nextAll(s).addClass(e)%3BT(A(n))%7Delse%7BT(A(n))%7D%7Dif((Z%3D%3D%22p%22)%26%26(aa%3D%3D%3D1))%7Bif(d.prevAll(s).length)%7Bd.removeClass(e).prevAll(s).addClass(e)%3BT(A(n))%7Delse%7Bd.removeClass(e)%3BT(g)%7D%7D%7D%7D%7D)%7Dfunction%20y()%7BA(%22html%22).bind(%22keydown.wpmt%22%2Cfunction(aa)%7Bif(G!%3D%3Dfalse)%7Breturn%7Dvar%20d%3DH(aa)%3Bif((aa.keyCode%3D%3D%3D84)%26%26(d%3D%3D%3D1))%7Bif(g.length)%7BT(g)%3Bif(typeof(W)!%3D%3D%22undefined%22)%7BO()%7D%7D%7Dif((aa.keyCode%3D%3D%3D66)%26%26(d%3D%3D%3D1))%7Bif(C.length)%7BT(C)%3Bif(typeof(W)!%3D%3D%22undefined%22)%7BO()%3Bvar%20Z%3DW.last()%3BZ.addClass(e)%7D%7D%7D%7D)%7Dfunction%20q()%7BN.bind(%22click.wpmt%22%2Cfunction(aa)%7Baa.preventDefault()%3BV.toggle()%3BA(%22%23shortcut_list%22).hide()%3Bvar%20d%3D(V.is(%22%3Avisible%22))%3F%22hide%22%3A%22display%22%3Bw.text(%22type%20m%20to%20%22%2Bd%2B%22%20menu%22)%3Bvar%20Z%3DA(n)%3Bif(Z.length)%7BT(Z)%7D%7D)%3BA(%22html%22).bind(%22keydown.wpmt%22%2Cfunction(ab)%7Bif(G!%3D%3Dfalse)%7Breturn%7Dvar%20Z%3DH(ab)%3Bif((ab.keyCode%3D%3D%3D77)%26%26(Z%3D%3D%3D1))%7BV.toggle()%3BA(%22%23shortcut_list%22).hide()%3Bvar%20d%3D(V.is(%22%3Avisible%22))%3F%22hide%22%3A%22display%22%3BA(%22%23extra_info_text%22).text(%22type%20m%20to%20%22%2Bd%2B%22%20menu%22)%3Bvar%20aa%3DA(n)%3Bif(aa.length)%7BT(aa)%7D%7D%7D)%7Dfunction%20T(Z)%7Bvar%20ab%3DZ.offset().top%3Bvar%20d%3D65%3Bvar%20aa%3DA(%22%23moderator_tools_menu%22)%3Bif(aa.length)%7Bif(aa.is(%22%3Avisible%22))%7Bd%3Daa.height()%3Bd%2B%3D30%7Delse%7Bif((A(Z).height()%2Bd)%3EA(window).height())%7Bd%3D5%7D%7D%7Dab%3Dab-d%3BA(%22html%2C%20body%22).animate(%7BscrollTop%3Aab%7D%2C%7Bduration%3A150%7D)%7Dfunction%20O()%7Bif(A(W).length)%7BW.removeClass(%22current_post%20current_normal_post%20current_bozo_post%20current_section%22)%7D%7Dfunction%20L(d)%7Bel%3DA(d)%3Bif(el.length)%7Bel.focusin(function()%7BG%3Dtrue%7D).focusout(function()%7BG%3Dfalse%7D)%7D%7Dfunction%20H(d)%7Bi%5Bd.which%5D%3Dtrue%3Breturn%20Object.keys(i).length%7Dfunction%20B(d)%7BsetTimeout(function()%7Bwindow.open(d%2C%22_blank%22)%7D%2C200)%7DA(document).bind(%22keyup.wpmt%22%2Cfunction(d)%7Bdelete%20i%5Bd.which%5D%7D)%3Bfunction%20S(d)%7Bvar%20Z%3DA(d).find(%22a%22)%3Bif(A(Z).length)%7BA(Z).attr(%22href%22%2Cfunction()%7Bvar%20ab%3Dthis.search%3Bvar%20aa%3Dthis.protocol%2B%22%2F%2F%22%2Bthis.host%2Bthis.pathname%3Bvar%20ac%3Dfalse%3Bif(ab)%7Bvar%20ad%3D%2Fview%3Dall%2Fg%3Bif(!ad.test(ab))%7Bac%3Daa%2Bab%2B%22%26view%3Dall%22%7D%7Delse%7Bac%3Daa%2B%22%3Fview%3Dall%22%7Dif(ac)%7Breturn%20ac%2Bthis.hash%7Dreturn%20this%7D)%7D%7DP()%7D)(jQuery)