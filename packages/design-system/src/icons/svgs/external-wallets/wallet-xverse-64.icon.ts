import {html} from 'element-vir';
import {defineIcon} from 'vira';

export const WalletXverse64Icon = defineIcon({
    name: 'WalletXverse64Icon',
    svgTemplate: html`
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="64" height="64" fill="url(#pattern0_3428_1910)" />
            <defs>
                <pattern
                    id="pattern0_3428_1910"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3428_1910" transform="scale(0.015625)" />
                </pattern>
                <image
                    id="image0_3428_1910"
                    width="64"
                    height="64"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAACxtJREFUeF7tW31sVeUdft7zde/tvf1u15YqgdRpNHHiMgQyzGRONLqEhTgzgWkGS4wjiDowKGSUD5WRCbj9ofGPTUTFMAQ7QCZMZdM/ls3YoqL/4KypVj5q7W3v9/l45/Penu5yW6ftabwCfZObntPzvue+v+f3/D7PPQJFo7Gx8RohxE+klPMATCm+fjaeSyk7PpepA8C6EydOdBbKIPyTKVOmVKXT6bVCiLvPRiG/6p6llNsikci6zs7OPq5RAAwK/6oQYtpXvdHZPI+MiEQicwiCAqChoWHrua75YoWRCSdPnrxHNDY20s4/OJs1GmDvcwjAk58DcHuAm5y1S4UQj4qGhob288X2R9BUJxkgz1oVjsPGJwCYYEDJTUAbJLI3DoQe/S2+ASYwAcD5zABqv5ABX78ZlNgEggGgaRo8LxhoJQdA+gwQDoSWF0a6LoTQoUnyw4GAp46FOvfAWTnNAjQDAeVHYABM01RasCwLfX190HUdjuPAMAz1P3/Ytq3OXdeFlBJSlWEapNAhNQ+elgGEA124EDYQMmIQtg2Z60XIA3QHqI4Y0D0HPQkgV1OJtAhBoSF9MypBFKDA+/fvR0tLC5LJpAKj4VsN6Pm0B2+++SZWr16N06dPK2BI2VQqldfyIAACOjwBuHoGHlIwYCNm6SjXQ/DicSz56XVoqoyiOlwF08khqkucTmXRHpf4Y9vLyEkLHozRSz64IjADQqEQ3n77bZAJpmFCN/QztH7o0CEsXbpUaT4SiaC/v79gsxp0CiAARyftU4gaadRYOaDPxYLrLsLVF09FOSQsz4SXTiOiS2SMKLrMWqz4/Q706hXIaGWlAyCbzeLdd99FfV29Ep70FiLfaMpkMgiHw9i1axfWrFlTJDxgCBM6TMWMjJeFKVMo1/sQy3lYMPcCzGhpxIVhC6GsDS+jAbaHkA6cyunoq2/BikefQbeoQEIvIQCkPKne3Nw8okeWnlTAPLfzOaxYuUKBQ4HzfsKCZ0uELQPOQBwi2YMLosDPb7occ77TACN1GmUSMF0DmmdBeIZiUipSi46EiY3b23BKlCOlh0vHADq2Y8eOIRaLIZ1OgyZROMgQUp9O8ODBg7j//vuHfAI0DbbrIWZomFoehvvxf7D4xzNxxeQy1IWSKBMpGNKBoJPzyiCVuWg46VjoDE/Cqj/sQNyoQkYrIQDUSFdX15DgxXGZ2vYHTYIOc9myZUqTVjSClOYhlOnHhel+LLvpasz59iSE0j1wnQGUhWwIYwASrgLARRi2IxAP16AjU46Nf2pDXMaQFSUEgDY/f/58bN68GWVlw22RkYHsIPVdx1XmsOfPu7F27Vr0JvqRlFnUmMDPpl+O6y+ZggakUQYb0F2E9TSM9McwRRaeFoItLPSkXVRcMh3PvNGFpw//C71JwMH/wu1obSFwFKCGGfNvvfVWJRRNgNplVPCd4LBNecCup3di3fq16E/EYQqBplgEES+LKguImEA2l8SVzTVY9N0WVCEJRDTYFTGc0iLYf7QL248cx2knDOGNPQfgvgIDQGfGGF9dXY1rr70WDz74ICorK79YEUxcNEAmbbz22j/wy8W/QCrRj0ikDE4uA9NwEQrryKUTmD6pGhtuvBrVThx2TENvOIy/vvM+nj1yDHGrEXHbhHRtlSGOdQQGgDZPJ0dtE4xFixZh27Ztaj90fGTCsOFvWAJvvP5PLLtrKU590g0hJKSXhRXSkMsm8b1Jlfjt/B+hzB7AKV3Ha8c/xM5X2zFghfFJXw7h8npkHVm6TJD0p22TARykfi6Xw4IFC7Bu3TqUl5erkDc0PJnPEwgA/68BbsbBSy8eVCCYplCCWyEBO5vEtOZabFp4I7xUP1555wMc+PdRvB/PwDaj8HSB7k8SqK2rK00m6AtGAPihYL7WfRAefvhhVFRUnEGAIQAGkyUn58AwDTz37DNYufJu6LoG18vAMAWmX9SM239wJbo//BA7Xnwd3SnADpfDJnjCyafUiACyBKnwGZqlMxkUiH9pDvQJ8+bNw3333Yfa2lq1WR+skew1nUxh795daG39DfoSfSiLWqgJaZh1cTP+/koHovU16Po0DYRjcAXgaTlVR2oyVBoT+CIAfHNg0cOIcPPNN+OR3z0CoYm8TyhIlAZJA33oEa2Dlw4dxB2/ugOJZD9ymSRqy01kUjZCZgyGGYMtNaRcF7aeL50tT8fg4Zj84Jid4EgA+GZAE1CJjmWpWmDhwoWqFqCzLGxfuK6E57mK9oamIedmwfr2L/v2oHVDK3p7e5RQYSvEBoBKm5k5skOQ1fMVZcgTpQHAh7sQCEYERgICwWOyoampCU899RSmTRv+4JnzbNeBpg1WkILweMjm0nj5yN9w17K7wFIxNZBCJBJFNpWG0PNRxR30rX6jZEzqH488oJgJpH5NTY2q+xsaGlRInDVr1rAawWcLS2HlzDy2fDwYgpIJZJ0kXmhrw5bN2/DRR92KSawryKzxHGM2gZEYwP/5tUBVVRV27typNE+TKOwOKYF9BzB4I9Ulkg40XUAMNTg87Nu/H/fc/WvE43EVVllwjecYdwCY+NDrb9myBbO/Pxu2YysAGA4TiYSqCwiSHzV8YXxAkqkBlMcqkckmYJkWNM3Anj0v4M477xxKsb9RANDTR6NRVeLSHFgQ7du3D1OnTh2xOBoYGMiD4HqqMCIYXMdCKWfnEA6fWdhImc8zdu/ejfXr16vv4XfQHBhV/KgzVlACM4DU5mb4ueyyy7B161ZcddVV6ry4N1C4Sb9zxL9kiJ9SS1ls45oyF7bSDh8+jHvvvVfdmxGFDrfkbXFu5LPPPkN9fT0ef/xxzJ49e5i9j6QdCvTYY4+hp6cHGzZsUE5uJN/gJ1YEmkx5/vnnsWrVKuUTWGoXZ5qjZUJgBlA7jY2NSviZM2cO9QR9rZIFxfbOaxs3bsQTTzyhzOGWW27BAw88oI6LnaO/Nu8k82w5cOAAHnroIXR3d49W3mHzAwPAO+7duxczZsxQ1PQ16X8TbduT3lBVSEfIGoG5AW2ZaTM9+5IlS1Q/gZ1lx3XUfIZS+pfCQd+RSCaUOSxfvrz0JkA7fO+991BXVwc6OIaqMzbseUprBIZgrF6zGtu3b1cb58fPGOnMbrvtNtUzJK19jRezhwDyO9rb2zF37lzVjAkyAjOAGyUALH6+aHAO2cF0eMeOHWqa3y2igGSASpM9T/UTGEI5uKY4f+B8znvrrbdwww03DDOv0YIRGABqrqOjQzGg8JlAoQn4xy0XtShh2TEiK8ge/1EZj0l3XicIra2tiJZFoelntrz8JgtBJwA8DzICA0DPfPToUZX+FqfFxaZw6aWXKs9dHA4LzwkoNc+myqZNm4aSJpqQLzyfQR4/flwBMGLHaRSIBAaAdORzAdot6VrsxbkX0pabZ37AROb/AUBG0DwIKPsJdJhcz2jC0EmBaS5kHa+TSUFGYABIWWZpkydPVk+Hi51gYYlMp/VlGvMTG/8hy+LFi1U5TQAJAgXmPQn6ypUrg8iu1gYGwPfk1ArpXZz98bqvJV77stSVc/wnyH6WyXv4wvNeBNH3GUGrw8AAjFYFxX4iaCo72u8vnj8BwMQPJUv+Q8mgJA62/ms3gWDbHf/VEwBM+IAJHzDxwgRfmDonXpAcrYtUL1Q2NTVtk1IuH+3ic2T+k4wC1wB49RwRaLRiTFUPps5HFgy9OEkAzrdXZwG0h8PhHw69OuuD8HknpvUc9wdSSvnosJenCw1n8FVaAnHF1/xCZYDfen2p6XdKKduEEG0nTpw4Ujj7v1jqm1fPaXvUAAAAAElFTkSuQmCC"
                />
            </defs>
        </svg>
    `,
});
