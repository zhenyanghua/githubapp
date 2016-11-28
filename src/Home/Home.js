import React from 'react'
import {Card, CardTitle, CardText} from 'react-mdl'
import './Home.css'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Card className="Home-card" shadow={3}>
          <CardTitle>Welcome</CardTitle>
          <CardText>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui felis, efficitur ac ex at, consequat accumsan ligula. Proin tincidunt elit a lorem consequat, semper sodales lacus feugiat. Cras ut sagittis turpis. Donec eros diam, efficitur non placerat aliquet, rhoncus nec sem. In dapibus elementum tincidunt. Curabitur nec ipsum eget justo consequat sagittis. Mauris dignissim turpis non augue gravida imperdiet. Mauris eget tellus ac leo tempor pulvinar. Phasellus lorem neque, ornare sed consectetur at, faucibus et ex. Phasellus placerat est sed accumsan rhoncus. Nulla facilisi. Donec iaculis cursus turpis, eu feugiat ante tempus ut. Vestibulum elit nibh, pulvinar eu elit eu, rhoncus malesuada dolor.
            </p>
            <p>
              Mauris posuere commodo dui ut cursus. Donec ac erat nec ante bibendum semper. Pellentesque justo nulla, laoreet vel felis eget, sollicitudin lacinia est. Nulla at laoreet dolor. Donec facilisis erat quis massa euismod efficitur. In facilisis metus eros, eu egestas augue venenatis ut. Vestibulum rhoncus nunc et diam posuere, vel dapibus ex semper. Suspendisse vitae felis ac dolor ullamcorper commodo. Nulla cursus volutpat nisi eget accumsan. Nullam mattis quis libero ac lobortis. Aliquam aliquet ante sed quam interdum tincidunt at ac mauris. Nullam rhoncus nisl eu blandit molestie. Praesent sit amet lectus nisl. Aliquam lobortis, ipsum non gravida vehicula, mauris lacus vehicula augue, nec iaculis leo tortor sed eros. Aenean pretium leo mi, a suscipit massa sodales viverra.
            </p>
            <p>
              Aliquam sollicitudin, risus nec sodales aliquam, sapien libero efficitur leo, non posuere sem turpis vel mi. Mauris ut libero at orci efficitur aliquam at vel nunc. Curabitur a vulputate diam. In sodales commodo libero non malesuada. Etiam et mauris pharetra, commodo augue sed, tempor turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec congue ligula odio, a rhoncus neque iaculis a. Aenean vestibulum ex non nisi pharetra, rhoncus rhoncus tortor viverra. Proin quis porttitor purus, ac iaculis nisl. Suspendisse pharetra ex viverra, finibus ante vel, vulputate elit. Suspendisse lobortis, felis ac pulvinar fermentum, ante lectus finibus lacus, ac varius nulla ligula in mi. Morbi eget faucibus ipsum, pulvinar viverra risus. Duis aliquet nisi purus, vitae vulputate erat dignissim in. Praesent sed nunc at nibh lobortis scelerisque. Aenean accumsan libero in neque finibus consectetur. Mauris vel semper metus, ac tincidunt nisi.
            </p>
            <p>
              Proin luctus malesuada neque, sed consequat dolor tincidunt eu. Proin dictum tincidunt enim, non luctus velit sollicitudin nec. Sed pharetra quam nec lectus imperdiet semper. Ut a sem sed metus vestibulum sodales non iaculis nulla. Pellentesque felis orci, vulputate quis ipsum et, congue dignissim nunc. Maecenas eleifend feugiat tincidunt. Cras lectus est, eleifend ac augue vitae, rutrum hendrerit risus. Mauris ornare pharetra est sit amet malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam libero ex, pulvinar nec eleifend id, vehicula ut magna. Suspendisse et elit vel lacus fermentum viverra vitae vitae enim. Morbi sit amet erat est. In porttitor, tortor vitae fringilla lobortis, nibh ante consequat ex, nec suscipit arcu ex ut lacus. Fusce volutpat auctor massa cursus commodo. Nullam hendrerit lectus in enim feugiat, sit amet mollis risus scelerisque. Cras sit amet eleifend turpis.
            </p>
            <p>
              Sed pretium sollicitudin nibh, quis egestas diam volutpat non. Sed gravida quis arcu eu ultricies. Cras varius odio sit amet sapien convallis imperdiet. Sed mollis massa id sem pulvinar tempor. Nullam nec congue mauris, eu facilisis quam. In sapien dolor, dignissim in leo quis, finibus vestibulum magna. Fusce fermentum urna ut viverra elementum. Praesent sem dolor, tempus ut varius vitae, semper eget felis. Quisque ac eros nibh. Duis a ante egestas, congue elit non, varius leo. Maecenas tincidunt scelerisque finibus. Nulla eget aliquet dui.
            </p>
          </CardText>
        </Card>
      </div>
    )
  }
}

export default Home