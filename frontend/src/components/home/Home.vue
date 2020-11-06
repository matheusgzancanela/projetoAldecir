<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Bem-Vindo!"
            sub="Site de Notícias" />
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <h2>Ut eget bibendum leo. Aenean in orci ac nisl tempus malesuada..</h2>
            <a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget bibendum leo. Aenean in orci ac nisl tempus malesuada. Donec vitae luctus eros.
                Aenean mollis auctor mi, sed vestibulum lorem bibendum nec. Fusce sit amet dictum ante. Quisque scelerisque gravida ligula et sollicitudin. Quisque 
                sodales nunc id magna pulvinar, ut elementum orci facilisis. Duis gravida, metus feugiat tincidunt sodales, massa turpis pulvinar leo, quis rutrum 
                odio augue quis velit. Aliquam accumsan, nibh vitae consectetur imperdiet, augue metus mollis metus, id semper libero felis quis dolor. Vivamus nunc 
                mauris, cursus ut accumsan a, sollicitudin nec ligula. Curabitur porta mollis est quis accumsan. Nunc fermentum ipsum et neque cursus, non fermentum 
                justo iaculis. Morbi finibus urna metus, eu tincidunt velit viverra a.
                Sed auctor augue nec eleifend consectetur. Nulla nunc nunc, dignissim vel elit vitae, venenatis malesuada metus. Pellentesque porta libero id 
                ipsum lobortis, nec dictum ante fermentum. Pellentesque at ligula dignissim, ornare sem at, cursus purus. Cras dolor leo, porta et pellentesque eget, 
                suscipit sit amet enim. Nulla vitae tempor augue, in egestas lorem. Vivamus eu libero nec erat consequat tincidunt. Quisque vel pulvinar velit. Nunc
                mauris erat, hendrerit ut accumsan ut, dignissim in eros. Aenean ut auctor odio. Vivamus quis purus quis nisl varius efficitur. Etiam vitae tristique
                velit. Donec sit amet tortor at urna porttitor egestas in vel urna. Nulla vitae semper erat. Maecenas at libero ac risus semper lacinia.
            </a>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'

export default {
    name: 'Home',
    components: { PageTitle }
}
</script>

<style>
    .home {
        text-align: center;
    }
</style>
