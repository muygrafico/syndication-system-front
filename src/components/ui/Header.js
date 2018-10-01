import React from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'

const logoBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAyCAMAAADhjZJVAAABuVBMVEU0NDTpBRLfXxLgVBLhUBLfYxLhTBLfaBLiRhLebBJJOi7iQhLechPjPRLddxNbPithNCqaIh6bHx7jNxLYrhbZqhbdghPdexPkLhLlKRLlIxLlHhDmGBDmEBDnDBDdhxPXshbanxXamhXZpBTblRPcjxPcixPXuRbXvhZJPTBKNy5nSSjXwxd3KyaLOiFANzJybCZyZiZ3MCZ4JSZ4ISaIVSGJTiGTdx6Tbh6cQB6cgh2lFx2mDx2lLhyoKRykJxyeXxufVRvWyRfcOBJBMzJAOTFLSi9QQS5bNSxdLStnRChnVCdnUSdnTidzXiVzWSR0ViSKQiGSgR6bkB2ZXR2aVx2aUh2ZRh2cOB2biRyefRyddhyhRRyjPByjNRynIxyhdRudbxuhbhueaRuhTBu8jhe8hRe9eRbELhbEJhbFHxbUehXXdxPVaxPWYhPXTBPXRBPcURLdQxJRNC5SPS1oJSpjVyhkVihnVyd2RiR2QiR7RyN7QSOBHCOQjB6RiR6RhR6SfR6blh2UaB2UZR2iQBypIByhexvVzhe9fxbGGRbUcxPYcBPYahPZZhPYPRPZYRLaXhLcSxKkMHy0AAAB7klEQVQ4y5XOB1MTQRTA8VWDMWjOEiC2IDkukHBHImqaaNQgHVSQJiIgSpdm753e+cTs2+Vu97gXGH4z+17ezH8yR3KqqyOH+ftz6fohydPsr2xWRGhiGL8NwzgoehYOh9vDVFXupJxqLwe5otsl4E8JU4UnBUyygPuINoVMspD75Cx6Pw/3loJkKfPImTwPNgeHF4NUKgiwRFWbVXVkUFXVlEo9diYvNU1roW9kUNNSdGNJiGqBsTwU+hcKPXEmr8pAK5ujQ//LsOQa08rXaKTemdRPFjF6EUec7vvjk36g+5kO/5vI/kRRlPiqQukK6KAPIjk5A+JTdOjwq5Pda3L0wMMlpjwene7OvXs9IhK3KTHtbnK7u6x7I99M8oTEdFNel3Rv8ej1cdmX999s93YMmnybGKk9a1PL/ueE7Gv3d9s9FyOgzyW0zbhc3dI9Z35030lT2wzMtHXvQMLNn+Kis3yn9+63FUR4cRpEZ2GCNJuQyJHX641uei099NVAIuv3RWt8kh6flQgVDedsCKb/omys4R0W3b0kjNHjBhpdNo1nYKLRvSvceIZvPLoKJjIwQSUaBQKBiYGABY0GilcWiiVoVNl43uYhFjVesEEbUn1McpPgqpEEj0SCu8OTW0RAIiTBIjnB/fhAjmAX2rltWDOGogUAAAAASUVORK5CYII='

const Header = (props) => (
    <header>
        <div className='header__centered-content'>
            <figure>
                <img src={logoBase64} alt='logo' />
            </figure>
            <Nav />
            {props.children}
        </div>
    </header>
)

Header.propTypes = {
  children: PropTypes.any
}

export default Header
