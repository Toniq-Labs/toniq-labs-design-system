import {html} from 'element-vir';
import {defineIcon} from 'vira';

export const WalletLeather64Icon = defineIcon({
    name: 'WalletLeather64Icon',
    svgTemplate: html`
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <rect width="64" height="64" fill="url(#pattern0_3428_1905)" />
            <defs>
                <pattern
                    id="pattern0_3428_1905"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use xlink:href="#image0_3428_1905" transform="scale(0.015625)" />
                </pattern>
                <image
                    id="image0_3428_1905"
                    width="64"
                    height="64"
                    xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAC/FJREFUeF7tWwtsFHUa/83so91uu90+pKX10RLQ8BSDepp4PDwNSjmRx4FnjFDwqtEEWs9yxpqDC1c4zYkluQJKwhHjcV6DinJSFWkJWEQ8FaiJgDxakYpA24Xuq/uYvft9w5RegbLLgrTAlxC7M/+Z+X+/7/c9x1HQRTKdztERTXsYCiYAyOt6vuvviHK+FT3i/A4AOzSof3K5XA2dd9SxfafT6TRr2ryIguJYttxLAOisUsUpIFw8KABQeTWi1SrA8FiU59peCAC3TTaMcblcLgEg0+F4NVbLG0D1UgC4/YoW18kSxel05pki2sFYLX8FAAAV6hglw+FYBQXTr0YAACxR0lMdX3fn+72Y4tHYtEHJSHVEult5hQOAcwLQVXHtHPle7Ra+aIxweddcA+BcLmAwoLPleUw5j8V7GyPOywADAAOQqxaAaD31imXANQCiROAaA6JMi6pqQigUhKqqAi1/a1o4Spj1ZZqmdVwf04WdFivpzu4LIWOtEQxjtbDTmYbW1ha0t7cjMTFR/utwOGTzXq8PbR4vMtPTYDKp8ptrVFXBsWPN6N+/H/Lz++H666+Xbfzwww84dOgQmpoOw2y2wOfzIiEh4UJ1l+suOQBWqxV+vx/hsAaz2YRIJCKbp5ABiqKIEjxPhZKTk3HTTXmYPHkSxo4dK2ClpaXLegJZW1uL1atXY8eOnThxwoWUlJSeDUAgEBAFzWYzQqEQFEUVxSkEggCEwyEQKJvNhuHDh2PRokXo2zdHmMDzPEfhvUKhMI4c+RFFRU+ivn6XnI9HLjkDRo0aJRYkCH6/D42Njdi/fz+OHz8u1vX5fKJYZmYm8vLysXTpUtxwww3iEjxusVgQDOqA8W8qbDKZsaSiAn+rrITX64lH/+hdIJan0GK01IABA7B69T+Qnp4hvk+6zpv3R6xc+XcJeFTEYjHLuSFDhuKll/6CgQMHCUN4DwJgtyfj2LFjuO6668R9EpNs8LrdqK+vx7Rp09DW1hbL1s5YGzUDon2KEZlpqSlTpmD+/PmiOJVkLBg3bhz27dsHBkdSn1mA7Fi2bDlGjvwlgkHdHbh+7dp3UVVVhT179uKZZ57B008/jWBQd4PGxgZMnz5dgmI8ctEBoNUIAmXFihUoKBgvCkYiGr788kuxGpWjuFwnkJubjd8++igWlpd3gMT1a9euRWlpKYJBTdhSWFgoYBpxQAdghsSDeOSiA0ArJyXZxd8//PBDDB06TKhL2bJlMwoLZ8rfes7XcPMttwhQgwYOxMmTJwWsmpoalM6di0Pff4+UlFRJjatWrcLQoUNhsyXB43Fj1y7dBciieOSiA0C6M5/Tj6urqzFs2LBTaS6ImtpaPFlUBK/PB4/bLcefeOIJUTYtzQG32y0uUFJSgurq9Wj3B6GaTHjsscdQUvx73HjjjXod4XRiUXk5Xn75pZ+vEIoWZQY2WpI5f82at3HHHbfLpYmJVrS6XBIXvtu7F36/V7JAVdUa3HbbbVDUiET46vXVePbZZwUkFkCTJk7GnOJiJFhtYnlec+DAAUycOAlHjx6NuXrsqsdFZwADlJHnn3uuVJQhGFQ4rGmo+/RT8eWjR4/gprw8bNq0SWjMQgiKhhfLysR1qOiCBeX4xZ13w2yxIMlmh8fjlYzwyit/xRtvvNFRREVrnLOtu+gAkKKpqaloa3NjxIgRWLhwoVjY53PDZDZLPGg6fBhr1lQhLz8fU6ZMRiAQlHRIkFauXImsrGyMH1+AQCCEZLtDaM642tT0I8rL/4x169ZJoCVjfrZC6Hwod90IKz7KhAkTxOLWBDMyMzIQCAbFj80mk7gKY4YWicBkYmkclrigR3q9USL1g6EQ9uzeKxXi5s2b/28rRoA93/7Odf6iMqAzCAYAVqsFZWUv4pFHfiMMSLbbBQAjVZ7emAZFVRDRIuIqvJcUSf4gtm7disrKZfjii/+c4fM9BgBuxGhtqZQBABVJT0/DwxMnYNasWchI18tiHmfK5DXsE5gSJT1GIrAlJuJw02FJdW+veQef1tXh2NFmeL1epKY6ZJ0Bdo8AwLCmiTw+JQYADIBsejyekxgyZIhkgbvuukv+JgBGo2MA8O3ub/HJJxvx0UcfoeFgo2SDJJsNJ0+6O1rqHgMA0affGkK/ZQA8ceKEWMjpdMqmw2FmhpDQnmBkZ2dh3br3pL6n0DUqKyulwSH9DdHCYUQiigROw+LxBr2LmgY5xWHXRuWoKKM5f3OTVJTWZcVHkIzjvObOO+/AsuVLBSyJB+EwnnzqKXy+bVvvBEAvbSOiLBVk8GJFR4rrYJhO9f1hye9sYoqLZ0uJy/MHDh7Er8ePh9vj6Sib5Z5nYcBpF4tvDtBxn2hHYudKI+znOcigNe1Jdjz00EOS37OyssTqra0ubN/+ObbWbYXb44bb7cG8efMwddoUuSXT4caaGil3w6EQkuz2bl2gMwCdXeOypUHSmz49d+4fMHr0aBlsJCfbhfYulwt9+vSRmECqb9z4Cb766ithQL9+/cRN2N6y1X3//fdhsegu01kMJvGeVJg1AlmmD0Z0d4tH4q4DOL9jgcL5HWt1Ksp+gPROsCXK8ILlK6nPiQ7LWTKGkpRkw5EjP6Go6HfYtm3bWSs7xpXsrCzc+6t7pWiyWvTx2L+qqmRGGK/EDcDc0rmYOWvWqUlvWEpgBj+LRRWLGdGfkV5ASUyG39cGn9crgNR/8w2mP/44jvz0k7iDqrImOC2MI2PGjMHixa8iPz9PWNPS0izHOAy57AzgjI/5n75ttydh9+49eP3111BXtwVpaWkCxozCQtxzz92S9jweP+xJSRLt3W1tQv0FCxbgeHOzVImKcrqWkBhhNotrMU0yztC1GFTZZ7AbpEvEIzEzgLmcFGbwGzx4MDZs2CBDCvqyz+fH888/jzfffFMYoGeHkCj+wAMP4LnSUlFePeW7ZMh3e/dj9pw5Miil+7DrM5QieLQwO0pOf5hd6BIchN533/3iWjwWj8QMgPEGh35+++0j8M4774L1PsvUlpZWvPDCC/jgg38jFArIMCMSCSM3NwcFBQ+iuKQEjhSnsMKkqlL7B9pDaGltxWvLl0v1d+BAg6RPCl1m8OAhMhfkMzhpYrH12WefoaioCK2trT//QMR4pUUWMADW1GwUBvClRnt7QDq8FStex85dO+BwJEsAe3DcWCl9+/TJEuuR/lZLooDg4e9QGFpEEZ/e8PHH+G7fPiCiYkD//hL8Bgy4WdjBZzKzVFRU4K23/imVpTEyv1AWxMwAow/Xq7wINmz4WF5iMCVxg/RRPfi1w2LV6elIdcDraevo4d1ur/zNiG5LsulTYL8++6cwYBIA46UK3S0hQY/+dXV14hINDY3IyEgXwOORmAHoGnULCgpQVlaGnJwcAYRCmgZDAQHEajXLSxBulpbm+72KJRXYufMbFM6YIekzKzsbflGS0+PIqQZJB0DiggxZ/TJImT1nNnbu3CX1gmGMywoAczOrOP7Lzc0VEKQUDhnRWZPs4Gp1Sa5fvHgxtn+xHelpmdLpTZo4ETNnzsStw4fD6/EICHqHqAPAQiglJRn1u+pR9mJZx0yAynOMFm8xFDcD2OkxDbLFnTp1KgYNGiQvPegCnPJyzseBBsdYBw824MemJiTaEhHRFJn1BQMB9M3JwaiRIzFp0iSkZ2TAauHLUwIQlBeg69evx5YtW+R6Wp4sOZv1L6QmiAsAboJWYkaw2RIlIPE9YE5OX2EA01Q4HEBzc4tsnMAYVvZ4/VL7UxmL1Qpnaip8fr+wqCsAzDAeD+sMPUUaQ5Azx3Cxl8UxA9DZ37pvRk739dH5qF43RCNdp0AXYnnjOXEB0P1mLx0AfG5nEK5KAKJhSjRrei0DolEumjWXEIBoHn/511wDIN6R2OW3YXw7uMaAawxwOvjB1Hk/kIyPaD326h10gYr//T+Ic3rsFi/txlYp/FRWg1Z7aZ/TM++uQc2X7uEqZYH+4SQBkE9ndRbE/Olsz7Rt97tSgK/DUO/t+HS2Ewjzr/B4wJHVkjM+nu6MFz+lVaERiFsvAyOi/NogZt7xk/n3VKjvHXe5NnW++r84cB8qGnjw7wAAAABJRU5ErkJggg=="
                />
            </defs>
        </svg>
    `,
});
